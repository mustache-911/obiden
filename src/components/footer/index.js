import * as React from 'react';
import { useContext } from 'react';
import { ColorContext } from '../../context/color';
import { LanguageContext } from '../../context/language'
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { PAGES } from '../../constants/pages'
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MCTI from './Footer_img/MCTI.png'
import ON from './Footer_img/on.png'
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
        <Box style={{ background: '#002443' }}>
            <Container maxWidth="xl">
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    sx={{ py: 4 }}
                >
                    <Stack
                        flexWrap={'wrap'}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            sx={{
                                height: '100%',
                                width: '100%',
                                maxHeight: { xs: 233, md: 30 },
                                maxWidth: { xs: 250, md: 100 }
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
                                    color: '#fff',
                                    display: { xs: 'block', md: 'flex' },
                                    fontFamily: 'montserrat',
                                    fontWeight: 400,
                                    fontSize: '13px',
                                    textDecoration: 'none'
                                }}
                            >
                                Realização:
                            </Typography>
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                marginRight: '5px',
                                cursor: 'pointer',
                                height: '100%',
                                width: '100%',
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 250, md: 150 }
                            }}
                            alt="Logo Observatório Nacional"
                            src={ON}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/observatorio/pt-br'
                                    )
                                )
                            }
                        />

                        <Box>
                            <Typography
                                noWrap
                                alignItems="right"
                                justifyContent="right"
                                textAlign="center"
                                sx={{
                                    my: -0.5,
                                    cursor: 'pointer',
                                    color: '#fff',
                                    display: { xs: 'block', md: 'flex' },
                                    fontFamily: 'Signika, sans-serif;',
                                    fontWeight: 'light',
                                    fontSize: '9pt',
                                    letterSpacing: '0px',
                                    marginRight: '5pt',
                                    marginLeft: '3px',
                                    textDecoration: 'none'
                                }}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://dados.gov.br/organization/about/secretariaespecialdacultura'
                                        )
                                    )
                                }
                            >
                                SECRETARIA ESPECIAL DA
                            </Typography>
                            <Typography
                                noWrap
                                alignItems="right"
                                justifyContent="right"
                                textAlign="right"
                                sx={{
                                    cursor: 'pointer',
                                    color: '#fff',
                                    display: { xs: 'block', md: 'flex' },
                                    letterSpacing: '0px',
                                    fontFamily: 'Signika, sans-serif;',
                                    fontSize: '8pt',
                                    fontWeight: 'SemiBold',
                                    marginRight: '5pt'
                                }}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://dados.gov.br/organization/about/secretariaespecialdacultura'
                                        )
                                    )
                                }
                            >
                            CULTURA    
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                noWrap
                                alignItems="right"
                                justifyContent="right"
                                textAlign="right"
                                sx={{
                                    my: -0.5,
                                    cursor: 'pointer',
                                    color: '#fff',
                                    letterSpacing: '0px',
                                    display: { xs: 'block', md: 'flex' },
                                    fontWeight: 'light',
                                    fontFamily: 'Signika, sans-serif;',
                                    fontSize: '9pt',
                                    textDecoration: 'none'
                                }}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www.gov.br/turismo/pt-br'
                                        )
                                    )
                                }
                            >
                                MINISTÉRIO DO
                            </Typography>
                            <Typography
                                noWrap
                                alignItems="right"
                                justifyContent="right"
                                textAlign="right"
                                sx={{
                                    cursor: 'pointer',
                                    letterSpacing: '0px',
                                    color: '#fff',
                                    display: { xs: 'block', md: 'flex' },
                                    fontFamily: 'Signika, sans-serif;',
                                    fontSize: '8pt',
                                    fontWeight: 'SemiBold',
                                    textDecoration: 'none'
                                }}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www.gov.br/turismo/pt-br'
                                        )
                                    )
                                }
                            >
                                TURISMO
                            </Typography>
                        </Box>

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                height: '80%',
                                width: '80%',
                                maxHeight: { xs: 233, md: 200 },
                                maxWidth: { xs: 250, md: 120 }
                            }}
                            alt="MCTI"
                            src={MCTI}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/mcti/pt-br'
                                    )
                                )
                            }
                        />
                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 100 },
                                maxWidth: { xs: 230, md: 170 }
                            }}
                            alt="Logo ITA Junior"
                            src={ITAJunior}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.itajunior.com.br/'
                                    )
                                )
                            }
                        />
                    </Stack>

                    <Stack direction="row" alignItems="flex-start" spacing={3}>
                        <AndroidIcon
                            onClick={() => navigate('https://play.google.com/store/apps/details?id=br.com.fractaltecnologia.mncti&hl=pt')}
                            sx={[
                                { color: 'white', fontSize: '2.5rem' },
                                {
                                    '&:hover': {
                                        color: 'black',
                                        cursor: 'pointer',
                                        transition: '0.3s'
                                    }
                                }
                            ]}
                        />
                        <AppleIcon
                            onClick={() => navigate('https://apps.apple.com/br/app/olimp%C3%ADada-m%C3%AAs-da-ci%C3%AAncia-e-tec/id1536011249')}
                            sx={[
                                { color: 'white', fontSize: '2.5rem' },
                                {
                                    '&:hover': {
                                        color: 'black',
                                        cursor: 'pointer',
                                        transition: '0.3s'
                                    }
                                }
                            ]}
                        />


                        <Twitter
                            onClick={() => navigate('/')}
                            sx={[
                                { color: 'white', fontSize: '2.5rem' },
                                {
                                    '&:hover': {
                                        color: 'black',
                                        cursor: 'pointer',
                                        transition: '0.3s'
                                    }
                                }
                            ]}
                        />
                    </Stack>
                    <Box
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            display: { xs: 'block', md: 'flex' }
                        }}
                    >
                        <Box 
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                        >
                            <Typography
                                variant="p"
                                noWrap
                                sx={{
                                    marginRight: '2pt',

                                    color: 'white'
                                }}
                            >
                                © 2022 Olimpíada da Independência.
                            </Typography>
                        </Box>
                        <Box
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                        >
                            <Typography
                                variant="p"
                                noWrap
                                textAlign="right"
                                sx={{
                                    color: 'white'
                                }}
                            >
                                All rights reserved.
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}
export default ResponsiveToolBar
