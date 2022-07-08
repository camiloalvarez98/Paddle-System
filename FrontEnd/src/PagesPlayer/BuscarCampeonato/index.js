import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ContenedorJugador } from '../../Components';
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
    const [data,setData] = useState([]);
    const [modalInscripcion, setModalInscripcion] = useState(false);
    const key = localStorage.getItem('categoria_jugador')
    const key2 = localStorage.getItem('correo_jugador')
    const [campeonatoSeleccionado, setCampeonatoSeleccionado] = useState({
        nombre_campeonato: '',
        nombre_club : '',
        fecha_inicio : '',
        fecha_termino : '',
        nombre_categoria : '',
        id_campeonato: '',
        id_categoria : ''
    })
    const [duplaSeleccionada,setDuplaSeleccionada] = useState({
        rut_jugador2 : '',
        id_campeonato : '',
        id_categoria : ''    
    })

    const handleChange=e=>{
        const{name, value}=e.target;
        if(name!==""){
            setDuplaSeleccionada(prevState=>({
                ...prevState,
                [name]:value
            }))
        }

    }
    const abrirCerrarModalInscripcion =() =>{
        setModalInscripcion(!modalInscripcion); 
    }
    const correo = localStorage.getItem('correo_jugador')
    const getJugador = async() =>{
        await axios.get('http://localhost:3001/api/Jugador/getJugador/'+correo)
        .then(response =>{
            localStorage.setItem('rut_jugador',(response.data[0].rut_jugador))
        })
    }
    useEffect (() =>{
        getJugador();
    },[])

    const getCampeonatos = async() =>{
        console.log(key)
        console.log(key2)
        await axios.get('http://localhost:3001/api/Jugador/getCampeonatosCategoria/'+key+'/'+key2)
        .then(response =>{
           setData(response.data) 
           console.log(response.data)
        })
    }

    useEffect (() =>{
        getCampeonatos();
    },[])

    const inscribirCampeonato = async()=>{
        const rut_jugador1 = localStorage.getItem('rut_jugador')
        await axios.post('http://localhost:3001/api/Jugador/inscribirCampeonato/'+rut_jugador1,duplaSeleccionada)
        .then(response =>{
            setData(data.concat(response.data))
        })
    }

    const seleccionarCampeonato=(campeonato)=>{
        setCampeonatoSeleccionado(campeonato);
    }

    const seleccionarDupla=(campeonato)=>{
        setDuplaSeleccionada(campeonato)
    }


    const inscribirse = (
        <div className= {classes.modal}>
            <h3>Inscripción a campeonato</h3>
            <TextField InputProps={{readOnly: true}} name = 'nombre_campeonato' className={classes.inputMaterial} label='Campeonato' defaultValue={campeonatoSeleccionado.nombre_campeonato}/>
            <br/>
            <TextField InputProps={{readOnly: true}} name = 'id_campeonato' className={classes.inputMaterial} label='ID Campeonato' defaultValue={campeonatoSeleccionado.id_campeonato}/>
            <br/>
            <TextField InputProps={{readOnly: true}} name = 'id_categoria' className={classes.inputMaterial} label='ID Categoria'defaultValue={campeonatoSeleccionado.id_categoria}/>
            <br/>
            <TextField InputProps={{readOnly: true}} name = 'nombre_categoria' className={classes.inputMaterial} label='Categoria' defaultValue={campeonatoSeleccionado.nombre_categoria}/>
            <br/>
            <TextField InputProps={{readOnly: true}} name = 'nombre_club' className={classes.inputMaterial} label='Club' defaultValue={campeonatoSeleccionado.nombre_club}/>
            <br/>
            <TextField InputProps={{readOnly: true}} name = 'fecha_inicio' className={classes.inputMaterial} label='Fecha de inicio' defaultValue={campeonatoSeleccionado.fecha_inicio}/>
            <br/>
            <TextField InputProps={{readOnly: true}} name = 'fecha_termino' className={classes.inputMaterial} label='Fecha de termino' defaultValue={campeonatoSeleccionado.fecha_termino}/>
            <br/>
            <TextField InputProps={{readOnly: true}} name = 'rut_jugador1' className={classes.inputMaterial} label='Rut de jugador' defaultValue={localStorage.getItem('rut_jugador')}/>
            <br></br>
            <TextField name = 'rut_jugador2' className={classes.inputMaterial} type='text' label='Rut de dupla' onChange={handleChange} />
            <div align = 'right'>
                <Button 
                    size='small' 
                    onClick={()=>{
                        inscribirCampeonato() 
                        abrirCerrarModalInscripcion()
                        window.location.reload(false);
                    }}
                >Inscribirse</Button>
                <Button size='small' onClick={()=>abrirCerrarModalInscripcion()}>Cancelar</Button>
            </div>
        </div>
    )

    return (
        <div className = 'App'>
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
                                        <TableCell align='center'>Club</TableCell>
                                        <TableCell align='center'>Fecha de inicio</TableCell>
                                        <TableCell align='center'>Fecha de termino</TableCell>
                                        <TableCell align='center'>Categoría</TableCell>
                                        <TableCell/>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {data.map(campeonato =>(
                                        <TableRow>
                                            <TableCell align='center'>{campeonato.nombre_campeonato}</TableCell>
                                            <TableCell align='center'>{campeonato.nombre_club}</TableCell>
                                            <TableCell align='center'>{campeonato.fecha_inicio}</TableCell>
                                            <TableCell align='center'>{campeonato.fecha_termino}</TableCell>
                                            <TableCell align='center'>{campeonato.nombre_categoria}</TableCell>
                                            <TableCell align='center'>
                                                <Button 
                                                    className={classes.button} 
                                                    variant = 'contained' 
                                                    onClick={()=>{
                                                        seleccionarCampeonato(campeonato)
                                                        abrirCerrarModalInscripcion()
                                                        seleccionarDupla(campeonato)
                                                        }
                                                    }
                                                >
                                                    Inscribirse
                                                </Button>
                                                <Modal
                                                    open = {modalInscripcion}
                                                >
                                                    {inscribirse}
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
