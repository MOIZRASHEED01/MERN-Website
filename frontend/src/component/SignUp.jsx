import React from "react";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    padding: "10px",
    "& > *": {
      margin: 50,
    },
  },
});

const SignUp = () => {
  const css = useStyle();
  return (
    <>
      <FormGroup className={css.container}>
        <Typography variant="h4">SignUP Page</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input></Input>
        </FormControl>
        <FormControl>
          <InputLabel>UserEmail</InputLabel>
          <Input></Input>
        </FormControl>
        <FormControl>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
        </FormControl>
        <FormControl>
          <Typography>Already have an account?</Typography>
          <NavLink to="/login" exact="true">
            SIGN IN
          </NavLink>
        </FormControl>
      </FormGroup>
    </>
  );
};

export default SignUp;
