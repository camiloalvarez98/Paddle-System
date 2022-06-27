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
    const [form, handleFormChange] = useForm({categoria:""})


    const handleClick = () => {
        setOpen(!open);
    };

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
                            {/*Campeonato */}
                            <Grid item sm = {6} xl = {12} marginTop= {'5px'} marginRight = {'80px'} marginLeft = {'80px'} >
                                <TextField required label='ID de Campeonato' variant = 'outlined' fullWidth size = 'small'/>
                            </Grid>
                            <br></br>
                            {/*Categoria*/}
                            <Grid item sm = {6} xl = {12} marginTop= {'5px'} marginRight = {'80px'} marginLeft = {'80px'} >
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <FormatListNumberedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Categoria" secondary = {form.categoria}/>
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
                                                        const function1 = handleFormChange({categoria: 'primera'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Primera
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'segunda'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Segunda
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'tercera'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Tercera
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'cuarta'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Cuarta
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'quinta'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Quinta
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'sexta'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Sexta
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'DA'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Damas A
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'DB'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
                                                    }
                                                } 
                                            >
                                                Damas B
                                            </ListItemButton>
                                            <ListItemButton 
                                                onClick={() => {
                                                        const function1 = handleFormChange({categoria: 'DC'});
                                                        const function2 = handleClick()
                                                        function1()
                                                        function2()
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
                                <TextField required label=' Rut Jugador 1' variant = 'outlined' fullWidth size = 'small' />
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'45px'} marginRight = {'10px'} >
                                <TextField required label=' Rut Jugador 2' variant = 'outlined' fullWidth size = 'small'/>
                            </Grid>
                            {/*Segundo Lugar*/}
                            <Grid item xs = {12} sm = {3}>
                                <h4 className={classes.text2}>Segundo Lugar:</h4>
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'15px'} marginRight = {'10px'} >
                                <TextField required  label='Rut Jugador 1' variant = 'outlined' fullWidth size = 'small' />
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'15px'} marginRight = {'10px'}>
                                <TextField required  label='Rut Jugador 2' variant = 'outlined' fullWidth size = 'small'/>
                            </Grid>
                            {/*Tercer Lugar*/}
                            <Grid item xs = {12} sm = {3}>
                                <h4 className={classes.text2}>Tercer Lugar:</h4>
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'15px'} marginRight = {'10px'}>
                                <TextField required  label='Rut Jugador 1'variant = 'outlined' fullWidth size = 'small'/>
                            </Grid>
                            <Grid item xs = {12} sm = {4} xl = {4} marginTop= {'15px'} marginRight = {'10px'}>
                                <TextField required  label='Rut Jugador 2' variant = 'outlined' fullWidth size = 'small'/>
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
                    >
                        Guardar
                    </Button>
                </div>
                
            </div>


        </div>
    )
}
