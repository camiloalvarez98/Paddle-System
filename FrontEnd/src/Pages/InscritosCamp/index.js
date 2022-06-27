import React from 'react';
import { Contenedor } from "../../Components";
import Box from '@mui/material/Box';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Button, makeStyles   } from '@material-ui/core';
import BackdropFilter from "react-backdrop-filter";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles ((theme) =>({
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
}))

export default function InscritosClub(){
    const classes = useStyles()
    
    return(
        <div>
            <Contenedor/>
            <div align = 'center'>
                <Box
                    sx = {{flexGrow: 20}}
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
                        <h2>Inscritos</h2>
                        <TableContainer>
                            <Table sx = {{ minWidth: 650 }} id = 'tables'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID Pareja</TableCell>
                                        <TableCell>Partner 1</TableCell>
                                        <TableCell>Partner 2</TableCell>
                                        <TableCell>Categoria</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>

                    </BackdropFilter>

                </Box>
                <div mx = {20}>
                    <Link style={{ textDecoration: 'none' }}  color='inherit' to ='/campeonatosclub'>
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
                </div>
            </div>
        </div>
    )
}
