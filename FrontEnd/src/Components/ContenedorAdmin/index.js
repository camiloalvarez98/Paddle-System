import React from "react";
import { AppBar, CajonAdmin, Box } from "../index";
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

export default function ContenedorAdmin() {
  const classes = useStyles();
  const [abrir, setAbrir] = React.useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };
  return (
    <div className={classes.root}>
      <AppBar accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <CajonAdmin variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <Hidden xlUp>
        <CajonAdmin variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Box />
      </div>
    </div>
  );
}
