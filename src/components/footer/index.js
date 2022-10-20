import * as React from 'react';
import responsive from "./footer.module.css";
import { useNavigate } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { Instagram } from '@mui/icons-material'
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
import UCS from './Footer_img/UCS_logo.png'
import IFSul from './Footer_img/IFSul_logo.png'
import sapientia from './Footer_img/sapientia_logo.png'
import OBO from './Footer_img/OBO_logo.png'
import fapec from './Footer_img/fapec_logo.png'
import ON from './Footer_img/ON_logo.png'
import OBAP from './Footer_img/obap_logo.png'
import BN from './Footer_img/BN_logo.png'
import polaron from './Footer_img/polaron_logo.png'
import ITA from './Footer_img/ITA_logo.png'
import EduSpace from './Footer_img/EduSpace_logo.png'
import TorneioFem from './Footer_img/torneiofeminino_logo.png'
import UFSM from './Footer_img/UFSM_logo.png'
import obinvest from './Footer_img/obinvest_logo.png'
import IMPA from './Footer_img/impa_logo.png'
import ONC from './Footer_img/ONC_logo.png'
import MDR from './Footer_img/MDR_logo.png'
import MDC from './Footer_img/MDC_logo.png'
import vitalis from './Footer_img/vitalis_logo.png'
import OBECON from './Footer_img/obecon_logo.png'
import MC from './Footer_img/mc2_logo.png'
import OBS from './Footer_img/OBS_logo.png'
import Obmep from './Footer_img/obmep_logo.png'
import OGB from './Footer_img/OGB_logo.png'
import MOVMEN from './Footer_img/movmen_logo.png'
import OBM from './Footer_img/OBM_logo.png'
import obsat from './Footer_img/obsat_logo.png'
import CECIERJ from './Footer_img/CECIERJ_logo.png'
import ENAGRO from './Footer_img/ENAGRO_logo.png'
import OBN from './Footer_img/OBN_logo.png'


const ResponsiveToolBar = () => {
  const navigate = useNavigate();


    return (
        <Box style={{ background: '#002443' }}>
            <Container maxWidth="xl">
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    sx={{ py: 4 }}
                >
                    <Stack
                        className={responsive.Stack}
                        direction= "row"
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
                                marginBottom: '20px',
                                marginTop: '20px',
                                cursor: 'pointer',
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
                                    fontSize: '11pt',
                                    letterSpacing: '0px',
                                    margin:'7px 5px -2px 3px',
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
                                    fontSize: '10pt',
                                    fontWeight: '600',
                                    marginRight: '5pt',
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
                        

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 200 },
                                maxWidth: { xs: 120, md: 120 }
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
                                marginTop: 1,
                                cursor: 'pointer',
                                maxHeight: { xs: 110, md: 110 },
                                maxWidth: { xs: 105, md: 105 }
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

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 250, md: 250 },
                                maxWidth: { xs: 300, md: 220 },
                                width: '112%',
                                heigth: '112%'
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
                
    
                alignItems="center"
                justifyContent="center"
                >
                    <Stack
                        className= {responsive.Stack}
                        direction="row"
                        alignItems='center'     
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
                     

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 100 },
                                maxWidth: { xs: 230, md: 170 }
                            }}
                            alt="fapec"
                            src={fapec}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://fapec.org/'
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
                                maxHeight: { xs: 68, md: 68 },
                                maxWidth: { xs: 118, md: 118 },
                            }}
                            alt="MDC"
                            src={MDC}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/cidadania/pt-br'
                                    )
                                )
                            }
                        />

                        <Box
                            component="img"
                            sx={{
                                margin:2,
                                cursor: 'pointer',
                                maxHeight: { xs: 190, md: 190 },
                                maxWidth: { xs: 130, md: 130 }
                            }}
                            alt="MC"
                            src={MC}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/mcom/pt-br'
                                    )
                                )
                            }
                        />

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 250, md: 250 },
                                maxWidth: { xs: 300, md: 300 }
                            }}
                            alt="MDR"
                            src={MDR}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/mdr/pt-br'
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
                                maxHeight: { xs: 233, md: 200 },
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="ON"
                            src={ON}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/observatorio/pt-br'
                                    )
                                )
                            }
                        />

                        <Box
                            component="img"
                            sx={{
                                margin: 1,
                                marginBottom: 2,
                                maxHeight: { xs: 70, md: 70 },
                                maxWidth: { xs: 120, md: 120 }
                            }}
                            alt="IMPA"
                            src={IMPA}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://impa.br/'
                                    )
                                )
                            }
                        />

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                maxHeight: { xs: 100, md: 100 },
                                maxWidth: { xs: 150, md: 150 }
                            }}
                            alt="BN"
                            src={BN}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.gov.br/bn/pt-br'
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
                            alt="Logo ITA"
                            src={ITA}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'http://www.ita.br/'
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
                            alt="UFSM"
                            src={UFSM}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.ufsm.br/'
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
                            alt="obinvest"
                            src={obinvest}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://obinvest.org/'
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
                            alt="OBM"
                            src={OBM}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.obm.org.br/'
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
                            alt="OGB"
                            src={OGB}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.unifal-mg.edu.br/obgeografia/'
                                    )
                                )
                            }
                        />
                        
                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 250, md: 250 },
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="Obmep"
                            src={Obmep}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'http://www.obmep.org.br/'
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
                            alt="OBAP"
                            src={OBAP}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://obap.ifsuldeminas.edu.br/'
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
                            alt="ONC"
                            src={ONC}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.onciencias.org/'
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
                            alt="OBS"
                            src={OBS}
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

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 100 },
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="UCS"
                            src={UCS}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.ucs.br/site'
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
                            alt="IFSul"
                            src={IFSul}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://portal.ifsuldeminas.edu.br/'
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
                            alt="sapientia"
                            src={sapientia}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://olimpiadadofuturo.com.br/'
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
                            alt="OBO"
                            src={OBO}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://olimpiada.maredeciencia.eco.br/'
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
                            alt="Obecon"
                            src={OBECON}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://obecon.org/'
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
                            alt="polaron"
                            src={polaron}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://proex.uergs.edu.br/programas/polaron'
                                    )
                                )
                            }
                        />  

                        <Box
                            component="img"
                            sx={{
                                margin: 1,
                                cursor: 'pointer',
                                maxHeight: { xs: 233, md: 100 },
                                maxWidth: { xs: 230, md: 200 }
                            }}
                            alt="EduSpace"
                            src={EduSpace}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'http://plataforma.cortexai.com.br/users/sign_in'
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
                            alt="TorneioFem"
                            src={TorneioFem}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://tfcbr.inf.ufsm.br/'
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
                            alt="MOVFem"
                            src={MOVMEN}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.ufsm.br/projetos/pesquisa/meninas-olimpicas/'
                                    )
                                )
                            }
                        />  

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 140, md: 140 },
                                maxWidth: { xs: 180, md: 180 }
                            }}
                            alt="vitalis"
                            src={vitalis}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://olimpiadademedicina.org/'
                                    )
                                )
                            }
                        />  

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 140, md: 140 },
                                maxWidth: { xs: 180, md: 180 }
                            }}
                            alt="OBSAT"
                            src={obsat}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.obsat.org.br/'
                                    )
                                )
                            }
                        />  

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 140, md: 140 },
                                maxWidth: { xs: 180, md: 180 }
                            }}
                            alt="ENAGRO"
                            src={ENAGRO}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://enagro.agricultura.gov.br/'
                                    )
                                )
                            }
                        />  

                        <Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 140, md: 140 },
                                maxWidth: { xs: 180, md: 180 }
                            }}
                            alt="CECIERJ"
                            src={CECIERJ}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://www.cecierj.edu.br/'
                                    )
                                )
                            }
                        />  

<Box
                            component="img"
                            sx={{
                                margin: 2,
                                cursor: 'pointer',
                                maxHeight: { xs: 140, md: 140 },
                                maxWidth: { xs: 180, md: 180 }
                            }}
                            alt="obn"
                            src={OBN}
                            onClick={() =>
                                navigate(
                                    window.location.replace(
                                        'https://brazilianbrainbee.org/'
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