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
import { fromUnixTime } from 'date-fns';



const useStyles = makeStyles(theme=>({
    root:{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    container:{
        opacity: '0.8',
        height: '85%', //largo del contenedor
        marginTop: theme.spacing(5), //altura del contenedor
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{ //responsive
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
        margin: theme.spacing(3, 0, 2), //mrgen general
        //backgroundColor: theme.palette.secondary.main
        
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
    const { signup } = useAuth() //esta funcion viene de /context/AuthContext
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confpas,setConfpas] = useState('')
    const [usrVerf, setUsrVerf] = useState(false)
    const [open, setOpen] = useState(false)
    const [id_categoria, handleFormChange] = useForm({id_categoria:""})
    //const [categoria, setCategoria] = useState('')
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
        categoria: ''
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
    /**
     * handleSubmit es la funcion que se ejecuta al presionar el boton 'crear', esta de debe invocar (onSubmit) cuando se cree el formulario
     * donde se ingresara la info necesaria, en este caso email y password
     * 
     */

    const handleSubmit = async(event) => {
        event.preventDefault(); //para evitar que se recarge
        
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
                await signup(usr.email, usr.password) //aqui ya se verifico que ambas contrasenias sean iguales, por lo tanto, un error aca solo seria del servidor
                navigate('/loginJugador') //se crea la cuenta y se redirige al proytecto raiz
            } catch(prop){
                setError('Server Error')
                setTimeout(()=> setError(''), 2500)             
            }
        }
    }
    const handleEmail = (event) => setEmail(event.target.value) //el email se setea deacuerdo al valor que ingrese en el input

    const handlePassword = (event) => setPassword(event.target.value) //la password se setea deacuerdo al valor que ingrese en el input  

    const handleConfirm = (event) => setConfpas(event.target.value)

    const handleClick = () => {
        //setUsr({...usr, categoria : form.categoria})
        setOpen(!open);
        
    };
   
    //console.log(form.categoria)
    
    const createJugador = async() => {
        console.log('ok')
        console.log(usr)
        
        await axios.post('http://localhost:3001/api/Jugador/createJugador', usr, id_categoria)
        .then(response => {
            setData(data.concat(response.data))
            //console.log(data.concat(response.data))
            console.log("jugador creado")
        })
    }
    
  

    return (
        <div>
            <Grid container component = 'main' className = {classes.root}>
                <Container component={Paper} elevation={5} maxWidth = 'xs' className = {classes.container}>{/** caja contenedora blanca */}
                    <div className = {classes.div}>
                        {error && <p className= 'error'>{error}</p>}
                        <br/>
                        <Avatar className = {classes.avatar}>
                            <PersonAddAltOutlinedIcon/> {/**icono de addUser */}
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
                                autoFocus //enfocado en input de usuario
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
                                autoFocus //enfocado en input de usuario
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
                                autoFocus //enfocado en input de usuario
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
                                autoFocus //enfocado en input de usuario
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
                                autoFocus //enfocado en input de usuario
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
                                autoFocus //enfocado en input de usuario
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
                                autoFocus //enfocado en input de usuario
                                label = 'Contraseña'
                                type = 'password' //eso encripta la password por pantalla
                                onChange = {handleChange}
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                autoFocus //enfocado en input de usuario
                                label = 'Confirmar contraseña'
                                type = 'password' //eso encripta la password por pantalla
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
                                                    handleFormChange({categoria: '1'});
                                                    //setUsr({...usr, categoria : '1'})
                                                    handleClick();
                                                   
                                                }
                                            } 
                                        >
                                            Primera
                                        </ListItemButton>
                                        <ListItemButton 
                                            onClick={() => {
                                                    handleFormChange({categoria: '2'});
                                                    //setUsr({...usr, categoria : form.categoria})
                                                    handleClick()

                                                }
                                            } 
                                        >
                                            Segunda
                                        </ListItemButton>
                                        <ListItemButton 
                                            onClick={() => {
                                                    handleFormChange({categoria: '3'});
                                                    //setUsr({...usr, categoria : form.categoria})
                                                    handleClick() 
                                                }
                                            } 
                                        >
                                            Tercera
                                        </ListItemButton>
                                        <ListItemButton 
                                            onClick={() => {
                                                    handleFormChange({categoria: '4'});
                                                    //setUsr({...usr, categoria : form.categoria})
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
                                                    //console.log(e.target.id)
                                                    handleFormChange({categoria: '5'});
                                                    //setUsr({...usr, categoria : form.categoria})
                                                   
                                                      
                                                }
                                            } 
                                        >
                                            Quinta
                                        </ListItemButton>
                                        <ListItemButton 
                                            onClick={() => {
                                                    handleFormChange({categoria: '6'});
                                                    //setUsr({...usr, categoria : form.categoria})
                                                    handleClick()
                                                }
                                            } 
                                        >
                                            Sexta
                                        </ListItemButton>
                                        <ListItemButton 
                                            onClick={() => {
                                                    handleFormChange({categoria: 'DA'});
                                                    //setUsr({...usr, categoria : form.categoria})
                                                    handleClick()
                                                    
                                                }
                                            } 
                                        >
                                            Damas A
                                        </ListItemButton>
                                        <ListItemButton 
                                            
                                            onClick={() => {
                                                    handleFormChange({categoria: 'DB'});
                                                    //setUsr({...usr, categoria : form.categoria})
                                                    handleClick()
                                                    
                                                }
                                            } 
                                        >
                                            Damas B
                                        </ListItemButton>
                                        <ListItemButton 
                                            
                                            onClick={() => {
                                                    handleFormChange({categoria: 'DC'});
                                                    //setUsr({...usr, categoria : form.categoria})
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