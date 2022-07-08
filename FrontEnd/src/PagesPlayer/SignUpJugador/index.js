import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useAuth } from '../../Context/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
import { ListItemText, List, Collapse, ListItemButton, ListItemIcon, } from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { useForm } from '../../Shared/hooks/useForm'
import axios from 'axios';



const useStyles = makeStyles(theme=>({
    root:{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    container:{
        opacity: '0.8',
        height: '85%',
        marginTop: theme.spacing(5), 
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{ 
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div:{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

    },
    avatar:{
        margin: theme.spacing(6),
        marginTop: -40,
        backgroundColor: theme.palette.secondary.main 
       
    },
    form:{
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button:{
        margin: theme.spacing(3, 0, 2),
    },
    input:{
        flex: 1, 
        padding: 4, 
        marginLeft: 85,
        marginTop: 5, 
        fontSize: 18, 
        borderWidth: 1,  
        justifyContent: 'flex-start'
    },
    text:{
        marginLeft: 170,
        marginTop: 30
    }

}))

export default function SignIn() {
    const { signup } = useAuth() 
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confpas,setConfpas] = useState('')
    const [open, setOpen] = useState(false)
    const [id_categoria, handleFormChange] = useForm({id_categoria:""})
    const classes = useStyles()
    const navigate = useNavigate();
    const [usr, setUsr] = useState({
        nombre: '',
        apellido: '',
        rut:'',
        email:'',
        password:'',
        telefono:'',
        direccion: '',
        categoria: '',
        
    })

    const handleChange = e =>{
        const {name, value} = e.target;
        if(name !== ""){
          setUsr(prevState =>({
              ...prevState,
              [name]:value
          }))
        }
    }

    const handleSubmit = async(event) => {
        event.preventDefault(); 
        
        if (usr.password !== confpas){
            setError('Contraseñas no coinciden')
            setTimeout(()=> setError(''), 2500)
        }
        else if (usr.nombre === ''){
            setError('Falta el nombre!')
            setTimeout(()=> setError(''), 2500)
        }
        else if(usr.apellido === ''){
            setError('Falta el apellido!')
            setTimeout(()=> setError(''), 2500)
        }
        else if (usr.rut === ''){
            setError('Falta el rut!')
            setTimeout(()=> setError(''), 2500)
        }
        else if(id_categoria === ""){
            setError('Falta la categoria!')
            setTimeout(()=> setError(''), 2500)
        }
        else{
            try{
                await signup(usr.email, usr.password) 
                navigate('/loginJugador') 
            } catch(prop){
                setError('Server Error')
                setTimeout(()=> setError(''), 2500)             
            }
        }
    }
    const handleEmail = (event) => setEmail(event.target.value)

    const handlePassword = (event) => setPassword(event.target.value) 

    const handleConfirm = (event) => setConfpas(event.target.value)

    const handleClick = () => {
        
        setOpen(!open);
        
    };
    
    const createJugador = async() => {
        const cat = id_categoria.id_categoria
        var puntaje = 0
        switch(cat){
            case '1':
                puntaje += 600
                break;
            case "2":
                puntaje += 400
                break;
            case '3':
                puntaje += 300
                break;
            case '4':
                puntaje += 200
                break;
            case '5':
                puntaje += 100
                break;
            case '6':
                puntaje += 0
                break;
            case 'DC':
                puntaje += 0
                break;
            case 'DB':
                puntaje += 150
                break;
            case 'DA':
                puntaje += 300
                break;
            default:
                console.log('me fue mal')
        }

        console.log(puntaje)
    
        await axios.post('http://localhost:3001/api/Jugador/createJugador/'+  id_categoria.id_categoria + '/' + puntaje ,usr)
        .then(response => {
            setData(data.concat(response.data))
            console.log("jugador creado")
        })
    }
    
  

    return (
        <div>
            <Grid container component = 'main' className = {classes.root}>
                <Container component={Paper} elevation={5} maxWidth = 'xs' className = {classes.container}>
                    <div className = {classes.div}>
                        {error && <p className= 'error'>{error}</p>}
                        <br/>
                        <Avatar className = {classes.avatar}>
                            <PersonAddAltOutlinedIcon/> 
                        </Avatar>
                        <Typography component = 'h1' variant = 'h4'> Sign Up </Typography>
                        <form className = {classes.form} onSubmit = {handleSubmit}>
                            <br/>
                            
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                name = 'nombre'
                                autoFocus 
                                label ='Nombre'
                                onChange={handleChange}
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                name = 'apellido'
                                autoFocus 
                                label ='Apellido Paterno'
                                onChange={handleChange}
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                name = 'rut'
                                autoFocus 
                                label ='Rut'
                                onChange={handleChange}
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                name ='telefono'
                                autoFocus 
                                label = 'Telefono'
                                onChange = {handleChange}                           
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                name ='direccion'
                                autoFocus 
                                label = 'Direccion' 
                                onChange = {handleChange}                           
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                name ='email'
                                autoFocus 
                                label = 'Correo'
                                type = 'email' 
                                onChange = {handleChange}                           
                            />
                            <br/>
                            <br/>

                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                name = 'password'
                                autoFocus 
                                label = 'Contraseña'
                                type = 'password' 
                                onChange = {handleChange}
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                autoFocus
                                label = 'Confirmar contraseña'
                                type = 'password' 
                                onChange = {handleConfirm}
                            />
                            <br/>
                            <br/>
                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon>
                                    <FormatListNumberedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Categoria" secondary ={id_categoria.categoria} />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
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
                                                    handleClick()

                                                }
                                            } 
                                        >
                                            Segunda
                                        </ListItemButton>
                                        <ListItemButton 
                                            onClick={() => {
                                                    handleFormChange({id_categoria: '3'});
                                                    handleClick() 
                                                }
                                            } 
                                        >
                                            Tercera
                                        </ListItemButton>
                                        <ListItemButton 
                                            onClick={() => {
                                                    handleFormChange({id_categoria: '4'});
                                                    handleClick()    
                                                }
                                            } 
                                        >
                                            Cuarta
                                        </ListItemButton>
                                        <ListItemButton 
                                            id = '5'
                                            onClick={() => {
                                                    handleClick()  
                                                    handleFormChange({id_categoria: '5'});
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
                            <Button
                                type = 'submit'
                                value = 'signup'
                                fullWidth
                                variant = 'contained'
                                className = {classes.button}   
                                onClick = {() => createJugador()}                             
                            >
                                Crear
                            </Button>
                    
                            <Link to = '/loginJugador'>
                                <ListItemText secondary = 'Regresar' className = {classes.text}/>
                            </Link>
                            <br/><br/>
                        </form>
                    </div>
                </Container>
            </Grid>  
        </div>
    )
}