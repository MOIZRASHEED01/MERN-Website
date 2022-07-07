import { Box, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${"https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg"})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "left 0px bottom 0px",
    backgroundSize: "cover",
  },
  wrapper: {
    padding: 20,
    "& > *": {
      marginTop: 50,
    },
  },
  text: {
    color: "#878787",
  },
});

const About = () => {
  const css = useStyles();
  return (
    <Box>
      <Box className={css.banner}></Box>
      <Box className={css.wrapper}>
        <Typography variant="h3">Danish Ahmed</Typography>
        <Typography variant="h5" className={css.text}>
          I'm a Software Engineer from Comsats lahore student of Ustad FAisal shb.
          <br />
          If you are interested, you can view some of my favorite projects here
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link href="https://github.com/" color="inherit" target="_blank">
              <GitHub />
            </Link>
          </Box>
        </Typography>
        <Typography variant="h5" className={css.text}>
          Need something built or simply want to have chat? Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link href="https://www.instagram.com/" color="inherit" target="_blank">
              <Instagram />
            </Link>
          </Box>
          or send me an Email
          <Email />.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
