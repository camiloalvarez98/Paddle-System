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




export default function Listas_admin() {
    
    return (
       
        <div>
        {/*hay que editarlo para la lista del admin, principal, clubs, perfil*/ }
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

                </div>

            </List>
            
            </div>
        
    )
}
