import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ResponsiveAppBar } from '../../Components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles (theme=>({
    text:{
        fontFamily: "Segoe UI Symbol",
    }
}))

export default function Principal() {
    const classes = useStyles()
    return (
        <div align = 'center' marginBottom = '10px'>
            <ResponsiveAppBar/>
            <br/>
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
                borderColor = '#adc178'
                bgcolor={'white'}
                padding={2}
                >
                    <h3 className={classes.text}>PadelCL</h3>
                    <Typography variant="h8" align='left' fontFamily={"Segoe UI Symbol"}>
                        PadelCL nace como un proyecto académico de la universidad Católica del Norte de desarrollo
                        de software el cual tiene como objetivo resolver la problemática que existe en el mundo del
                        padel: El no registro de jugadores a la hora de participar en un campeonato. 
                        Generando problemas a la hora de enfrentarse los competiredores entre gente de mayor
                        y menor nivel.
                    </Typography>
                    <br/>
                    <br/>
                    <Box
                        component='img'
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 250, md: 167 },
                            maxWidth: { xs: 350, md: 300 },
                          }}
                        src='https://gbifchile.mma.gob.cl/wp-content/uploads/2018/05/logo-ucatonorte.jpg'
                    >
                    </Box>
            </Box>
            <br/>
        </div>
  );
}
