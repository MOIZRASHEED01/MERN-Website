import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  container: {
    border: "1px solid #d3cede",
    borderRadius: 10,
    margin: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: 350,
    "& > *": {
      padding: "0 5px 5px 5px",
    },
  },
  image: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
    height: 150,
  },
  textColor: {
    color: "#878787",
    fontSize: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  detail: {
    fontSize: 14,
    wordBreak: "break-word",
  },
});

const Looppost = ({ post }) => {
  const css = useStyle();
  const url =
    post.picture ||
    "https://i.picsum.photos/id/1008/5616/3744.jpg?hmac=906z84ml4jhqPMsm4ObF9aZhCRC-t2S_Sy0RLvYWZwY" ||
    "https://picsum.photos/200/300";

  return (
    <Box className={css.container}>
      <img src={url} alt="post" className={css.image} />
      <Typography className={css.textColor}>{post.categories}</Typography>
      <Typography className={css.heading}>{post.title}</Typography>
      <Typography className={css.textColor}>Aurthor:{post.username}</Typography>
      <Typography className={css.detail}>{post.description}</Typography>
    </Box>
  );
};

export default Looppost;
