import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { ContenedorAdmin } from '../../Components';
import { Link, NavLink,  } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {Principal} from '../Principal'
import GroupsIcon from '@mui/icons-material/Groups';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
import BackdropFilter from "react-backdrop-filter";




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
        margin: theme.spacing(4),
        //si quiero agregar borde es con solid
        border: '2px',
        borderColor: '#4f772d'
    },
}));



export default function AgregarClub() {
    const history = useHistory();
    const classes = useStyles()
    const redireccionar= () => {
        history.push(' /Principal');    
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
                <br></br>
                <Box
                    sx = {{flexGrow: 20}}
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
                    <h1>Agregar club</h1>
                    <Grid container>
                        {/*Direccion*/}
                        <Grid item xs ={3}>
                            <h3 className={classes.text2}>Direccion:</h3>  
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth size='small'/>
                        </Grid>

                        {/*Representante*/}
                        <Grid item xs = {3}>
                            <h3 className={classes.text2}>Representante:</h3>               
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth size='small'/>
                        </Grid>

                        {/*Telefono*/}
                        <Grid item xs = {3}>
                            <h3 className={classes.text2}>Telefono:</h3>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth size='small'/>
                        </Grid>


                        {/*Comuna*/}
                        <Grid item xs = {3}>
                            <h3 className={classes.text2}>Comuna:</h3>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth size='small'/>
                        </Grid>
                        
                    </Grid>
                    <br></br>
                    </BackdropFilter>    
                </Box>
                <div  mx = {20}>
                    {/*boton guardar*/}
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='small'
                        endIcon = {<SaveIcon/>}
                        //onClick = {()=>abrirCerrarModalEdit()}
                    >
                        Guardar
                    </Button>
                </div>
            </div>
        </div>
        
    )
}
