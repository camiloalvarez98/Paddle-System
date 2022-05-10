import React from "react";
import FormControl from '@mui/material/FormControl';
import { InputLabel,Input, FormHelperText, Container } from "@mui/material";


export default function Buscador() { 
    return (
      <Container>
        <FormControl>
            <InputLabel htmlFor="busqueda">Busqueda</InputLabel>
            <Input id="busqueda" type="text" aria-describedby="busqueda-helper"/>
            <FormHelperText id="busqueda-helper">Busqueda</FormHelperText>
        </FormControl>
      </Container>
    );
  }
  