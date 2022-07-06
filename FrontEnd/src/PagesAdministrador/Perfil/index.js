import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import {Modal, Button, TextField } from '@material-ui/core';
import BackdropFilter from "react-backdrop-filter";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { ContenedorAdmin } from '../../Components';
import axios from 'axios';


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


  

export default function Perfil() {
    const classes = useStyles()
    const [modalEditar, setModalEditar] = useState(false);
    const [data, setData] = useState([]);
    const [openContra, setOpenContra] = React.useState(false);
    const [infoAdmin, setInfoAdmin] = useState({
        nombre_administrador : '',
        rut_administador : '',
        telefono_administrador : '',
        direccion_administrador : '',
        apellido_paterno_administrador : '',
        correo_admin : ''
    })
    
    const handleChange=e=>{ //alamcenamos lo que se escribe en el textfield
        const{name, value}=e.target; //name es una propiedad que le di a cada textfield mas abajo
        if(name!==""){
            setInfoAdmin(prevState=>({
                ...prevState,
                [name]:value
            }))
        }

    }

    const correo_admin = localStorage.getItem('correo_admin')

    const getJugador = async() =>{
        await axios.get('http://localhost:3001/api/Administrador/getAdministrador/'+correo_admin)
        .then(response =>{
           setData(response.data) 
           console.log(response.data)
        })
    }

    useEffect (() =>{
        getJugador();
    },[])

    const abrirCerrarEditar =() =>{
        setModalEditar(!modalEditar); 
    }

    
    const abrirContra =() =>{
        setOpenContra(true);
    }
    const cerrarContra = () => {
        setOpenContra(false);
    }

    const seleccionarAdmin=(administrador)=>{
        setInfoAdmin(administrador);
    }

    const bodyEdit = (
        <div className= {classes.modal}>
            <h3>Editar datos</h3>
            <TextField name = 'nombre_administrador' className={classes.inputMaterial} label='Nombre' onChange={handleChange} defaultValue = {infoAdmin.nombre_administrador}/>
            <br/>
            <TextField name = 'apellido_paterno_administrador' className={classes.inputMaterial} label='Apellido' onChange={handleChange} defaultValue = {infoAdmin.apellido_paterno_administrador}/>
            <br/>
            <TextField name = 'telefono_administrador' className={classes.inputMaterial} label='Teléfono' onChange={handleChange} defaultValue = {infoAdmin.telefono_administrador}/>
            <br/>
            <TextField name = 'direccion_administrador' className={classes.inputMaterial} label='Direccion' onChange={handleChange} defaultValue = {infoAdmin.direccion_administrador}/>
            <br/>
            <br></br>
            <div align = 'right'>
                <Button onClick={()=>editarAdministrador()}>Guardar</Button>
                <Button onClick={()=>abrirCerrarEditar()}>Cancelar</Button>
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
                <Button>Guardar</Button>
                <Button onClick={()=>cerrarContra()}>Cancelar</Button>
            </div>
        </div>
    )

    
    const editarAdministrador = async()=>{
        console.log(infoAdmin)
        await axios.put('http://localhost:3001/api/Administrador/updateInformacion/'+infoAdmin.correo_admin,infoAdmin)
        .then(response =>{
            var dataNueva = data; 
            dataNueva.forEach(administrador=>{ 
                if(infoAdmin.correo_admin === administrador.correo_admin){
                    administrador.nombre_administrador = infoAdmin.nombre_administrador;
                    administrador.apellido_paterno_administrador = infoAdmin.apellido_paterno_administrador;
                    administrador.telefono_administrador = infoAdmin.telefono_administrador;
                    administrador.direccion_administrador = infoAdmin.direccion_administrador;
                }
            })
            console.log(dataNueva)
            console.log(infoAdmin)
            setData(dataNueva);
            abrirCerrarEditar();
        })
    }

    return (
        <div>
            <ContenedorAdmin/>
            <br/>
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
                    <h2>Perfil administrador</h2>   
                    {data.map((administrador)=> (
                        <Grid container>
                            {/*Nombre*/}
                            <Grid item xs ={3}>
                                <h4 className={classes.text2}>Nombre: </h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true}} defaultValue={administrador.nombre_administrador}/>
                            </Grid>

                            {/*Apellido*/}
                            <Grid item xs ={3}>
                                <h4 className={classes.text2}>Apellido: </h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true}} defaultValue={administrador.apellido_paterno_administrador}/>
                            </Grid>

                            {/*Rut*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Rut: </h4>               
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true}}  defaultValue={administrador.rut_administrador}/>
                            </Grid>

                            {/*Telefono*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Teléfono:</h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true}}  defaultValue={administrador.telefono_administrador}/>
                            </Grid>

                            {/*Direccion*/}
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Dirección: </h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true}}  defaultValue={administrador.direccion_administrador}/>
                            </Grid>
                            <Grid item xs={6} container justify="center">
                                <Button 
                                    style={{margin: '0 auto',marginTop: '20px', display: "flex"}}
                                    type = "button"
                                    variant = 'contained'
                                    size='small'
                                    onClick = {()=>abrirContra()}
                                >
                                    Cambiar contraseña
                                </Button>
                                <Modal
                                    open = {openContra}
                                    close = {cerrarContra}
                                >
                                    {cambiarContraseña}
                                </Modal>
                            </Grid>  
                            <Grid item xs={6} container justify="center">
                                <Button 
                                    style={{margin: '0 auto',marginTop: '20px', display: "flex"}}
                                    type = "button"
                                    variant = 'contained'
                                    size='small'
                                    onClick = {()=>{
                                        const funcion1 = seleccionarAdmin(administrador)
                                        const funcion2 = abrirCerrarEditar()
                                        }
                                    }
                                >
                                    Editar información
                                </Button>
                                <Modal
                                    open = {modalEditar}
                                >
                                    {bodyEdit}
                                </Modal>
                            </Grid>  
                        </Grid>
                    ))}
                    <br></br>
                    </BackdropFilter>        
                </Box>
                <div  mx = {20}>
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='small'
                        endIcon = {<KeyboardReturnIcon/>}
                    >
                        Volver
                    </Button>
                </div>
            </div>
        
        </div>
        
    )
}
