import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Edit, Delete} from '@material-ui/icons';
import { ContenedorJugador } from '../../Components';
import { Link, NavLink  } from 'react-router-dom'
import BackdropFilter from "react-backdrop-filter";
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, makeStyles} from '@material-ui/core';

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


  

export default function BuscarCampeonato() {
    const classes = useStyles()

    return (
        <div className = 'App'>
            <ContenedorJugador/>
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
                                        <TableCell>Nombre</TableCell>
                                        <TableCell>Club</TableCell>
                                        <TableCell>Fecha de Inicio</TableCell>
                                        <TableCell>Fecha de Termino</TableCell>
                                        <TableCell>Categorias</TableCell>
                                        <TableCell/>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>Campeonato 1</TableCell>
                                        <TableCell>Campeonato 1</TableCell>
                                        <TableCell>Campeonato 1</TableCell>
                                        <TableCell>Campeonato 1</TableCell>
                                        <TableCell>Campeonato 1</TableCell>
                                        <TableCell>
                                            <Button className={classes.button} variant = 'contained'>
                                                Inscribirse
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </BackdropFilter>
                </Box>
            </div>
        </div>
        
    )
}
