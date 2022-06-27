import React, {useEffect,useState} from 'react';
import axios from 'axios';
//import { makeStyles , TextField, Button, Modal} from '@material-ui/core';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, makeStyles} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
//import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material'
import Box from '@mui/material/Box';
import BackdropFilter from "react-backdrop-filter";

const useStyles = makeStyles((theme)=>({
    modal:{
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
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
  
}));

export default function TablaClubes() {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const [modalEdit, setModalEdit] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [ClubSeleccionado, setClubSeleccionado] = useState({
        id_club:'',
        nombre_club:'',
        comuna_club:'',
        representante_club:'',
        direccion_club: '',
        telefono_club:''
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

    //peticion get
    const getClubes = async() =>{
        await axios.get('http://localhost:3001/api/Administrador/getClubes')
        .then(response =>{
           setData(response.data) 
           console.log(response.data)
        })
        
    }
    
    useEffect (() =>{
        getClubes();
    },[])
    
    
    //petición put
    const editarClub = async()=>{
        await axios.put('http://localhost:3001/api/Administrador/updateClub/'+ClubSeleccionado.id_club,ClubSeleccionado)
        .then(response =>{
            var dataNueva = data; //guarda los nuevos datos de la sala
            dataNueva.forEach(club=>{ //recorre el arrego con los nuevos datos de la sala 
                if(ClubSeleccionado.id_club === club.id_club){
                    club.direccion_club = ClubSeleccionado.direccion_club;
                    club.representante_club = ClubSeleccionado.representante_club;
                    club.telefono_club = ClubSeleccionado.telefono_club;
                    club.comuna_club = ClubSeleccionado.comuna_club;
                }
            })
            setData(dataNueva);
            abrirCerrarModalEdit();
        })
    }
    

    //peticion delete
    const deleteClub = async() =>{
        await axios.delete('http://localhost:3001/api/Administrador/deleteClub/'+ ClubSeleccionado.id_club)
        .then(response=>{
            setData(data.filter(club=>club.id_club !== ClubSeleccionado.id_club)); //filtar los datos por cdsala
            abrirCerrarModalELiminar();
        })
    }

   
    const abrirCerrarModalELiminar=() =>{
        setModalEliminar(!modalEliminar);
    }

    const abrirCerrarModalEdit =() =>{
        setModalEdit(!modalEdit); //abre o cierra el modal
    }

    const seleccionarClub=(club, caso)=>{
        setClubSeleccionado(club);
        (caso === 'Editar')?abrirCerrarModalEdit():abrirCerrarModalELiminar()
    }


    const bodyEdit = (
        <div className= {classes.modal}>
            <h3>Editar datos de <b>{ClubSeleccionado.nombre_club}</b></h3>
            <TextField name = 'direccion_club' className={classes.inputMaterial} label='Direccion' onChange={handleChange} defaultValue = {ClubSeleccionado && ClubSeleccionado.direccion_club}/>
            <br/>
            <TextField name = 'representante_club' className={classes.inputMaterial} label='Representante' onChange={handleChange} defaultValue = {ClubSeleccionado && ClubSeleccionado.representante_club}/>
            <br/>
            <TextField name = 'telefono_club' className={classes.inputMaterial} label='Telefono' onChange={handleChange} defaultValue = {ClubSeleccionado && ClubSeleccionado.telefono_club}/>
            <br/>
            <TextField name = 'comuna_club' className={classes.inputMaterial} label='Comuna' onChange={handleChange} defaultValue = {ClubSeleccionado && ClubSeleccionado.comuna_club}/>
            <br></br>
            <div align = 'right'>
                <Button onClick={()=>editarClub()}>Editar Club</Button>
                <Button onClick={()=>abrirCerrarModalEdit()}>Cancelar</Button>
            </div>
        </div>
    )

    const bodyEliminar = (
        <div className={classes.modal}>
          <p>¿Estás seguro que deseas eliminar el club <b>{ClubSeleccionado.nombre_club}</b>? </p>
          <div align="right">
            <Button color="secondary" onClick={()=>deleteClub()}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalELiminar()}>No</Button>
          </div>
        </div>
    )

    return (
        <div className = 'App'>
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
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Nombre club</TableCell>
                                        <TableCell align='center'>Editar</TableCell>
                                        <TableCell align='center'>Eliminar</TableCell>
                                    </TableRow>
                                </TableHead> 

                                <TableBody>
                                    {data.map(club =>(
                                        <TableRow sx={{ '&:last-child td, &:last-child th': {border: 0}}}>
                                            <TableCell align='center'>{club.nombre_club}</TableCell>
                                            <TableCell align='center'>
                                                <Edit className = {classes.icons} onClick = {()=>seleccionarClub(club, 'Editar')}/>
                                                <Modal
                                                    open = {modalEdit}
                                                    onClose = {abrirCerrarModalEdit}
                                                >
                                                    {bodyEdit}
                                                </Modal>
                                            </TableCell>
                                            <TableCell align='center'>
                                                <Delete className = {classes.icons} onClick ={()=>seleccionarClub(club, 'Eliminar') }/>
                                                <Modal
                                                    open = {modalEliminar}
                                                    onClose = {abrirCerrarModalELiminar}
                                                >
                                                    {bodyEliminar}
                                                </Modal>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
            
                        </TableContainer>
                    </BackdropFilter>
                </Box>     
            </div>                               
        </div>
        
    )
}



