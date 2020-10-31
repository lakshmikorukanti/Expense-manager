import React, { useEffect } from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
export default function Account() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const firstLetter = user[0].name.charAt(0);
  console.log(firstLetter);
  const classes = useStyles();
  return (
    <Grid container style={{ paddingLeft: "30%", marginTop: "10%" }}>
      <Box
        boxShadow={5}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{
          width: "30rem",
          padding: "20px",
          height: "300px",
          borderRadius: "15px",
        }}
      >
        <Avatar
          className={classes.orange}
          style={{
            height: "100px",
            width: "100px",
            fontSize: "40px",
            marginLeft: "38%",
          }}
        >
          {firstLetter}
        </Avatar>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ marginTop: "10px" }}>{user[0].name}</h1>
          <h4 style={{ marginTop: "20px" }}>{user[0].email}</h4>
        </div>
      </Box>
    </Grid>
  );
}
