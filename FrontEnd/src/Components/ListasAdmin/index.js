import React from 'react'
import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    
} from '@material-ui/core'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import {  NavLink, Link  } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Divider from '@mui/material/Divider';
import { Link as Uilink} from '@material-ui/core';
import { Perfil } from '../../PagesAdministrador';


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
                        <Link to='/PerfilAdmin' style={{color:'inherit', textDecoration: 'inherit'}}> 
                            <ListItem button component={Link} to='/PerfilAdmin'>
                                <ListItemIcon>
                                    <AccountCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary = 'Perfil'/>
                            </ListItem>
                        </Link>
                    </li>
                    
                    <li className = 'nav-item'>
                        <Link to='/AgregarClub' style={{color:'inherit', textDecoration: 'inherit'}} >
                            <ListItem button>
                                <ListItemIcon>
                                    <AddCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Agregar club'/>
                            </ListItem>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/' style={{color:'inherit', textDecoration: 'inherit'}}>
                            <ListItem button>
                                <ListItemIcon>
                                    <CalendarTodayIcon/>
                                </ListItemIcon>
                                <ListItemText primary = 'Clubes registrados'/>
                            </ListItem>
                        </Link>
                    </li>
                </div>

            </List>
            
            </div>
        
    )
}
