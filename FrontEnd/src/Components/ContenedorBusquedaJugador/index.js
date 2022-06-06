import React from "react";
import { BarraBusquedaCampeonato, Box } from "..";
import { makeStyles, Hidden } from "@material-ui/core";
import CajonJugador from "../CajonJugador";

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

export default function ContenedorBusquedaJugador() {
  const classes = useStyles();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <div className={classes.root}>
      <BarraBusquedaCampeonato accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <CajonJugador variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <Hidden xlUp>
        <CajonJugador variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Box />
      </div>
    </div>
  );
}
