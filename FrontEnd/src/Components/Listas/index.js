import React from 'react'
import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    
} from '@material-ui/core'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import {  NavLink, Link  } from 'react-router-dom'; //ESTO HACE Q EL PROGRAMA SE CAIGA AL ABRIR LAS LISTAS




export default function Lista() {
    
    
    return (
       
        <div>
        
            <List component = 'nav'>
                <div>
                    <li className = 'nav-item'>
                        <Link to = "/" className = 'btn' >
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Home'/>
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
                    <li className='nav-item'>
                        <Link to = "/selectganadores" className = 'btn'>
                            <ListItem button>
                                <ListItemIcon>
                                    <CalendarTodayIcon/>
                                </ListItemIcon>
                                <ListItemText primary = 'Seleccionar ganadores'/>
                            </ListItem>
                        </Link>
                    </li>

                </div>

            </List>
            
            </div>
        
    )
}
