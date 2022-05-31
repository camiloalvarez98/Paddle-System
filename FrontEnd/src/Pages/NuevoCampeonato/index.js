import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {  Button, TextField, makeStyles, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup  } from '@material-ui/core';
import { Contenedor } from "../../Components";
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
      width: '100%'
  },
  button:{
      width: '20%',
      //margin: theme.spacing(10,65,10),
      marginTop: theme.spacing(8) ,
      
      [theme.breakpoints.down(400 + theme.spacing(2)+2)]:{
          margin: theme.spacing(0),
          width: '100%',
          height: '100%'
      }
  },
  text2:{
    textAlign : 'left',
    marginLeft: '20px'
  },

}));

export default function NuevoCampeonato() {

  const classes = useStyles()
  const [categoriesAc, setCategoriesAc] = useState([])
  console.log(categoriesAc)
  
  const handleCategoriesChange = e =>{
    const index = categoriesAc.indexOf(e.target.value)
    if (index === -1){
      setCategoriesAc([...categoriesAc, e.target.value])
    }else{
      setCategoriesAc(categoriesAc.filter((categoriesAc) => categoriesAc !== e.target.value))
    }
  }



  return (
    <div>
        <Contenedor/>
        <div align = 'center' >
          <Box
            //sx = {{flexGrow: 20}}
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
              <h1>Nuevo Campeonato</h1>
              <Grid container>
                <Grid item sm = {3}>
                  <h2 className={classes.text2}>Nombre:</h2>
                </Grid>
                <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                    <TextField variant='outlined' fullWidth/>
                </Grid>
                <Grid item sm = {3}>
                  <h2 className={classes.text2}>Fecha de inicio:</h2>
                </Grid>
                <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                    <TextField variant='outlined' fullWidth/>
                </Grid>
                <Grid item sm = {3}>
                  <h2 className={classes.text2}>Fecha de termino:</h2>
                </Grid>
                <Grid item sm = {12} xl = {8} marginTop= {'10px'}  >
                    <TextField variant='outlined' fullWidth/>
                </Grid>
                <br></br>
                <Box 
                  margin = 'center' 
                  sx = {{flexGrow: 20}}
                  marginTop = {'30px'}
                >
                  <FormControl>
                      <h3>Categorias</h3>
                    <FormGroup>
                      <Grid item sm = {12} xl = {12} marginTop= {'20px'} >
                        <FormControlLabel
                          label = 'Primera'
                          value = '1'
                          control = {<Checkbox color = 'secondary'  checked = {categoriesAc.includes('1')} onChange = {handleCategoriesChange}/>}
                        />
                        <FormControlLabel
                          label = 'Segunda'
                          value = '2'
                          control = {<Checkbox color = 'secondary'  checked = {categoriesAc.includes('2')} onChange = {handleCategoriesChange}/>}
                        />
                        <FormControlLabel
                          label = 'Tercera'
                          value = '3'
                          control = {<Checkbox color = 'secondary'  checked = {categoriesAc.includes('3')} onChange = {handleCategoriesChange}/>}
                        />
                        <FormControlLabel
                          label = 'Cuarta'
                          value = '4'
                          control = {<Checkbox color = 'secondary'  checked = {categoriesAc.includes('4')} onChange = {handleCategoriesChange}/>}
                        />
                        <FormControlLabel
                          label = 'Quinta'
                          value = '5'
                          control = {<Checkbox color = 'secondary'   checked = {categoriesAc.includes('5')} onChange = {handleCategoriesChange}/>}
                        />
                        <FormControlLabel
                          label = 'Sexta'
                          value = '6'
                          control = {<Checkbox color = 'secondary'  checked = {categoriesAc.includes('6')} onChange = {handleCategoriesChange}/>}
                        />     
                        <FormControlLabel
                          label = 'Damas A'
                          value = 'DA'
                          control = {<Checkbox color = 'secondary'  checked = {categoriesAc.includes('DA')} onChange = {handleCategoriesChange}/>}
                        />       
                        <FormControlLabel
                          label = 'Damas B'
                          value = 'DB'
                          control = {<Checkbox color = 'secondary' checked = {categoriesAc.includes('DB')} onChange = {handleCategoriesChange}/>}
                        />
                        <FormControlLabel
                          label = 'Damas C'
                          value = 'DC'
                          control = {<Checkbox color = 'secondary'  checked = {categoriesAc.includes('DC')} onChange = {handleCategoriesChange}/>}
                        />
                      </Grid>
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>
              <br></br>
            </BackdropFilter>
          </Box>
          <div  mx = {10}>
            <Button 
                className={classes.button}
                type = "button"
                variant = 'contained'
                size='medium'
                
            >
                Guardar
            </Button>
          </div>

        </div>
    </div>
  )
}
