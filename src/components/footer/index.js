import * as React from 'react';
import { useContext } from 'react';
import { ColorContext } from '../../context/color';
import { LanguageContext } from '../../context/language'
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { PAGES } from '../../constants/pages'
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material'
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
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Image from 'material-ui-image'
import MCTI from './Footer_img/MCTI.png'
import ON from './Footer_img/on.png'
import Secult from './Footer_img/SECULT E MT.png'
import ITAJunior from './Footer_img/ITAJunior.png'




const pages = PAGES.NAMES;
const links = PAGES.LINKS;


const ResponsiveToolBar = () => {
  const { mainColor } = useContext(ColorContext)
  const { language, setLanguage } = useContext(LanguageContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();


  return (
    <Box style={{ background: mainColor }}>
      <Container maxWidth="xl">
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{py: 4}}>
          <Stack flexWrap={'wrap'} direction="row" alignItems="center" justifyContent="center">
               <Box sx={{
                  height: '100%',
                  width: '100%',
                  maxHeight: { xs: 233, md: 30 },
                  maxWidth: { xs: 250, md: 100 },
                  }} 
                  alignItems="center"
                  justifyContent="center"
                >
                <Typography
                noWrap
                alignItems="center"
                justifyContent="center"
                textAlign="center"   
                sx={{
                  color:'#fff',
                  display: { xs: 'block', md: 'flex' },
                  fontFamily: 'montserrat',
                  fontWeight: 400,
                  fontSize:'13px',
                  textDecoration: 'none',
                }}
              >
              Realização:
            </Typography> 
            </Box>
            <Box
              component="img"
              sx={{
              
                height: '100%',
                width: '100%',
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 250, md: 150 },
              }}
              alt="Logo Observatório Nacional"
              src={ON}
            />
            <Box
              component="img"
              
              sx={{
                margin:2,
                height: '100%',
                width: '100%',
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 250, md: 250 },
              }}
              alt="Logo Secult."
              src={Secult}
            />
            <Box
              
              component="img"
              
              sx={{
                margin:2,
                height: '100%',
                width: '100%',
                maxHeight: { xs: 233, md: 200 },
                maxWidth: { xs: 250, md: 300 },
              }}
              alt="MCTI"
              src={MCTI}
            />
            <Box
              
              component="img"
              
              sx={{
                margin:2,
                maxHeight: { xs: 233, md: 100 },
                maxWidth: { xs: 250, md: 210 },
              }}
              alt="Logo ITA Junior"
              src={ITAJunior}
            />
          
          </Stack>
            
          
          <Stack direction="row" alignItems="flex-start" spacing={3}>
            <Instagram onClick={()=>navigate('/')} sx={[{color: 'white', fontSize: '2.5rem'},
                            {'&:hover': {color:'black', cursor:'pointer', transition:'0.3s' }}]}/>
            <Facebook onClick={()=>navigate('/')} sx={[{color: 'white', fontSize: '2.5rem'},
                            {'&:hover': {color:'black', cursor:'pointer', transition:'0.3s' }}]}/>
            <LinkedIn onClick={()=>navigate('/')} sx={[{color: 'white', fontSize: '2.5rem'},
                            {'&:hover': {color:'black', cursor:'pointer', transition:'0.3s' }}]}/>
            <Twitter  onClick={()=>navigate('/')}sx={[{color: 'white', fontSize: '2.5rem'},
                            {'&:hover': {color:'black', cursor:'pointer', transition:'0.3s'}}]}/>
          </Stack>
          <Typography
              variant="p"
              noWrap
              sx={{
                my: 3,
                color: 'white',
              }}
            >
              © 2022 Olimpíada da Independência. All rights reserved.
            </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default ResponsiveToolBar;