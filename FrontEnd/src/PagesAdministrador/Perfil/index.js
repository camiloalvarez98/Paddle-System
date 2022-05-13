import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import {Modal, Button, TextField } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { Contenedor } from '../../Components';
import { Link, NavLink,  } from 'react-router-dom'

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
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(2),
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  
}));


  

export default function Perfil() {
    const classes = useStyles()
    const [modalEdit, setModalEdit] = useState(false);
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



    const abrirCerrarModalEdit =() =>{
        setModalEdit(!modalEdit); //abre o cierra el modal
    }

    const bodyEdit = (
        <div className= {classes.modal}>
            <h3>Editar datos</h3>
            <TextField name = 'nombre' className={classes.inputMaterial} label='Nombre' onChange={handleChange}/>
            <br/>
            <TextField name = 'rut' className={classes.inputMaterial} label='Rut' onChange={handleChange}/>
            <br/>
            <TextField name = 'telefono' className={classes.inputMaterial} label='Teléfono' onChange={handleChange}/>
            <br/>
            <TextField name = 'direccion' className={classes.inputMaterial} label='Direccion' onChange={handleChange}/>
            <br/>
            <TextField name = 'direccion' className={classes.inputMaterial} label='Contraseña' onChange={handleChange}/>
            <br></br>
            <div align = 'right'>
                <Button>Guardar</Button>
                <Button onClick={()=>abrirCerrarModalEdit()}>Cancelar</Button>
            </div>
        </div>
    )

    return (
        <div>
            <Contenedor/>
            <div align = 'center'>
                <Box 
                    sx = {{flexGrow: 20}}
                    color = 'contrastText'
                    backgroundColor = '#D8F3DC'
                    mx = {20} //margen a todos los lados
                    p = {0} //padding
                    borderRadius = '8px'
                    border = {2}
                    
                    
                >
                    <h1 >Perfil Administrador</h1>
                </Box>
                <br></br>
                <Box
                    sx = {{flexGrow: 20}}
                    color = 'contrastText'
                    backgroundColor = '#D8F3DC'
                    mx = {20} //margen a todos los lados
                    //p = {30} //padding
                    borderRadius = '8px'
                    border = {2}
                    
                >
                    <br></br>
                    <Grid container>
                        {/*Nombre*/}
                        <Grid item xs ={3}>
                            <h2 className={classes.text2}>Nombre: </h2>  
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth/>
                        </Grid>

                        {/*Rut*/}
                        <Grid item xs = {3}>
                            <h2 className={classes.text2}>Rut: </h2>               
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth/>
                        </Grid>

                        {/*Telefono*/}
                        <Grid item xs = {3}>
                            <h2 className={classes.text2}>Teléfono:</h2>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth/>
                        </Grid>


                        {/*Direccion*/}
                        <Grid item xs = {3}>
                            <h2 className={classes.text2}>Dirección: </h2>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth/>
                        </Grid>
                        
                        {/*Contraseña*/}
                        <Grid item xs = {3}>
                            <h2 className={classes.text2}>Contraseña: </h2>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  backgroundColor = {'#FFFFFF'} fullWidth/>
                        </Grid>
                    </Grid>
                    <br></br>

                </Box>
                <div  mx = {20}>
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='medium'

                        //onClick = {()=>abrirCerrarModalEdit()}
                        //agregar función de volver a la página anterior
                    >
                        Volver
                    </Button>
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='medium'
                        onClick = {()=>abrirCerrarModalEdit()}
                    >
                        Editar
                    </Button>
                </div>
            </div>
            <Modal
                open = {modalEdit}
                close = {abrirCerrarModalEdit}
            >
                {bodyEdit}
            </Modal>
        </div>
        
    )
}
