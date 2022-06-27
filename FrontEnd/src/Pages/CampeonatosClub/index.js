import React from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Button, makeStyles   } from '@material-ui/core';
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
        marginTop: theme.spacing(2) ,
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
    button2:{
        width: '60%',
        //margin: theme.spacing(10,65,10),
        marginTop: theme.spacing(2) ,
            
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
                    //p = {1} //padding
                    //borderRadius = '8px'
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
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Nombre1</TableCell>
                                        <TableCell>ID1</TableCell>
                                        <TableCell>Fecha de inicio</TableCell>
                                        <TableCell>Fecha de termino</TableCell>
                                        <TableCell>
                                            <Link style={{ textDecoration: 'none' }}  color='inherit' to ='/inscritoscamp'>
                                                <Button className={classes.button2} variant = 'contained'>
                                                    Ver Inscritos
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
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
