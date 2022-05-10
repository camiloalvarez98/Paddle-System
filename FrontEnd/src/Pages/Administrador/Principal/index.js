import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Contenedor } from "../../../Components";



const useStyles = makeStyles(theme=>({
  
  text:{
      textAlign : 'center',
      marginTop: theme.spacing(30),
      color: 'white'
  }
  
  
}))

export default function Home() {
  const classes = useStyles()
  return (
    <div>
      <Contenedor />
      <h1 className = { classes.text }>Bienvenidos</h1>
    </div>
  );
}
