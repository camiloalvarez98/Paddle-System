import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Contenedor } from "../../Components";


const useStyles = makeStyles(theme=>({
  
  text:{
      textAlign : 'center',
      marginTop: theme.spacing(30),
      color: 'white'
  }
  
  
}))

export default function hola() {
  return (
    <div>
      <Contenedor />
      
    </div>
  );
}
