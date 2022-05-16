import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import {Modal, Button, TextField } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { Contenedor, ContenedorBusqueda } from '../../Components';
import { Link, NavLink,  } from 'react-router-dom'
import BackdropFilter from "react-backdrop-filter";

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
        width: '80%',
        //margin: theme.spacing(10,65,10),
        marginTop: theme.spacing(2) ,
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  
}));


  

export default function Principal() {
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
            <TextField name = 'direccion' className={classes.inputMaterial} label='Direccion' onChange={handleChange}/>
            <br/>
            <TextField name = 'representante' className={classes.inputMaterial} label='Representante' onChange={handleChange}/>
            <br/>
            <TextField name = 'telefono' className={classes.inputMaterial} label='Telefono' onChange={handleChange}/>
            <br/>
            <TextField name = 'comuna' className={classes.inputMaterial} label='Comuna' onChange={handleChange}/>
            <br></br>
            <div align = 'right'>
                <Button>Guardar</Button>
                <Button onClick={()=>abrirCerrarModalEdit()}>Cancelar</Button>
            </div>
        </div>
    )

    return (
        <div>
            <ContenedorBusqueda/>
            <div align = 'center'>   
                <Box
                    sx = {{flexGrow: 20}}
                    color = 'contrastText'
                    //backgroundColor = '#D8F3DC'
                    mx = {25} //margen a todos los lados
                    //p = {10} //padding
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
                    <h1>Clubes registrados</h1>  
                    <Grid container>
                        {/*primer club*/}
                        <Grid item xs ={4}>
                            <h2 className={classes.text2}>Club puertas del mar</h2>  
                        </Grid>
                        {/*boton editar*/}
                        <Grid item xs = {3} marginTop= {'10px'} marginRight = {'50px'} >
                            <Button 
                                className={classes.button}
                                type = "button"
                                variant = 'contained'
                                size='medium'
                                onClick = {()=>abrirCerrarModalEdit()}
                            >
                            Editar
                            </Button>
                        </Grid>
                        {/*boton eliminar*/}
                        <Grid item xs = {3} marginTop= {'10px'} marginRight = {'50px'} >
                            <Button 
                                className={classes.button}
                                type = "button"
                                variant = 'contained'
                                size='medium'
                                //onClick = {()=>abrirCerrarModalEdit()}
                                //agregar funcion de eliminar desde back
                            >
                            Eliminar
                            </Button>
                        </Grid>
                    </Grid>
                    </BackdropFilter>
                </Box>
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
