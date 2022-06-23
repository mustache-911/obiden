import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ResponsiveToolBar from '../footer'
import { PAGES } from '../../constants/pages'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from './Olimpiadas_Bicentenário.png'
import PeopleIcon from '@mui/icons-material/People';
import {Stack} from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CategoryIcon from '@mui/icons-material/Category';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  '&:hover': {
    backgroundColor: grey[825],
  },
}));


const pages = PAGES.NAMES;
const links = PAGES.LINKS;

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
        <AppBar position="static" sx={{ maxHeight: { xs:'15vh',md:'13vh'}}} style={{ background: '#002443'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Box
              
              component="img"
              sx={{
                margin:'5px',
                cursor:'pointer',
                height: '100%',
                width: '100%',
                maxHeight: { xs: 190, md:250 },
                maxWidth: { xs: 180, md: 215 }
              }}
              onClick={()=>navigate('./')}
              alt="Logo Olimpiada da Independência"
              src={Logo}
             
            />
          <Stack direction="row" alignItems="right" justifyContent="right" spacing={4}  sx={{py: 4, width:'80%'}}>
            <Box alignItems="right" justifyContent="right" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* Menu for mobile */}
                {pages.map((page, index) => (
                   <a href={links[index]} style ={{textDecoration: 'none', color: "#000"}}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </a>
                ))}
              </Menu>
            </Box>
      
            <Box spacing sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack direction="row" alignItems="right" justifyContent="right" spacing={3}  >
            <ColorButton variant="contained" onClick={() => document.getElementById('sobre').scrollIntoView({block: "center", behavior: "smooth"})} startIcon={<PeopleIcon/>} disableRipple>
             O que é?
            </ColorButton>
            <ColorButton variant="contained" onClick={() => document.getElementById('categorias').scrollIntoView({block: "center", behavior: "smooth"})} startIcon={<CategoryIcon/>} disableRipple>
             Quem pode participar?
            </ColorButton>
            <ColorButton variant="contained" onClick={() => document.getElementById('regulamento').scrollIntoView({block: "start", behavior: "smooth"})} startIcon={<AutoStoriesIcon/>} disableRipple>
             Regulamento
            </ColorButton>
            </Stack>
            </Box>
              
            
            
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <ResponsiveToolBar />
    </div>
  );
};
export default ResponsiveAppBar;