import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  image: {
    width: "100%",
    background: `url(${"https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs"}) center/55% repeat-x #000`,
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 80,
      color: "#FFFFFF",
      lineHeight: 1,
    },
    "& :last-child": {
      fontSize: 30,
      background: "#FFFFFF",
    },
  },
});

function Banner() {
  const classes = useStyle();
  const url = "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ";
  return (
    <>
      <Box className={classes.image}>
        <Typography>BLOG</Typography>
        <Typography>MERN Practice</Typography>
      </Box>
    </>
  );
}

export default Banner;
