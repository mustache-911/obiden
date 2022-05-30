import * as React from 'react';
import { useContext } from 'react';
import { ColorContext } from '../../context/color';
import { LanguageContext } from '../../context/language'
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

const pages = PAGES.NAMES;
const links = PAGES.LINKS;

const ResponsiveToolBar = () => {
  const { mainColor } = useContext(ColorContext)
  const { language, setLanguage } = useContext(LanguageContext)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  return (
    <Box style={{ background: mainColor }}>
      <Container maxWidth="xl">
        <Stack direction="column" alignItems="center" justifyContent="center" spacing={2} sx={{py: 4}}>
          <Stack direction="row">
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="flex-start">
            {pages.map((page, index) => (
                <Button
                  key={page}
                  sx={{ my: 2, mx: 4, color: 'white', display: 'block' }}
                  href={links[index]}
                >
                  {page}
                </Button>
              ))}
          </Stack>
          <Stack direction="row" alignItems="flex-start" spacing={3}>
            <Instagram sx={{color: 'white', fontSize: '2.5rem'}}/>
            <Facebook sx={{color: 'white', fontSize: '2.5rem'}}/>
            <LinkedIn sx={{color: 'white', fontSize: '2.5rem'}}/>
            <Twitter sx={{color: 'white', fontSize: '2.5rem'}}/>
          </Stack>
          <Typography
              variant="p"
              noWrap
              sx={{
                my: 3,
                color: 'white',
              }}
            >
              © 2022 Diagnosis. All rights reserved.
            </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default ResponsiveToolBar;