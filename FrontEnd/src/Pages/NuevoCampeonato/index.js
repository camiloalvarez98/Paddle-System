import React, {useEffect,useState,Fragment} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {  Button, TextField, makeStyles, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup  } from '@material-ui/core';
import { Contenedor } from "../../Components";
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


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
  text2:{
    textAlign : 'left',
    marginLeft: '20px'
  },

}));

export default function NuevoCampeonato() {

  const classes = useStyles()
  const [categoriesAc, setCategoriesAc] = useState([])
  console.log(categoriesAc)
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleCategoriesChange = e =>{
    const index = categoriesAc.indexOf(e.target.value)
    if (index === -1){
      setCategoriesAc([...categoriesAc, e.target.value])
    }else{
      setCategoriesAc(categoriesAc.filter((categoriesAc) => categoriesAc !== e.target.value))
    }
  }

  const [selects,setSelects]=useState();

  
  

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
            //p = {1} //padding
            //borderRadius = '8px'
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
              <h2>Nuevo Campeonato</h2>
              <Grid container direction="row" justify="flex-end" alignItems="center">

                <Grid item sm = {12} xl = {4} marginTop= {'10px'}  >
                    <TextField required label='Nombre campeonato'  />
                </Grid>
                
                <Grid item sm = {12} xl = {4} marginTop= {'10px'}  >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Fecha de inicio *"
                      inputFormat="yyyy-MM-dd"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>                
                </Grid>
                
                <Grid item sm = {12} xl = {4} marginTop= {'10px'}  >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Hora de inicio"
                    ampm={false}
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  </LocalizationProvider>                
                </Grid>

                <Grid item sm = {12} xl = {4} marginTop= {'10px'}  >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Fecha de término *"
                      inputFormat="yyyy-MM-dd"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>                
                </Grid>

                <Grid item sm = {12} xl = {4} marginTop= {'10px'}  >
                  <TextField required label='Cupos'  />
                </Grid>  

                <br></br>
                <Box 
                  margin = 'center' 
                  sx = {{flexGrow: 20}}
                  marginTop = {'30px'}
                >
                  <FormControl>
                      <h4>Categorias</h4>
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
          <Link  style={{ textDecoration: 'none' }} color='inherit' to ='/campeonatosclub'>
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
