import React from 'react'
import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    
} from '@material-ui/core'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from '@material-ui/core';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
}

export default function Lista() {

    return (
       
        <div>
        
            <List sx={style} component = 'nav'>
                <div>
                    <li className = 'nav-item'>
                        <Link underline='none' color='inherit' href = "/" className='btn' >
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Home'/>
                            </ListItem>
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link underline='none' color='inherit' href = "/CampeonatosClub" className = 'btn'>
                            <ListItem button>
                                <ListItemIcon>
                                    <CalendarTodayIcon/>
                                </ListItemIcon>
                                <ListItemText primary = 'Campeonatos'/>
                            </ListItem>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link underline='none' color='inherit'  href = "/selectganadores" className = 'btn'>
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
