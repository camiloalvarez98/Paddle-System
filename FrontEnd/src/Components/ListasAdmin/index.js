import React from 'react'
import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    
} from '@material-ui/core'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
//import {  NavLink, Link  } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Divider from '@mui/material/Divider';
import { Link } from '@material-ui/core';



const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
}

export default function ListasAdmin() {
    
    
    return (
       
        <div>
        
            <List sx={style} component = 'nav' >
                <div>
                    <li className='nav-item'>
                        <Link underline='none' color='inherit' href= '/Perfil' >
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary = 'Perfil'/>
                            </ListItem>
                            
                        </Link>
                    </li>
                    
                    <li className = 'nav-item'>
                        <Link underline='none' color='inherit' href='/AgregarClub' >
                            <ListItem button>
                                <ListItemIcon>
                                    <AddCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Agregar club'/>
                            </ListItem>
                            
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link underline="none" color='inherit' href= "/Principal" >
                            <ListItem button>
                                <ListItemIcon>
                                    <CalendarTodayIcon/>
                                </ListItemIcon>
                                <ListItemText primary = 'Campeonatos'/>
                            </ListItem>
                            
                        </Link>
                    </li>
                </div>

            </List>
            
            </div>
        
    )
}
