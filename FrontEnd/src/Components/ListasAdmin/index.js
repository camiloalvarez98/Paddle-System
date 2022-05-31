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



export default function ListasAdmin() {
    
    
    return (
       
        <div>
        
            <List component = 'nav'>
                <div>
                    <li className='nav-item'>
                        <Link to = "/CampeonatosClub" className = 'btn'>
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary = 'Perfil'/>
                            </ListItem>
                        </Link>
                    </li>
                    
                    <li className = 'nav-item'>
                        <Link to = "/" className = 'btn' >
                            <ListItem button>
                                <ListItemIcon>
                                    <AddCircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Agregar club'/>
                            </ListItem>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to = "/CampeonatosClub" className = 'btn'>
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
