import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, makeStyles   } from '@material-ui/core';
import BackdropFilter from "react-backdrop-filter";
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { BarraSuperiorClub } from '../../Components';

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
    button:{
        width: '20%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
    button2:{
        width: '30%',
        marginTop: theme.spacing(2) ,
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  
}));

export default function CampeonatosClub() {
    const [data, setData] = useState([]);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [campSeleccionado, setCampSeleccionado] = useState({
        id_campeonato: '',
        id_categoria:''
    })
    const classes = useStyles()
    const correo_club = localStorage.getItem('correo_club')
    
    const getCampeonatos = async() =>{
        await axios.get('http://localhost:3001/api/Club/getCampeonatos/' + correo_club)
        .then(response =>{
            setData(response.data)
            
        })
    }
    useEffect (()=>{
        getCampeonatos();
    },[])

    const deleteCampeonato = async() =>{
        await axios.delete ('http://localhost:3001/api/Club/eliminarCampeonato/' + campSeleccionado.id_campeonato + '/' +campSeleccionado.id_categoria)
        .then(response=>{
            setData(data.filter(campeonato=>campeonato.id_campeonato !== campSeleccionado.id_club));
            abrirCerrarModalELiminar();
        })
    }

    const abrirCerrarModalELiminar=() =>{
        setModalEliminar(!modalEliminar);
    }

    
    const seleccionarCamp = (camp, caso) =>{
        setCampSeleccionado(camp);
        
        abrirCerrarModalELiminar();
    }

    const seleccionarCamp2 = (camp, caso) =>{
        setCampSeleccionado(camp)
        localStorage.setItem('currentCamp',camp.id_campeonato)
        localStorage.setItem('currentCategoria',camp.id_categoria)
    }

    const bodyEliminar = (
        <div className={classes.modal}>
          <p>Estás seguro que deseas eliminar el campeonato <b>{campSeleccionado && campSeleccionado.id_campeonato}</b> ? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>{const f1 = deleteCampeonato(); const f2 = abrirCerrarModalELiminar() ;const f3 = window.location.reload(false); f1(); f2();f3() } }>Sí</Button>
            <Button onClick={()=>abrirCerrarModalELiminar()}>No </Button>
          </div>
        </div>
    )

    return (
        <div>
            <BarraSuperiorClub/>
            <br/>
            <div align = "center">
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
                        <h2>Campeonatos</h2>
                        <TableContainer>
                            <Table sx = {{ minWidth: 650 }} id = 'tables' >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'><h4>Nombre</h4></TableCell>
                                            <TableCell align='center'><h4>ID campeonato</h4></TableCell>
                                            <TableCell align='center'><h4>ID categoria</h4></TableCell>
                                            <TableCell align='center'><h4>Nombre categoría</h4></TableCell>
                                            <TableCell align='center'><h4>Fecha Inicio</h4></TableCell>
                                            <TableCell align='center'><h4>Fecha Termino</h4></TableCell>
                                            <TableCell align='center'><h4>Acciones</h4></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.map(campeonato =>(
                                            <TableRow>
                                                <TableCell align='center'>{campeonato.nombre_campeonato}</TableCell>
                                                <TableCell  align='center'>{campeonato.id_campeonato}</TableCell>
                                                <TableCell  align='center'>{campeonato.id_categoria}</TableCell>
                                                <TableCell  align='center'>{campeonato.nombre_categoria}</TableCell>
                                                <TableCell  align='center'>{campeonato.fecha_inicio}</TableCell>
                                                <TableCell align ='center'>{campeonato.fecha_termino}</TableCell>
                                                <TableCell align='center'>
                                                    <Link style={{ textDecoration: 'none' }}  color='inherit'  to = '/inscritoscamp'>
                                                        <GroupIcon  className= {classes.icons} onClick = {()=>seleccionarCamp2(campeonato)}/>
                                                    </Link>
                                                    &nbsp;&nbsp;&nbsp; 
                                                    <Link style={{ textDecoration: 'none' }}  color='inherit'  to = '/selectganadores'>
                                                        <EmojiEventsIcon  className= {classes.icons} onClick = {()=>seleccionarCamp2(campeonato)}/>
                                                    </Link>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <DeleteIcon className= {classes.icons} onClick = {()=>seleccionarCamp(campeonato)}/>
                                                    
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                            </Table>
                        </TableContainer>
                        <Modal
                            open = {modalEliminar}
                            onClose = {abrirCerrarModalELiminar}
                        >
                            {bodyEliminar}
                        </Modal>
                    </BackdropFilter>
                </Box>
                <div  mx = {20}>
                    
                    <Link style={{ textDecoration: 'none' }}  color='inherit' to ='/nuevocampeonato'>
                        <Button 
                            className={classes.button}
                            type = "button"
                            variant = 'contained'
                            size='small'  
                        >
                            Nuevo Campeonato
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
