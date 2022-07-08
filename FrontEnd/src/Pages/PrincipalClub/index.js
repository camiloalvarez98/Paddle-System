import React, {useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { makeStyles, } from '@material-ui/core';
import {Modal, Button, TextField } from '@material-ui/core';
import { BarraSuperiorClub } from '../../Components';
import BackdropFilter from "react-backdrop-filter";


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
        width: '100%',
        
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
        
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
            margin: theme.spacing(0),
            width: '100%',
            height: '100%'
        }
    },
  
}));
  
export default function PrincipalClub() {
    const classes = useStyles()
    const [modalEdit, setModalEdit] = useState(false);
    const [data, setData] = useState([]);
    const [ClubSeleccionado, setClubSeleccionado] = useState({
        id_club: '',
        direccion:'',
        representante:'',
        telefono:'',
        comuna:''
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

    const correo_club = localStorage.getItem('correo_club')

    const getClub = async() =>{
        await axios.get('http://localhost:3001/api/Club/getClub/'+ correo_club)
        .then(response =>{
           setData(response.data) 
           console.log(response.data)
        })
    }

    useEffect (() =>{
        getClub();
    },[])
          
   
    const editarClub = async () =>{
        await axios.put('http://localhost:3001/api/Club/updateClub/'+ correo_club, ClubSeleccionado)
        .then(response => {
            var dataNueva = data;
            dataNueva.forEach(club =>{
                club.direccion = ClubSeleccionado.direccion;
                club.representante = ClubSeleccionado.representante;
                club.telefono = ClubSeleccionado.telefono;
                club.comuna = ClubSeleccionado.comuna
            })
        })
    }

    const abrirCerrarModalEdit =() =>{
        setModalEdit(!modalEdit); 
    }
    
    const bodyEdit = (
        <div className= {classes.modal}>
            <h3>Editar datos</h3>
            <TextField name = 'direccion' className={classes.inputMaterial} label='Direccion' onChange={handleChange} defaultValue={ClubSeleccionado.direccion} value = {ClubSeleccionado && ClubSeleccionado.direccion} />
            <br/>
            <TextField name = 'representante' className={classes.inputMaterial} label='Representante' onChange={handleChange} defaultValue = {ClubSeleccionado.representante} value = {ClubSeleccionado && ClubSeleccionado.representante}/>
            <br/>
            <TextField name = 'telefono' className={classes.inputMaterial} label='Telefono' onChange={handleChange} defaultValue = {ClubSeleccionado.telefono} value = {ClubSeleccionado && ClubSeleccionado.telefono}/>
            <br/>   
            <TextField name = 'comuna' className={classes.inputMaterial} label='Comuna' onChange={handleChange} defaultValue = {ClubSeleccionado.comuna} value = {ClubSeleccionado && ClubSeleccionado.comuna}/>
            <br></br>
            <div align = 'right'>
                <Button color = 'secondary' onClick={() => {const f1 = editarClub(); const f2 = abrirCerrarModalEdit(); f1(); f2()}}>Guardar</Button>
                <Button onClick={()=>abrirCerrarModalEdit()}>Cancelar</Button>
            </div>
        </div>
    )

    return (
        <div>
            <BarraSuperiorClub/>
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
                        <br></br>
                        
                        
                        {data.map((club)=>(
                            
                            <Grid container>
                                <Grid item xs = {12}>
                                    <h1>{club.nombre_club}</h1>
                                </Grid>
                                <br></br>
                                <br></br>
                                <Grid item xs ={3}>
                                    <h4 className={classes.text2}>Direccion:</h4>  
                                </Grid>
                                <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'} >
                                    <TextField variant='outlined' color = 'secondary' fullWidth inputProps={{readOnly: true,}} defaultValue={club.direccion_club} size = 'small'/>
                                </Grid>
                                <Grid item xs = {3}>
                                    <h4 className={classes.text2}>Representante:</h4>               
                                </Grid>
                                <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                    <TextField variant='outlined' color = 'secondary' fullWidth inputProps={{readOnly: true,}} defaultValue={club.representante_club} size = 'small'/>
                                </Grid>
                                <Grid item xs = {3}>
                                    <h4 className={classes.text2}>Telefono:</h4>
                                </Grid>
                                <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                    <TextField variant='outlined' color = 'secondary' fullWidth inputProps={{readOnly: true,}} defaultValue={club.telefono_club} size = 'small'/>
                                </Grid>
                                <Grid item xs = {3}>
                                    <h4 className={classes.text2}>Comuna:</h4>
                                </Grid>
                                <Grid item xs = {8} marginTop= {'10px'} marginRight = {'50px'}>
                                    <TextField variant='outlined' color = 'secondary' fullWidth inputProps={{readOnly: true,}} defaultValue={club.comuna_club} size = 'small'/>
                                </Grid>
                            </Grid>
                        ))}
                        <br></br>
                    </BackdropFilter>
                </Box>

                <div  mx = {20}>
                    <Button 
                        className={classes.button}
                        type = "button"
                        variant = 'contained'
                        size='small'
                        onClick = {()=>abrirCerrarModalEdit()}
                    >
                        Editar
                    </Button>
                    <Modal
                        open = {modalEdit}
                        close = {abrirCerrarModalEdit}
                    >
                        {bodyEdit}
                    </Modal>
                    
                </div>
            </div>
            
        </div>
        
    )
}
