import * as React from 'react';
import Home from '../../views/Home/index'
import { Outlet, useNavigate } from 'react-router-dom';
import ResponsiveToolBar from '../footer'
import { useContext } from 'react';
import { ColorContext } from '../../context/color';
import { LanguageContext } from '../../context/language'
import { PAGES } from '../../constants/pages'
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
import AdbIcon from '@mui/icons-material/Adb';
import Logo from './Olimpiadas_Bicentenário.png'
import PeopleIcon from '@mui/icons-material/People';
import {Stack} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CategoryIcon from '@mui/icons-material/Category';
import { getTabScrollButtonUtilityClass } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: grey[900],
  '&:hover': {
    backgroundColor: grey[825],
  },
}));


const pages = PAGES.NAMES;
const links = PAGES.LINKS;
const settings = ['Profile', 'Account', 'Logout'];

const ResponsiveAppBar = () => {
  const { mainColor } = useContext(ColorContext)
  const { language, setLanguage } = useContext(LanguageContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" href={links[index]}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
      
            <Box spacing sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack direction="row" alignItems="right" justifyContent="right" spacing={3}  >
            <ColorButton variant="contained" href='/aboutus' startIcon={<PeopleIcon/>} disableRipple>
             Sobre
            </ColorButton>
            <ColorButton variant="contained" href='#categorias' startIcon={<CategoryIcon/>} disableRipple>
             Categorias
            </ColorButton>
            <ColorButton variant="contained" href='/regulamento' startIcon={<AutoStoriesIcon/>} disableRipple>
             Regulamento
            </ColorButton>
            <ColorButton variant="contained" href='/login' startIcon={<AccountCircleOutlinedIcon/>} disableRipple>
             Login
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