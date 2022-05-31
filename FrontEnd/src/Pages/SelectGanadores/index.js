import React from 'react'
import { Contenedor } from "../../Components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SaveIcon from '@mui/icons-material/Save';

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
        marginLeft: '20px'
    },
    button:{
        width: '30%',
        //margin: theme.spacing(10,65,10),
        marginTop: theme.spacing(6) ,
        
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
    return (
    
        <div>
            <Contenedor/>
            <div align = 'center'>
                <Box 
                    sx = {{flexGrow: 20}}
                    color = 'contrastText'
                    mx = {20} //margen a todos los lados
                    p = {1} //padding
                    borderRadius = '8px'
                    border = {2}
                                
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
                        <h1>Registrar Ganadores</h1>
                        <Grid container>
                            {/*Campeonato */}
                            <Grid item sm = {3}>
                                <h2 className={classes.text2}>ID Campeonato:</h2>
                            </Grid>
                            <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                                <TextField variant='outlined' fullWidth/>
                            </Grid>
                            {/*Categoria*/}
                            <Grid item sm = {3}>
                                <h2 className={classes.text2}>Categoria:</h2>
                            </Grid>
                            <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                                <TextField variant='outlined' fullWidth/>
                            </Grid>
                            {/*Primer Lugar*/}
                            <Grid item sm = {3}>
                                <h2 className={classes.text2}>Primer Lugar:</h2>
                            </Grid>
                            <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                                <TextField variant='outlined' sx = {{m: 1, width: '47%'}} label=' Rut Jugador 1'/>
                                <TextField variant='outlined' sx = {{m: 1, width: '47%'}} label=' Rut Jugador 2'/>
                            </Grid>
                            {/*Segundo Lugar*/}
                            <Grid item sm = {3}>
                                <h2 className={classes.text2}>Segundo Lugar:</h2>
                            </Grid>
                            <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                                <TextField variant='outlined' sx = {{m: 1, width: '47%'}} label='Rut Jugador 1'/>
                                <TextField variant='outlined' sx = {{m: 1, width: '47%'}} label='Rut Jugador 2'/>
                            </Grid>
                            {/*Tercer Lugar*/}
                            <Grid item sm = {3}>
                                <h2 className={classes.text2}>Tercer Lugar:</h2>
                            </Grid>
                            <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                                <TextField variant='outlined' sx = {{m: 1, width: '47%'}} label='Rut Jugador 1'/>
                                <TextField variant='outlined' sx = {{m: 1, width: '47%'}} label='Rut Jugador 2'/>
                            </Grid>

                        </Grid>
                        <br></br>
                    </BackdropFilter>
                </Box>
                <div  mx = {20}>
                    <Button 
                            className={classes.button}
                            type = "button"
                            variant = 'contained'
                            size='small'
                            endIcon = {<KeyboardReturnIcon/>}
                            //onClick = {()=>abrirCerrarModalEdit()}
                            //agregar función de volver a la página anterior
                    >
                        Volver
                    </Button>
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
