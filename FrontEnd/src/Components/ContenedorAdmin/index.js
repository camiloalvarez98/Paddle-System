import React from "react";
import { Jeje, Box } from "../index";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ContenedorAdmin() {
  const classes = useStyles();
  return (
    <div >
      <Jeje/>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Box />
      </div>
    </div>
  );
}
