import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, makeStyles   } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { Contenedor } from "../../Components";

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
        //margin: theme.spacing(10,65,10),
        marginTop: theme.spacing(8) ,
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  
}));



export default function CampeonatosClub() {
    const classes = useStyles()

    return (
        <div>
            <Contenedor/>
            <div align = "center">
                <Box 
                    sx = {{flexGrow: 20}}
                    color = 'contrastText'
                    backgroundColor = '#D8F3DC'
                    mx = {20} //margen a todos los lados
                    p = {1} //padding
                    borderRadius = '8px'
                    border = {2}
                            
                >
                    <h1>Campeonatos</h1>
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
                   <TableContainer>
                       <Table sx = {{ minWidth: 650 }} id = 'tables' >
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'><h2>Nombre</h2></TableCell>
                                    <TableCell align='center'><h2>ID</h2></TableCell>
                                    <TableCell align='center'><h2>Fecha Inicio</h2></TableCell>
                                    <TableCell align='center'><h2>Fecha Termino</h2></TableCell>
                                    <TableCell align='center'><h2>Acciones</h2></TableCell>
                                </TableRow>
                            </TableHead>
                       </Table>
                   </TableContainer>
                </Box>
                <div  mx = {20}>
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='medium'
                        
                    >
                        Nuevo Campeonato
                    </Button>
                </div>

            </div>
        </div>
    )
}
