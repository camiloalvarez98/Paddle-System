import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useAuth } from '../../Context/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
import { ListItemText } from '@mui/material'

const useStyles = makeStyles(theme=>({
    root:{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
    },
    container:{
        opacity: '0.8',
        height: '85%', 
        marginTop: theme.spacing(10), 
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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confpas,setConfpas] = useState('')
    const handleEmail = (event) => setEmail(event.target.value)
    const handlePassword = (event) => setPassword(event.target.value) 
    const handleConfirm = (event) => setConfpas(event.target.value)
    const classes = useStyles()
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault(); 
        
        if (password !== confpas){
            setError('Contraseñas no coinciden')
            setTimeout(()=> setError(''), 2500)
        
        }else{
            try{
                await signup(email, password) 
                navigate('/') 
            } catch(prop){
                setError('Server Error')
                setTimeout(()=> setError(''), 2500)             
            }
        }
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
                                autoFocus 
                                placeholder = 'Correo'
                                type = 'email' 
                                onChange = {handleEmail}                               
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                autoFocus 
                                placeholder = 'Contraseña'
                                type = 'password' 
                                onChange = {handlePassword}
                            />
                            <br/>
                            <br/>
                            <TextField
                                variant = 'outlined'
                                color='secondary'
                                fullWidth
                                required
                                autoFocus 
                                placeholder = 'Confirmar contraseña'
                                type = 'password' 
                                onChange = {handleConfirm}
                            />
                            
                            <Button
                                type = 'submit'
                                value = 'signup'
                                fullWidth
                                variant = 'contained'
                                
                                className = {classes.button}                                
                            >
                                Crear
                            </Button>
                            <Link to = '/loginClub'>
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
