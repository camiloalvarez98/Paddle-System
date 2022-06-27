import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, makeStyles   } from '@material-ui/core';
import { Contenedor } from "../../Components";
import BackdropFilter from "react-backdrop-filter";
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
    icons: {
        cursor: 'pointer'
    },
    inputMaterial:{
        width: '100%'
    },
    button:{
        width: '20%',
        marginTop: theme.spacing(4) ,
        marginBottom: theme.spacing(4),
        
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
                                            <TableCell align='center'><h4>ID</h4></TableCell>
                                            <TableCell align='center'><h4>Fecha Inicio</h4></TableCell>
                                            <TableCell align='center'><h4>Fecha Termino</h4></TableCell>
                                            <TableCell align='center'><h4>Acciones</h4></TableCell>
                                        </TableRow>
                                    </TableHead>
                            </Table>
                        </TableContainer>
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
