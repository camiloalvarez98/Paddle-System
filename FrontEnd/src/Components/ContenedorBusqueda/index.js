import React from "react";
import { BarraBusqueda, Cajon, Box } from "..";
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

export default function ContenedorBusqueda() {
  const classes = useStyles();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <div className={classes.root}>
      <BarraBusqueda accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <Hidden xlUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Box />
      </div>
    </div>
  );
}
