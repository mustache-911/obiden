import * as React from 'react';
import responsive from "./footer.module.css";
import { useContext } from 'react';
import { ColorContext } from '../../context/color'; 
import { LanguageContext } from '../../context/language'
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { PAGES } from '../../constants/pages'
import Divider from '@mui/material/Divider';
import { Instagram, Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MCTI from './Footer_img/mcti_logo.png'
import ITAJunior from './Footer_img/ITAJunior.png'
import Fractal from './Footer_img/Logo_fractal.png'
import Mktjr from './Footer_img/Logo_mktjr.png'
import Ufms from './Footer_img/ufms_logo_1.png'
import Turismo from './Footer_img/logoministerioturismo.png'
import Cultura from './Footer_img/logo_secretaria_especial_da_cultura.png'
import MEC from './Footer_img/mec_logo.png'
import Camara from './Footer_img/camara_logo.png'
import OBA from './Footer_img/OBA_logo.png'
import UFRN from './Footer_img/UFRN_logo.png'
import UFVJM from './Footer_img/UFVJM_logo.png'
import OBB from './Footer_img/obb_logo.png'
import OBL from './Footer_img/obl_logo.png'
import OBR from './Footer_img/obr_logo.png'
import OBI from './Footer_img/obi_logo.png'
import SBC from './Footer_img/SBC_logo.png'
import Unicamp from './Footer_img/unicamp_logo.png'
import Unesco from './Footer_img/unesco_logo.png'



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
                        className={responsive.Stack}
                        direction = "row"
                    >
                        <Box
                            sx= {{
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
                                spacing ={3}
                                sx={{
                                    color: '#fff',
                                    display: { xs: 'block', md: 'flex' },
                                    fontFamily: 'montserrat',
                                    fontWeight: 400,
                                    fontSize: '13px',
                                    textDecoration: 'none',
                                    margin: "10 0 10 0"
                                }}
                            >
                                Organização:
                            </Typography>
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                marginLeft: '15px',
                                marginRight: '15px',
                                cursor: 'pointer',
                                height: '50%',
                                width: '50%',
                                maxHeight: { xs: 75, md: 75 },
                                maxWidth: { xs: 75, md: 75 }
                            }}
                            alt="UFMS"
                            src={Ufms}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.ufms.br/'
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
                                    cursor: 'pointer',
                                    color: '#fff',
                                    display: { xs: 'block', md: 'flex' },
                                    //precisa dessas especificacoes de fonte mesmo ?
                                    fontFamily: 'Signika, sans-serif;',
                                    fontWeight: '1',
                                    fontSize: '9pt',
                                    letterSpacing: '0px',
                                    margin:'20px 5px -2px 3px',
                                    textDecoration: 'none',
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
                                    fontWeight: 'Bold',
                                    marginRight: '5pt',
                                }}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www.gov.br/turismo/pt-br'
                                        )
                                    )
                                }
                            >
                            CULTURA    
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
                            alt="Turismo"
                            src={Turismo}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/turismo/pt-br'
                                    )
                                )
                            }
                        />
                        
                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                height: '100%',
                                width: '80%',
                                maxHeight: { xs: 250, md: 250 },
                                maxWidth: { xs: 300, md: 220 }
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
   
                    </Stack>

                <Box
                
                sx={{
                    height: '100%',
                    width: '100%',
                }}
                alignItems="center"
                justifyContent="center"
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
                                Apoio:
                            </Typography>
                        </Box>
    
                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 100 },
                                maxWidth: { xs: 230, md: 170 }
                            }}
                            alt="Camara dos deputados"
                            src={Camara}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.camara.leg.br/'
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
                            alt="MEC"
                            src={MEC}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/mec/pt-br'
                                    )
                                )
                            }
                        />
            
                        
                    </Stack>
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
                                Parceria:
                            </Typography>
                        </Box>
    
                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 100 },
                                maxWidth: { xs: 230, md: 170 }
                            }}
                            alt="Unesco"
                            src={Unesco}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://pt.unesco.org/fieldoffice/brasilia'
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

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 100 },
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="UFRN"
                            src={UFRN}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://ufrn.br/'
                                    )
                                )
                            }
                        />

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                maxHeight: { xs: 233, md: 200 },
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="Logo FRACTAL"
                            src={Fractal}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://fractaltecnologia.com.br/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="Logo mktjr"
                            src={Mktjr}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.marketingjr.com.br/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="UFVJM"
                            src={UFVJM}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'http://portal.ufvjm.edu.br/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="OBBiotec"
                            src={OBB}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.obbiotec.com.br/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="OBL"
                            src={OBL}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://obling.org/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="OBR"
                            src={OBR}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.obr.org.br/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="OBA"
                            src={OBA}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'http://www.oba.org.br/site/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="OBI"
                            src={OBI}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://olimpiada.ic.unicamp.br/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="SBC"
                            src={SBC}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.sbc.org.br/'
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
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="Unicamp"
                            src={Unicamp}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.unicamp.br/unicamp/'
                                    )
                                )
                            }
                        />



                        
                    </Stack>
                </Box>
                    <Stack direction="row" alignItems="flex-start" spacing={3}>
                        <AndroidIcon
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://play.google.com/store/apps/details?id=br.com.fractaltecnologia.mncti&hl=pt'
                                    )
                                )
                            }
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
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://apps.apple.com/br/app/olimp%C3%ADada-m%C3%AAs-da-ci%C3%AAncia-e-tec/id1536011249'
                                    )
                                )
                            }
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
                                Instagram:
                            </Typography>

                    <Stack direction="row" alignItems="flex-start" spacing={3}>
                        <Instagram onClick={()=>navigate(window.location.replace(
                                        'https://instagram.com/olimpiadabicentenario'
                                    ))} sx={[{color: 'white', fontSize: '2.5rem'},
                                        {'&:hover': {color:'black', cursor:'pointer', transition:'0.3s' }}]}/>
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