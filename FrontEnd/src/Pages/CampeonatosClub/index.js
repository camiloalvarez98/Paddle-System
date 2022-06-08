import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField, makeStyles   } from '@material-ui/core';
import { Contenedor } from "../../Components";
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
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
                    mx = {20} //margen a todos los lados
                    p = {1} //padding
                    //borderRadius = '8px'
                    border = {2}
                            
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
                        <h1>Campeonatos</h1>
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
                    </BackdropFilter>
                </Box>
                <div  mx = {20}>
                    
                    <Link underline ='none' color='inherit' to ='/nuevocampeonato'>
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
