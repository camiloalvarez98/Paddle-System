import React, { useEffect,useState } from 'react';
import { BarraSuperiorClub } from "../../Components";
import Box from '@mui/material/Box';
import { Table, TableContainer, TableHead, TableCell, TableRow, Button, makeStyles, TableBody   } from '@material-ui/core';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import axios from 'axios';


const useStyles = makeStyles ((theme) =>({
    button:{
        width: '20%',
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
}))

export default function InscritosClub(){
    const classes = useStyles()
    const [data, setData] = useState([]);
    const id_campeonato = localStorage.getItem('currentCamp')
    const id_categoria = localStorage.getItem('currentCategoria')
    
    const getCampeonatoById = async () => {
        await axios.get('http://localhost:3001/api/Club/getInscritos/'+id_campeonato+'/'+id_categoria)
        .then(response =>{
            setData(response.data)
        })

    }
    useEffect (() =>{
        getCampeonatoById();
    },[])

    return(
        <div>
            <BarraSuperiorClub/>
            <br></br>
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
                        <h2>Inscritos</h2>
                        <TableContainer>
                            <Table sx = {{ minWidth: 650 }} id = 'tables'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>ID Pareja</TableCell>
                                        <TableCell align='center'>Partner 1</TableCell>
                                        <TableCell align='center'>Partner 2</TableCell>
                                        <TableCell align='center'>Categoria</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {data.map(campeonato => (
                                        <TableRow>
                                            <TableCell align = 'center'>{campeonato.id_dupla}</TableCell>
                                            <TableCell align = 'center'>{campeonato.rut_jugador1}</TableCell>
                                            <TableCell align = 'center'>{campeonato.rut_jugador2}</TableCell>
                                            <TableCell align = 'center'>{campeonato.id_categoria}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </BackdropFilter>

                </Box>
                <div mx = {20}>
                    <Link style={{ textDecoration: 'none' }}  color='inherit' to ='/campeonatosclub'>
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
