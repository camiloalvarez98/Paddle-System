import React from "react";
import { BarraSuperiorJugador, CajonJugador, Box } from "../index";
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

export default function ContenedorJugador() {
  const classes = useStyles();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <div >
      <BarraSuperiorJugador/>
        <div className={classes.toolbar} />
        <Box />
    </div>
  );
}
