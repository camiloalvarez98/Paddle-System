import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { ContenedorAdmin , BarraSuperior} from '../../Components';
import { Link, NavLink,  } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {Principal} from '../Principal'
import GroupsIcon from '@mui/icons-material/Groups';
import SaveIcon from '@mui/icons-material/Save';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';





const useStyles = makeStyles((theme)=>({
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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(5),
        marginRigt: theme.spacing(5),
        //si quiero agregar borde es con solid
        border: '2px',
        borderColor: '#4f772d'
    },
    root: {
        display: "flex",
      },
}));



export default function AgregarClub() {
    const navigate = useNavigate();
    const classes = useStyles()
    const redireccionar= () => {
        navigate.push(' /Principal');    
    }
    const [ClubSeleccionado, setClubSeleccionado] = useState({

    })

    const handleChange=e=>{ //alamcenamos lo que se escribe en el textfield
        const{name, value}=e.target; //name es una propiedad que le di a cada textfield mas abajo
        if(name!==""){
            setClubSeleccionado(prevState=>({
                ...prevState,
                [name]:value
            }))
        }

    }

    return (
        <div>
            <ContenedorAdmin/>
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
                    //backgroundColor = '#D8F3DC'
                    //blurRadius = {1}
                    mx = {25} //margen a todos los lados
                    //p = {30} //padding
                    //borderRadius = '20px'
                    border = {1}
                    borderColor = '#adc178'
                    
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
                    <br></br>
                    <h2>Agregar club</h2>
                    <Grid container>
                        {/*Direccion*/}
                        
                        <Grid item xs = {6} marginTop= {'10px'}  >
                            <TextField required label='Dirección' />
                        </Grid>

                        {/*Representante*/}
                        
                        <Grid item xs = {6} marginTop= {'10px'} >
                            <TextField required label='Representante' />
                        </Grid>

                        {/*Telefono*/}
                       
                        <Grid item xs = {6} marginTop= {'10px'} >
                            <TextField required label='Teléfono' />
                        </Grid>


                        {/*Comuna*/}
                        
                        <Grid item xs = {6} marginTop= {'10px'} >
                            <TextField required label='Comuna' />
                        </Grid>
                        
                    </Grid>
                    <br></br>
                    </BackdropFilter>    
                </Box>
                <div  mx = {20}>
                    {/*boton guardar*/}
                    <Link  style={{ textDecoration: 'none' }} color='inherit' to ='/campeonatosclub'>
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
