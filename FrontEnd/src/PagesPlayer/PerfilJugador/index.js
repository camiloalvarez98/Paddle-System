import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles} from '@material-ui/core';
import {Modal, Button, TextField } from '@material-ui/core';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { ContenedorJugador } from '../../Components';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const [data, setData] = useState([]);
    const [jugadorSeleccionado, setJugadorSeleccionado] = useState({
        rut_jugador : '',
        nombre_jugador : '',
        apellido_paterno: '',
        telefono_jugador : '',
        direccion_jugador : '',
        puntaje_jugador : '',
        categoria_jugador : '',
        correo_jugador : ''
    })
    const handleChange=e=>{
        const{name , value}=e.target;
        if(name!==""){
            setJugadorSeleccionado(prevState=>({
                ...prevState,
                [name]:value
            }))
        }

    }
    const correo = localStorage.getItem('correo_jugador')
    const getJugador = async() =>{
        await axios.get('http://localhost:3001/api/Jugador/getJugador/'+correo)
        .then(response =>{
           setData(response.data) 
           console.log(response.data)
           localStorage.setItem('categoria_jugador',(data[0].categoria_jugador))
        })
    }
    useEffect (() =>{
        getJugador();
    },[])
    const abrirCerrarModalEdit =() =>{
        setModalEdit(!modalEdit); 
    }
    const seleccionarJugador=(jugador)=>{
        setJugadorSeleccionado(jugador);
    }
    
    const bodyEdit = (
        <div className= {classes.modal}>
            <h3>Editar datos</h3>
            <TextField name = 'nombre_jugador' className={classes.inputMaterial} label='Nombre' onChange={handleChange} defaultValue = {jugadorSeleccionado.nombre_jugador}/>
            <br/>
            <TextField name = 'apellido_paterno' className={classes.inputMaterial} label='Apellido paterno' onChange={handleChange} defaultValue = {jugadorSeleccionado.apellido_paterno}/>
            <br/>
            <TextField name = 'telefono_jugador' className={classes.inputMaterial} label='Teléfono' onChange={handleChange} defaultValue = {jugadorSeleccionado.telefono_jugador}/>
            <br/>
            <TextField name = 'direccion_jugador' className={classes.inputMaterial} label='Direccion' onChange={handleChange} defaultValue = {jugadorSeleccionado.direccion_jugador}/>
            <br/>
            <br></br>
            <div align = 'right'>
                <Button 
                    size='small' 
                    onClick={()=>{
                        editarJugador()
                        window.location.reload(false);
                    }}
                >
                    Guardar
                </Button>
                <Button size='small' onClick={()=>abrirCerrarModalEdit()}>Cancelar</Button>
            </div>
        </div>
    )

    const editarJugador = async()=>{
        await axios.put('http://localhost:3001/api/Jugador/updateInformacion/'+jugadorSeleccionado.correo_jugador,jugadorSeleccionado)
        .then(response =>{
            var dataNueva = data; 
            dataNueva.forEach(jugador=>{ 
                if(jugadorSeleccionado.correo_jugador === jugador.correo_admin){
                    jugador.nombre_jugador = jugadorSeleccionado.nombre_jugador;
                    jugador.apellido_paterno = jugadorSeleccionado.apellido_paterno;
                    jugador.telefono_jugador = jugadorSeleccionado.telefono_jugador;
                    jugador.direccion_jugador = jugadorSeleccionado.direccion_jugador;
                }
            })
            setData(dataNueva);
            abrirCerrarModalEdit();
        })
    }

    return (
        <div>
            <ContenedorJugador/>
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
                    <h2>Perfil jugador</h2>  
                    {data.map((jugador)=>( 
                        <Grid container>
                            <Grid item xs ={3}>
                                <h4 className={classes.text2}>Nombre: </h4>  
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true}} defaultValue={jugador.nombre_jugador}/>
                            </Grid>
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Apellido paterno: </h4>               
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined' fullWidth size='small' inputProps={{readOnly: true,}} defaultValue={jugador.apellido_paterno}/>
                            </Grid>
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Teléfono:</h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}} defaultValue={jugador.telefono_jugador}/>
                            </Grid>
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Dirección: </h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined'   fullWidth size='small' inputProps={{readOnly: true,}} defaultValue={jugador.direccion_jugador}/>
                            </Grid>
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Puntaje actual: </h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}} defaultValue={jugador.puntaje_jugador}/>
                            </Grid>
                            <Grid item xs = {3}>
                                <h4 className={classes.text2}>Categoría: </h4>
                            </Grid>
                            <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                <TextField name='categoria'  variant='outlined'  fullWidth size='small' inputProps={{readOnly: true,}} defaultValue={jugador.categoria_jugador}/>
                            </Grid>
                            <Grid item xs={12} justify="center">
                                <Button 
                                    style={{margin: '0 auto',marginTop: '20px', display: "flex"}}
                                    type = "button"
                                    variant = 'contained'
                                    size='small'
                                    onClick = {()=>{
                                        seleccionarJugador(jugador)
                                        abrirCerrarModalEdit()
                                        }
                                    }
                                >
                                    Editar información
                                </Button>
                                <Modal
                                    open = {modalEdit}
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
                    <Link to={'/campeonatosjugador'} style={{ textDecoration: 'none' }}>
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
                </div>
            </div>
        </div>
        
    )
}
