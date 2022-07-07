import React, { useState, useEffect } from "react";
import { Box, TextareaAutosize, Button, FormControl, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AddCircle as Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { createPost, uploadFile } from "../../service/api";

const useStyle = makeStyles({
  container: {
    margin: "50px 100px",
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },

  root: {
    // marginTop: 10,
    display: "flex",
    flex_Direction: "row",
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "2px dotted",
    marginTop: 60,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
});

const schema = {
  title: "",
  description: "",
  picture: "",
  username: "Faisal Mumtaz",
  categories: "Sports",
  createdDate: new Date(),
};

export const CreateView = () => {
  const css = useStyle();
  const location = useLocation();
  const [file, setFile] = useState("");

  const [post, setPost] = useState(schema);
  const [imageURL, setImageURL] = useState("");
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        await uploadFile(data);
        const image = await uploadFile(data);
        post.picture = image.data;
        setImageURL(image.data);
      }
    };
    getImage();
  }, [file]);

  const savePost = async () => {
    await createPost(post);
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <Box>
      <Box className={css.container}>
        <img src={url} alt="post" className={css.image} />

        <FormControl className={css.root}>
          <label htmlFor="fileInput">
            <Add className={css.addIcon} fontSize="large" color="action" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
          <InputBase onChange={(e) => handleChange(e)} name="title" placeholder="Title" className={css.textfield} />
          <Button onClick={() => savePost()} variant="contained" color="primary">
            Publish
          </Button>
        </FormControl>
        <TextareaAutosize
          rowsMin={10}
          placeholder="Tell your story..."
          className={css.textarea}
          name="description"
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </Box>
  );
};
