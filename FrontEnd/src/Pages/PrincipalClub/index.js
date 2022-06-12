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
        width: '100%',
        
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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(5),
        marginRigt: theme.spacing(5),
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  
}));


  

export default function PrincipalClub() {
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
            <TextField name = 'direccion' className={classes.inputMaterial} label='Direccion' onChange={handleChange} />
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
                        <h2>Padel del mar</h2>
                        <br></br>
                        <Grid container>
                            {/*Direccion*/}
                            <Grid item xs ={3}>
                                <h4 className={classes.text2}>Direccion:</h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined' color = 'secondary' fullWidth/>
                            </Grid>

                            {/*Representante*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Representante:</h4>               
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined' color = 'secondary' fullWidth/>
                            </Grid>

                            {/*Telefono*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Telefono:</h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined' color = 'secondary' fullWidth/>
                            </Grid>


                            {/*Comuna*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Comuna:</h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined' color = 'secondary' fullWidth/>
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
                    <Link  style={{ textDecoration: 'none' }} color='inherit' to ='/campeonatosclub'>
                        <Button 
                            className={classes.button}
                            type = "button"
                            variant = 'contained'
                            size='small'
                            onClick = {()=>abrirCerrarModalEdit()}
                        >
                            Volver
                        </Button>
                    </Link>
                </div>
            </div>
            
        </div>
        
    )
}
