import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import { Link } from '@material-ui/core';
import { useAuth } from '../../Context/AuthContext';
import { useState } from 'react';

const BarraSuperiorClub = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
    

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [error, setError] = useState ('');
  const { logout } = useAuth();

  const handleLogout = async () => {
    try{
        await logout();
    } catch (error){ 
        setError('Server Error')
    }
}

  return (
    <AppBar position="static" color='default'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsTennisIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/homeclub"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PadelCL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link underline='none' color='inherit' href = "/campeonatosclub" className='btn'>
                        <Typography textAlign="center">Campeonatos registrados</Typography>
                    </Link>
                </MenuItem>
                
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link underline='none' color='inherit' href = "/nuevocampeonato" className='btn'>
                        <Typography textAlign="center">Nuevo campeonato</Typography>
                    </Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                    <Link underline='none' color='inherit' href = "/selectganadores" className='btn'>
                        <Typography textAlign="center">Registrar ganador</Typography>
                    </Link>
                </MenuItem>

            </Menu>
          </Box>
          <SportsTennisIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/homeclub"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PadelCL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>  
            <Link underline='none' color='inherit' href = "/campeonatosclub" className='btn'>
                <Button
                    onClick={handleCloseNavMenu}
                    variant='text' color='inherit' 
                >
                    Campeonatos registrados
                </Button>
            </Link>
            <Link underline='none' color='inherit' href = "/nuevocampeonato" className='btn'>
                <Button
                    onClick={handleCloseNavMenu}
                    variant='text' color='inherit' 
                >
                    Nuevo campeonato
                </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Menú personal">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Link underline='none' color='inherit' href = "/principalclub" className='btn'>
                        <Button variant='text' color='inherit'>
                            <Typography variant='h7' textAlign="center">Perfil</Typography>
                        </Button>
                    </Link>
                </MenuItem>
                
                <MenuItem onClick={handleCloseNavMenu}>
                    <Button onClick = {handleLogout} variant='text' color='inherit' >
                        <Typography variant='h8' textAlign="center">Salir</Typography>
                    </Button>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default BarraSuperiorClub;

