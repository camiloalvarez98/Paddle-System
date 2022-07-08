import React, { useState }from 'react'
import { BarraSuperiorClub } from "../../Components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';
import { Link } from 'react-router-dom';
import {TextField} from '@material-ui/core';
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
    const [id_dupla, setIdDupla] = useState('')
    const id_campeonato = localStorage.getItem('currentCamp')
    const id_categoria = localStorage.getItem('currentCategoria')
    
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
        await axios.put('http://localhost:3001/api/Club/selectGanadores/'+id_campeonato+'/'+id_categoria,id_dupla)
        .then(()=>{
            var dataNueva = data;
            dataNueva.forEach(winner =>{
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
                        <h2>Registrar Ganadores</h2>
                        <Grid container >
                            <br></br>
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
                        onClick = {() => {
                            setGanadores()
                            window.location.href = '/campeonatosclub';
                        }}
                    >
                        Guardar
                    </Button>
                </div>
                
            </div>


        </div>
    )
}
