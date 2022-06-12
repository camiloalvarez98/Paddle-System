import React from 'react'
import { Contenedor } from "../../Components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
import { Link } from 'react-router-dom';
import {TextField as Textt} from '@material-ui/core';

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
        marginLeft: '100px'
    },
    button:{
        width: '20%',
        //margin: theme.spacing(10,65,10),
        marginTop: theme.spacing(2) ,
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        
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

export default function SelectGanadores() {

    const classes = useStyles()
    return (
    
        <div>
            <Contenedor/>
            <div align = 'center'>
                <Box 
                    sx = {{
                        width:{
                          xs: 300,
                          sm: 400,
                          md: 600,
                          lg: 800,
                          xl: 1200,
                        }
                      }}
                    color = 'contrastText'
                    mx = {20} //margen a todos los lados
                    border = {1}
                                
                >
                    <BackdropFilter
                        className="bluredForm"
                        filter={"blur(5px) "}
                        html2canvasOpts={{
                            allowTaint: true
                        }}
                        onDraw={() => {
                            console.log("Rendered !");
                        }}
                    >
                        <h2>Registrar Ganadores</h2>
                        <Grid container direction="row" justify="flex-end" alignItems="center">
                            {/*Campeonato */}
                            
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required label='ID de Campeonato' />
                            </Grid>
                            {/*Categoria*/}
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required label='Categoría' />
                            </Grid>
                            {/*Primer Lugar*/}
                            <Grid item sm = {12}>
                                <h4 className={classes.text2}>Primer Lugar:</h4>
                            </Grid>
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required label=' Rut Jugador 1'/>
                            </Grid>
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required label=' Rut Jugador 2'/>
                            </Grid>
                            {/*Segundo Lugar*/}
                            <Grid item sm = {12}>
                                <h4 className={classes.text2}>Segundo Lugar:</h4>
                            </Grid>
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required  label='Rut Jugador 1'/>
                            </Grid>
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required  label='Rut Jugador 2'/>
                            </Grid>
                            {/*Tercer Lugar*/}
                            <Grid item sm = {12}>
                                <h4 className={classes.text2}>Tercer Lugar:</h4>
                            </Grid>
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required  label='Rut Jugador 1'/>
                            </Grid>
                            <Grid item sm = {6} xl = {8} marginTop= {'5px'}  >
                                <Textt required  label='Rut Jugador 2'/>
                            </Grid>

                        </Grid>
                        <br></br>
                    </BackdropFilter>
                </Box>
                <div  mx = {20}>
                <Link style={{ textDecoration: 'none' }} color='inherit' to ='/campeonatosclub'>
                        <Button 
                                className={classes.button}
                                type = "button"
                                variant = 'contained'
                                size='small'
                                endIcon = {<KeyboardReturnIcon/>}
                        >
                            Volver
                        </Button>
                </Link>
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='small'
                        endIcon = {<SaveIcon/>}
                    >
                        Guardar
                    </Button>
                </div>
                
            </div>


        </div>
    )
}
