import React from "react";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

export const Login = () => {
  const css = useStyle();
  const navigate = useNavigate();

  const navback = async () => {
    navigate("/");
  };
  return (
    <FormGroup className={css.container}>
      <Typography variant="h4">Login Page</Typography>
      <FormControl>
        <InputLabel>User Email</InputLabel>
        <Input></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <TextField floatingLabelText="Password" type="password"></TextField>
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={() => navback()}>
          Sign In
        </Button>
      </FormControl>
      <FormControl>
        <Typography>Do you have an account?</Typography>
        <NavLink to="/signup" exact="true">
          Sign Up
        </NavLink>
      </FormControl>
    </FormGroup>
  );
};
