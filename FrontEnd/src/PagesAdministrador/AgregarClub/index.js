import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import { Button, TextField } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { ContenedorAdmin , BarraSuperior} from '../../Components';
import { Link, NavLink,  } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {Principal} from '../Principal'
import GroupsIcon from '@mui/icons-material/Groups';
import SaveIcon from '@mui/icons-material/Save';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import axios from 'axios';




const useStyles = makeStyles((theme)=>({
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
        width: '20%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(5),
        marginRigt: theme.spacing(5),
        //si quiero agregar borde es con solid
        border: '2px',
        borderColor: '#4f772d'
    },
    root: {
        display: "flex",
      },
}));



export default function AgregarClub() {
    const classes = useStyles()
    const [data, setData] = useState([]);
    const [ClubSeleccionado, setClubSeleccionado] = useState({
        id_club:'',
        nombre_club:'',
        comuna_club:'',
        representante_club:'',
        direccion_club: '',
        telefono_club:''
    })

    const handleChange=e=>{ 
        const{name, value}=e.target; 
        if(name!==""){
            setClubSeleccionado(prevState=>({
                ...prevState,
                [name]:value
            }))
        }

    }

    //peticion post
    const createClub = async()=>{
        await axios.post('http://localhost:3001/api/Administrador/createClub',ClubSeleccionado)
        .then(response =>{
            setData(data.concat(response.data))
        })
    }

    return (
        <div>
            <ContenedorAdmin/>
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
                        filter={"blur(5px) "}
                        html2canvasOpts={{
                            allowTaint: true
                        }}
                        onDraw={() => {
                            console.log("Rendered !");
                        }}
                    >
                    <br></br>
                    <h2>Agregar club</h2>
                    <Grid container>
                        {/*Nombre*/}
                        <Grid item xs = {6} marginTop= {'10px'}  >
                            <TextField 
                                 
                                name = 'nombre_club'  
                                label='Nombre de club' 
                                onChange = {handleChange} 
                                defaultValue=''

                            />
                        </Grid>
                        {/*Direccion*/}
                        <Grid item xs = {6} marginTop= {'10px'}  >
                            <TextField required name = 'direccion_club'  label='Dirección' onChange = {handleChange} defaultValue=''/>
                        </Grid>
                        {/*Representante*/}
                        <Grid item xs = {6} marginTop= {'10px'} >
                            <TextField required name ='representante_club' label='Representante' onChange = {handleChange} defaultValue=''/>
                        </Grid>
                        {/*Telefono*/}
                        <Grid item xs = {6} marginTop= {'10px'} >
                            <TextField required name='telefono_club' label='Teléfono' onChange = {handleChange} defaultValue=''/>
                        </Grid>
                        {/*Comuna*/}
                        <Grid item xs = {6} marginTop= {'10px'} >
                            <TextField required name='comuna_club' label='Comuna' onChange = {handleChange} defaultValue=''/>
                        </Grid>
                    </Grid>
                    <br></br>
                    </BackdropFilter>    
                </Box>
                <div  mx = {20}>
                    <Link  style={{ textDecoration: 'none' }} color='inherit' to ='/principalAdmin'>
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
                        onClick={()=>createClub()}
                    >
                        Guardar
                    </Button>

                    
                </div>
            </div>
        </div>
        
    )
}
