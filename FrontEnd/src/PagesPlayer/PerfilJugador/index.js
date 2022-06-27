import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import {Modal, Button, TextField } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { Link, NavLink,  } from 'react-router-dom'
import BackdropFilter from "react-backdrop-filter";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { ContenedorJugador } from '../../Components';


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
    modal2:{
        position: 'absolute',
        width: 300,
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


  

export default function PerfilJugador() {
    const classes = useStyles()
    const [modalEdit, setModalEdit] = useState(false);
    const [openContra, setModalContra] = React.useState(false);
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

    
    const abrirModalContra =() =>{
        setModalContra(true); //abre o cierra el modal
    }

    const cerrarModalContra =() =>{
        setModalContra(false); //abre o cierra el modal
    }

    const bodyEdit = (
        <div className= {classes.modal}>
            <h3>Editar datos</h3>
            <TextField name = 'nombre' className={classes.inputMaterial} label='Nombre' onChange={handleChange}/>
            <br/>
            <TextField name = 'apellidoPaterno' className={classes.inputMaterial} label='Apellido paterno' onChange={handleChange}/>
            <br/>
            <TextField name = 'telefono' className={classes.inputMaterial} label='Teléfono' onChange={handleChange}/>
            <br/>
            <TextField name = 'direccion' className={classes.inputMaterial} label='Direccion' onChange={handleChange}/>
            <br/>
            <TextField name = 'correo' className={classes.inputMaterial} label='Correo electrónico' onChange={handleChange}/>
            <br/>
            <br></br>
            <div align = 'right'>
                <Button size='small'>Guardar</Button>
                <Button size='small' onClick={()=>abrirCerrarModalEdit()}>Cancelar</Button>
            </div>
        </div>
    )

    const cambiarContraseña = (
        <div className= {classes.modal2}>
            <h3>Cambiar contraseña</h3>
            <TextField name = 'contraseñaantigua' className={classes.inputMaterial} label='Contraseña antigua' onChange={handleChange}/>
            <br/>
            <TextField name = 'contraseñanueva1' className={classes.inputMaterial} label='Nueva contraseña' onChange={handleChange}/>
            <br/>
            <TextField name = 'contraseñanueva2' className={classes.inputMaterial} label='Repetir contraseña' onChange={handleChange}/>
            <br/>
            <br></br>
            <div align = 'right'>
                <Button size='small'>Guardar</Button>
                <Button size='small' onClick={cerrarModalContra}>Cancelar</Button>
            </div>
        </div>
    )

    return (
        <div>
            <ContenedorJugador/>
            <br></br>
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
                    //mx = {25} //margen a todos los lados
                    //p = {30} //padding
                    //borderRadius = '8px'
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
                    <h2>Perfil jugador</h2>    
                    <Grid container>
                        {/*Nombre*/}
                        <Grid item xs ={3}>
                            <h4 className={classes.text2}>Nombre: </h4>  
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                            <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true,}}/>
                        </Grid>

                        {/*Rut*/}
                        <Grid item xs = {3}>
                            <h4 className={classes.text2}>Apellido paterno: </h4>               
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true,}}/>
                        </Grid>

                        {/*Telefono*/}
                        <Grid item xs = {3}>
                            <h4 className={classes.text2}>Teléfono:</h4>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}}/>
                        </Grid>

                        {/*Direccion*/}
                        <Grid item xs = {3}>
                            <h4 className={classes.text2}>Dirección: </h4>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'   fullWidth size='small' inputProps={{readOnly: true,}}/>
                        </Grid>

                        {/*Puntaje*/}
                        <Grid item xs = {3}>
                            <h4 className={classes.text2}>Puntaje actual: </h4>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}}/>
                        </Grid>

                        {/*Categoria*/}
                        <Grid item xs = {3}>
                            <h4 className={classes.text2}>Categoría: </h4>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}}/>
                        </Grid>
                        
                        {/*Correo*/}
                        <Grid item xs = {3}>
                            <h4 className={classes.text2}>Correo electrónico: </h4>
                        </Grid>
                        <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                            <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}}/>
                        </Grid>

                        
                    </Grid>
                    <br></br>
                    </BackdropFilter>        
                </Box>
                <div  mx = {20}>

                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='small'
                        endIcon = {<ModeEditIcon/>}
                        onClick = {()=>abrirCerrarModalEdit()}
                    >
                        Editar
                    </Button>
                    <Modal
                        open = {modalEdit}
                        close = {abrirCerrarModalEdit}
                    >
                        {bodyEdit}
                    </Modal>
                </div>
            </div>
        </div>
        
    )
}
