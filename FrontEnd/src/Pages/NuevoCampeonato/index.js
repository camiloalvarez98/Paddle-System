import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {  Button, TextField, makeStyles, FormControlLabel, Checkbox, FormControl, FormGroup  } from '@material-ui/core';
import { BarraSuperiorClub } from "../../Components";
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MenuItem from '@mui/material/MenuItem';
import swal from 'sweetalert'

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
  const [data, setData] = useState([]);
  const [fechaI, setFechaI] = React.useState(new Date('2022-08-18T21:11:54'));
  const [fechaT, setFechaT] = React.useState(new Date('2022-08-18T21:11:54'));
  const [horaI, setHoraI] = React.useState(new Date('2022-08-18T21:11:54'));
  const [currency, setCurrency] = React.useState('');
  const [fecha_if, setFecha_i] = useState('')
  const [fecha_t, setFecha_t] = useState({})
  const [errorF, setErrorF] = React.useState(false);
  const correo_club = localStorage.getItem('correo_club')
  const [id_camp, setId_camp] = useState(null)
  
 
 
 const [nCamp, setNcamp] = useState({
    fecha_i: '',
    fecha_t: '',
    nombre_campeonato: ''
  })
 
  const handleChange = e =>{
    const {name, value} = e.target;
    if(name !== ""){
      setNcamp(prevState =>({
          ...prevState,
          [name]:value
      }))
    }
  }


  const handleChangeFI = (newValue) => {
    setFechaI(newValue);
    const dia = newValue.getDate()
    const mes = newValue.getMonth() + 1
    const anio = newValue.getFullYear()
    const fecha_in = (anio + '-' + mes + '-' + dia)
    setFecha_i(fecha_in)
    setNcamp({...nCamp, fecha_i: fecha_in})
  };
  const handleChangeFT = (newValue) => {
    setFechaT(newValue);
    const dia = newValue.getDate()
    const mes = newValue.getMonth() + 1
    const anio = newValue.getFullYear()
    const fecha_te = (anio + '-' + mes + '-' + dia)
    setFecha_t(fecha_te)
    setNcamp({...nCamp, fecha_t: fecha_te})
  };
  const handleChangeHI = (newValue) => {
    setHoraI(newValue);
  };

  const mostrarAlerta1 = () => {
    if (errorF === true){
      swal({
        title: 'Cuidado!',
        text: 'La fecha de termino no puede ser menor a la fecha de inicio',
        icon: 'error'
      })
    }
    else{
      swal({
        title: 'Campeonato crado con exito',
        icon: 'success',
        timer: '2000',
      })
    }
  }

  const handleCategoriesChange = e =>{
    const index = categoriesAc.indexOf(e.target.value)
    if (index === -1){
      setCategoriesAc([...categoriesAc, e.target.value])
    }else{
      setCategoriesAc(categoriesAc.filter((categoriesAc) => categoriesAc !== e.target.value))
    }
  }

  const datos = [
    { 
      value: 10,
      label: '10',
    },
    {
      value: 20,
      label: '20',
    },
  ];
  
  const handleChange2 = (event) => {
    setCurrency(event.target.value);
  };


  
  const createCamp = async() =>{
    await axios.post('http://localhost:3001/api/Club/createCampeonato/' + correo_club, nCamp)
    .then(response => {
      setId_camp(response.data.campeonato)
      setData(data.concat(response.data))
    })   
    .catch((e) => console.log(e))
  }


  
  useEffect (() =>{
    if(id_camp){
      let x = categoriesAc 
      console.log(categoriesAc)
      categCamp(x)
      window.location.reload(false);
    }
    
  },[id_camp])

  const categCamp = async (x) =>{
    await axios.post('http://localhost:3001/api/Club/createCategoria', {id_camp:id_camp, cat: x})
    .then(response => {
      setData(data.concat(response.data))
      mostrarAlerta()
    })
    .catch((e) => console.log(e))
  }

  const mostrarAlerta= () =>{
    swal({
      title:'Campeonato registrado correctamente',
      icon:'success'
    })
  }

  return (
    <div>
        <BarraSuperiorClub/>
        <br/>
        <div align = 'center' >
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
            mx = {20}
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
              <Grid container>
                <Grid item sm = {12} xl = {12} marginTop= {'10px'}  marginRight = {'40px'} marginLeft = {'40px'} >
                    <TextField required label='Nombre campeonato' variant = 'outlined' fullWidth size = 'small' name = 'nCamp' 
                    onChange={handleChange}/>
                </Grid>
                
                <Grid item sm = {6} xl = {5} marginTop= {'10px'} marginLeft = {'90px'} >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Fecha de inicio"
                      type = 'date'
                      inputFormat="yyyy-MM-dd"
                      value={fechaI}
                      name = 'fecha_i'
                      onChange={handleChangeFI}
                      renderInput={(params) => <TextField {...params} name = 'fecha_i' required variant = 'outlined' fullWidth size = 'small' />}
                    />
                  </LocalizationProvider>                
                </Grid>

                <Grid item sm = {6} xl = {5} marginTop= {'10px'} marginRight = {'10px'} marginLeft = {'10px'} >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Fecha de término"
                      inputFormat="yyyy-MM-dd"
                      type = 'date'
                      value ={fechaT}
                      name = 'fecha_t'
                      
                      onChange= {handleChangeFT}

                      renderInput={(params) => <TextField {...params} name = 'fecha_t' required error = {errorF}  variant = 'outlined' fullWidth size = 'small' />}
                    />
                  </LocalizationProvider>                
                </Grid>
                <Grid item sm = {6} xl = {12} marginTop= {'10px'}  marginRight = {'40px'} marginLeft = {'40px'} >
                  <TextField 
                    id='cuposMaximos'
                    select
                    label='Cupos '
                    variant='outlined'
                    size = 'small'
                    value={currency}
                    onChange={handleChange2}
                    helperTet='Por favor, seleccione la cantidad de cupos'
                    sx = {{m: 1, width: '35%'}}
                    fullWidth
                  >
                    {datos.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>  
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
                onClick={() => {createCamp()}}
                endIcon = {<SaveIcon/>}
            >
                Guardar
            </Button>
          </div>

        </div>
    </div>
  )
}
