import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Edit, Delete} from '@material-ui/icons';
import { ContenedorJugador } from '../../Components';
import { Link } from 'react-router-dom'
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
import { Button, TextField, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    modal:{
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top: '50%',
        left:'50%',
        transform: 'translate(-50%, -50%)'
    },
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
  
}));


  
export default function InsCampeonato() {
    const classes = useStyles()

    return (
        <div>
            <ContenedorJugador/>
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
                    mx = {25} 
                    border = {1}
                    borderColor = '#adc178'
                >
                    <BackdropFilter
                        className="bluredForm"
                        filter={"blur(5px)"}
                        html2canvasOpts={{
                            allowTaint: true
                        }}
                        onDraw={() => {
                            console.log("Rendered !");
                        }}                       
                    >
                        <h2>Inscripciones</h2>
                        <Grid container>
                            {/*Nombre Campeonato*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Campeonato: </h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true,}}/>
                            </Grid>
                            {/*Club*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Club: </h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}}/>
                            </Grid>     
                            {/*Fecha de inicio*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Fecha de incio: </h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}}/>
                            </Grid>    
                            {/*Fecha de termino*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Fecha de termino: </h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}}/>
                            </Grid>
                            {/*Jugadores*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Pareja:</h4>
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'5px'}  >
                                <TextField variant='outlined' required  label='Rut Jugador 1' fullWidth/>
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'5px'}  >
                                <TextField variant='outlined' required  label='Rut Jugador 2' fullWidth/>
                            </Grid>
                        </Grid>
                        <br></br>
                    </BackdropFilter>
                </Box>
                <div mx = {10}>
                    <Link style={{ textDecoration: 'none' }} color='inherit' to = '/perfiljugador'>
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
