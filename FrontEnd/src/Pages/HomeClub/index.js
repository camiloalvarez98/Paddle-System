import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { BarraSuperiorClub } from "../../Components";


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
      <BarraSuperiorClub />
      <br/>
      <h1 className = { classes.text }>Bienvenidos</h1>
    </div>
  );
}


