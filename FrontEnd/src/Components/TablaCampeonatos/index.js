import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import BackdropFilter from "react-backdrop-filter";
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, makeStyles} from '@material-ui/core';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Tooltip from '@mui/material/Tooltip';

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
        marginTop: theme.spacing(2) ,
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  
}));


  

export default function TablaCampeonatos() {
    const classes = useStyles()
    const [data,setData] = useState([]);
    const [modalEliminar, setModalEliminar] = useState(false);
    const key = localStorage.getItem('correo_jugador')
    const [campeonatoSeleccionado, setCampeonatoSeleccionado] = useState({
        nombre_campeonato:'',
        id_dupla:''
    })

    const getCampeonatos = async() =>{
        await axios.get('http://localhost:3001/api/Jugador/getCampeonatos/'+key)
        .then(response =>{
           setData(response.data) 
           console.log(response.data)
        })
    }

    useEffect (() =>{
        getCampeonatos();
    },[])

    const deleteInscripcion = async() =>{
        await axios.delete('http://localhost:3001/api/Jugador/deleteInscripcion/'+ campeonatoSeleccionado.id_dupla)
        .then(response=>{
            setData(data.filter(club=>club.id_club !== campeonatoSeleccionado.id_dupla));
            abrirCerrarModalELiminar();
        })
    }

    const abrirCerrarModalELiminar=() =>{
        setModalEliminar(!modalEliminar);
    }

    const seleccionarCampeonato=(campeonato)=>{
        setCampeonatoSeleccionado(campeonato);
        abrirCerrarModalELiminar()
        console.log(campeonatoSeleccionado.id_dupla)
        localStorage.setItem('nombre',campeonatoSeleccionado.nombre_campeonato)
    }

    const bodyEliminar = (
        <div className={classes.modal}>
          <p>¿Estás seguro que deseas eliminar tu inscripción al campeonato <b>{campeonatoSeleccionado.nombre_campeonato}</b>? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>deleteInscripcion()}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalELiminar()}>No</Button>
          </div>
        </div>
    )

    return (
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
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Nombre</TableCell>
                                        <TableCell align='center'>ID dupla</TableCell>
                                        <TableCell align='center'>Fecha inicio</TableCell>
                                        <TableCell align='center'>Fecha termino</TableCell>
                                        <TableCell align='center'>Partner</TableCell>
                                        <TableCell align='center'></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map(campeonato => (
                                        <TableRow>
                                            <TableCell align='center'>{campeonato.nombre_campeonato}</TableCell>
                                            <TableCell align='center'>{campeonato.id_dupla}</TableCell>
                                            <TableCell align='center'>{campeonato.fecha_inicio}</TableCell>
                                            <TableCell align='center'>{campeonato.fecha_termino}</TableCell>
                                            <TableCell align='center'>{campeonato.nombre_club}</TableCell>
                                            <TableCell align='center'>
                                                <Tooltip title='Eliminar inscripción'>
                                                    <Button>
                                                        <HighlightOffIcon className = {classes.icons} onClick ={()=>seleccionarCampeonato(campeonato, 'Eliminar') }/>
                                                        <Modal
                                                            open = {modalEliminar}
                                                            onClose = {abrirCerrarModalELiminar}
                                                        >
                                                            {bodyEliminar}
                                                        </Modal>
                                                    </Button>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </BackdropFilter>
                </Box>
            </div>
        
    )
}
