import React from "react";
import { Delete, Edit } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { getPost } from "../../service/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../service/api";
import { Link } from "@mui/material";
const theme = createTheme();
const useStyle = makeStyles({
  container: {
    margin: "50px 100px",
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    paddingBottom: "20px",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    textAlign: "center",
    margin: "70px 0 10px 0",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

export const DetailView = ({ match }) => {
  const postId = useParams();
  console.log(postId.id);
  const css = useStyle();
  const navigate = useNavigate();

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(postId.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);

  const deleteBlog = async () => {
    const del = await deletePost(post._id);
    console.log(del.data);
    if (del.data === "post deleted successfully") {
      navigate("/");
    }
  };

  return (
    <Box className={css.container}>
      <img src={post.picture || url} className={css.image} />
      <Box className={css.icons}>
        <Edit className={css.icon} color="primary" />
        <Link>
          <Delete onClick={() => deleteBlog()} className={css.icon} color="error" />
        </Link>
      </Box>
      <Typography className={css.heading} variant="h4">
        {post.title}
      </Typography>
      <Link href={`/?username=${post.username}`} className={css.link}>
        <Typography>
          Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
        </Typography>
      </Link>
      <Typography style={{ marginLeft: "91%" }}>{new Date(post.createdDate).toDateString}</Typography>
      <Typography>{post.description}</Typography>
    </Box>
  );
};
