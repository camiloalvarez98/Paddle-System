import React from "react";
import { BarraSuperiorClub, Cajon, Box } from "../../Components";
import { makeStyles, Hidden } from "@material-ui/core";

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

export default function Contenedor() {
  const classes = useStyles();

  return (
    <div>
      <BarraSuperiorClub />
        <div className={classes.toolbar} />
        <Box />
      </div>
    
  );
}
