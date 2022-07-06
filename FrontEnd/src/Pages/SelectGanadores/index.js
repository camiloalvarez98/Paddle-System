import React, { useState }from 'react'
import { Contenedor } from "../../Components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
import { Link } from 'react-router-dom';
import {TextField} from '@material-ui/core';
import { useForm } from '../../Shared/hooks/useForm'
import { ListItemText, List, Collapse, ListItemButton, ListItemIcon, } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import axios from 'axios';


const useStyles = makeStyles (theme=>({

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
        marginLeft: '100px'
    },
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
    grid: {
        width: '100%',
        margin: '0px'
    }

}))

export default function SelectGanadores() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([]);
    const [id_categoria, handleFormChange] = useForm({id_categoria:""})
    const [id_dupla, setIdDupla] = useState('')
    const [rut_jugador2, setRutJugador2] = useState('')
    const id_campeonato = localStorage.getItem('currentCamp')
    
    
    
    const handleClick = () => {
        setOpen(!open);
    };

    
    const handlej1 = e =>{
        const {name, value} = e.target;
        if(name !== ""){
          setIdDupla(prevState =>({
              ...prevState,
              [name]:value
          }))
        }
    }



    
    const setGanadores = async () =>{
        console.log(id_dupla)
        console.log(id_campeonato)
        console.log(id_categoria)
        
        await axios.put('http://localhost:3001/api/Club/selectGanadores/'+ id_campeonato, id_categoria, id_dupla)
        .then(()=>{
            var dataNueva = data;
            dataNueva.forEach(winner =>{
                winner.categoria = id_categoria;
                winner.id_dupla = id_dupla
            })
            console.log('Dupla ganadora registrada')
        })
        .catch((e) => {
            if(e.request.status === 500){
                console.log('error')
            }
        }); 
    }

    
    return (
    
        <div>
            <Contenedor/>
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
                        <h2>Registrar Ganadores</h2>
                        <Grid container >
                            {/*Campeonato 
                            <Grid item sm = {6} xl = {12} marginTop= {'5px'} marginRight = {'80px'} marginLeft = {'80px'} >
                                <TextField required label='ID de Campeonato' variant = 'outlined' fullWidth size = 'small'/>
                            </Grid>*/}
                            <br></br>
                            {/*Categoria*/}
                            <Grid item sm = {6} xl = {12} marginTop= {'5px'} marginRight = {'80px'} marginLeft = {'80px'} >
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <FormatListNumberedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Categoria" secondary = {id_categoria.categoria}/>
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <List
                                    sx={{ width: '100%', maxWidth: 360,  }}
                                    component="nav"
                                >
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: '1'});
                                                        handleClick();
                                                    }
                                                } 
                                               
                                            >
                                                Primera
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: '2'});
                                                        handleClick();
                            
                                                    }
                                                } 
                                            >
                                                Segunda
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: '3'});
                                                        handleClick();
                                                    }
                                                } 
                                            >
                                                Tercera
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: '4'});
                                                        handleClick();
                                                    
                                                    }
                                                } 
                                            >
                                                Cuarta
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: '5'});
                                                        handleClick();
                                                        
                                                    }
                                                } 
                                            >
                                                Quinta
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: '6'});
                                                        handleClick()
                                                        
                                                    }
                                                } 
                                            >
                                                Sexta
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: 'DA'});
                                                        handleClick()
                                                        
                                                    }
                                                } 
                                            >
                                                Damas A
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: 'DB'});
                                                        handleClick()
                                                        
                                                    }
                                                } 
                                            >
                                                Damas B
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        handleFormChange({id_categoria: 'DC'});
                                                        handleClick()
                                                    
                                                    }
                                                } 
                                            >
                                                Damas C
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </List>
                            </Grid>
                            
                            {/*Primer Lugar*/}
                            <Grid item xs = {12} sm = {3} marginTop= {'30px'}>
                                <h4 className={classes.text2}>Primer Lugar:</h4>
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'45px'} marginRight = {'10px'}    >
                                <TextField required label=' ID dupla' variant = 'outlined' fullWidth size = 'small'  name = 'id_dupla' onChange={handlej1} />
                            </Grid>
                            
                        </Grid>
                        <br></br>
                    </BackdropFilter>
                </Box>
                <div  mx = {20}>
                    <Link style={{ textDecoration: 'none' }} color='inherit' to ='/campeonatosclub'>
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
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='small'
                        endIcon = {<SaveIcon/>}
                        onClick = {() => setGanadores()}
                    >
                        Guardar
                    </Button>
                </div>
                
            </div>


        </div>
    )
}
