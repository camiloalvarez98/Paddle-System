import React, { useState } from 'react';
import { Button, Toolbar,AppBar, Typography, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
//import { useAuth } from '../../context/AuthContext';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';






const useStyles = makeStyles(theme =>({

    offset: theme.mixins.toolbar, //hace al sitio responsive
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('xxl')]:{ //cuando la pagina este en tamanio xl aparecera el boton que despliega el menu
            display: 'none'
        }
        
    },
    title: {
        flexGrow:1,
        
    },
    appBar:{
        [theme.breakpoints.up('xxl')]:{
            width:`calc(100% - ${240}px)`,
            marginLeft: 240
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9,
        marginTop:'30'
    }

    

}))

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


export default function BarraBusqueda(props) {
    const [error, setError] = useState ('');
    //const { logout } = useAuth(); //esta funcion viene de /context/AuthContext

    /*
    const handleLogout = async () => {
        try{
            await logout();
        } catch (error){ 
            setError('Server Error')
        }
    }*/
    const classes = useStyles()

    return (
        <AppBar className = {classes.appBar} color = 'white'>
            <Toolbar >
                <IconButton
                    className = {classes.menuButton}
                    color = 'inherit'
                    aria-label = 'menu'
                    onClick = {() => props.accionAbrir()}
                    sx = {{mr:2}}
                >
                    <MenuIcon/>
                </IconButton>
                    
                    
                <Typography
                    variant='h6'
                    className = {classes.title}
                >
                    Sistema Padel
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Buscar club"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <div>
                    {error && <p className = 'error' > {error} </p>} 
                </div>
                <Button
                    variant = 'contained'
                    color = 'white'
                    //onClick = {handleLogout}
                >
                    Salir
                </Button>
                
            </Toolbar>
            
        </AppBar>
        
        
    )
}