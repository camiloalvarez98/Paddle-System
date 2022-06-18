import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from 'react-router-dom';

const useStyles = makeStyles (theme=>({

    icons: {
        cursor: 'pointer'
    },
    inputMaterial:{
        width: '100%'
    },
    text:{
        fontFamily: 'oswald',
    },
    text2:{
        textAlign : 'left',
        marginLeft: '20px'
    },
    button:{
        width: '30%',
        //margin: theme.spacing(10,65,10),
        marginTop: theme.spacing(6) ,
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
    grid: {
        width: '100%',
        margin: '0px'
    }

}))

export default function Principal() {
    const classes = useStyles()
    return (
        <div align = 'center' marginBottom = '10px'>
            <Link to = '/loginClub'>
                <Button 
                    className= {classes.button}
                    type = "button"
                    variant = 'contained'
                    size='large'
                >
                    Club
                </Button>
            </Link>
            <Link to = '/loginJugador'>
                <Button
                    className= {classes.button}
                    type = "button"
                    variant = 'contained'
                    size='large'
                >
                    Jugador
                </Button>
            </Link>
        </div>
  );
}
