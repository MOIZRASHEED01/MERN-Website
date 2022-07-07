import Looppost from "./Looppost";
import { Grid } from "@mui/material";
import { Link } from "@mui/material";
import { useState, useEffect } from "react";
import { getAllPost } from "../../../service/api";
import { useLocation } from "react-router-dom";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      let response = await getAllPost(search);
      console.log(response, "useeffect");
      //console.log("Use Effect");
      setPosts(response);
    };
    fetchData();
  }, [search]);

  //const postst = [1, 2, 3, 4, 5];
  return posts.map((p) => (
    <Grid item lg={3} sm={4} xs={12}>
      <Link href={`/details/${p._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Looppost post={p} />
      </Link>
    </Grid>
  ));
};

export default Posts;
