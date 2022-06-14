import React, {useEffect,useState} from 'react';
//import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles, styled } from '@material-ui/core';
import {Modal, Button, TextField } from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';
import { ContenedorAdmin , TablaClubes} from '../../Components';
import { Link, NavLink,  } from 'react-router-dom'
import BackdropFilter from "react-backdrop-filter";

  

export default function Principal() {

    return (
        <div>
            <ContenedorAdmin/>
            <TablaClubes/>
        </div>
        
    )
}
