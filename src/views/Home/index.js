import styles from './home.module.css'
import { Box, Stack, Card } from '@mui/material'
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineDot,
    TimelineContent,
    TimelineOppositeContent
} from '@mui/lab'
import pdf from './regulation.pdf'
import CategoryCard from '../../components/categoriaCard'

const Home = () => {

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
        >
            <Box className={styles.homeLandingContainer}>
                <h1>
                    INDEPENDÊNCIA <br /> OU <br /> MORTE
                </h1>
                <p>
                    Inscreva-se na Olimpíada do Bicentenário da Independência do
                    Brasil
                </p>
                <button className={styles.btn}>
                    <a href="https://fractalid.fractaltecnologia.com.br/signup?app_id=32&url_redirect=https%3A%2F%2Fapp.mncti.com.br%2F">INSCREVA-SE</a>
                </button>
            </Box>

            <Box className={styles.homeContent} id="sobre">
                <Box className={styles.landingImage} />

                <Card className={styles.homeLandingWhatIs}
                        >
                    <h3>
                        <span style={{ color: '#FCB805' }}>200</span> ANOS DE{' '}
                        <span style={{ color: '#01873B' }}>INDEPENDÊNCIA</span>
                    </h3>
                    <p>
                    Em 2022 celebramos o bicentenário de nossa Independência. 
                    Como parte das comemorações deste bicentenário, o governo federal está promovento uma Olimpíada totalmente aberta e gratuita. 
                    Através de provas instigantes, queremos provocar uma reflexão não só sobre a importância da Independência em si, mas também 
                    sobre todos os seus desdobramentos num espectro mais amplo que o histórico. Assim, as questões da Olimpíada abrangerão vários temas
                    transversais: Literatura, Pintura, Matemática, História, Geografia, Geopolítica, Música, etc.
                    </p>
                </Card>
            </Box>


            <Box className={styles.homeParticipate} id="categorias">
                <Stack>
                    <CategoryCard />
                </Stack>
            </Box>

            {/* Resumo do Regulamento */}
            <Box className={styles.rulesContainer}
                id="regulamento">
                <h2>COMO FUNCIONA?</h2>

                {/* Gratuito */}
                <Box className={`${styles.flexBox} ${styles.freeCost}`}>
                    <Card className={styles.rulesCard}>
                        <p>A Olimpíada do Bicentenário da Independência do Brasil é <span>totalmente gratuita</span> para qualquer estudante.</p>
                    </Card>
                    <img alt="" src="../../../Home/nomoney.png" sx={{ m: 2 }} className={styles.iconCard}/>
                </Box>

                {/* Inscrição independente */}
                <Box className={`${styles.flexBox} ${styles.independentSignIn}`}>
                    <img alt="" src="../../../Home/studentComputer.png" sx={{ m: 2 }} className={styles.iconCard}/>
                    <Card sx={{}} className={styles.rulesCard}>
                        <p>Estudantes podem <span>se inscrever diretamente</span>, sem a necessidade de que a escola se inscreva.</p>
                    </Card>
                </Box>

                {/* Categorias */}
                <Box className={`${styles.flexBox} ${styles.rulesCategories}`} sx={{ width: 1}}>
                    <Card sx={{p: 5}} className={styles.rulesCard}>
                        <p>Há <span>2 categorias</span> na Olimpíada: <span>Júnior</span> (estudantes do Ensino Fundamental) e <span>Sênior</span> (Estudantes do Ensino Médio, Ensino Técnico ou EJA).</p>
                        <Box className={styles.flexBox}>
                            <Box className={styles.rulesCategories}>
                                <img alt="" src="../../../Home/student.png" sx={{ m: 1 }} className={styles.iconCard}/>
                                <h3>Júnior</h3>
                            </Box>
                            <Box className={styles.rulesCategories}>
                                <img alt="" src="../../../Home/cllgstudent.png" sx={{ m: 1 }} className={styles.iconCard}/>
                                <h3>Sênior</h3>
                            </Box>
                        </Box>
                    </Card>
                </Box>

                {/* Fases */}
                <Box className={styles.flexBox} sx={{flexDirection: "column", width: 1}}>
                    <Card sx={{p: 5}} className={styles.rulesCard}>
                        <p>A Olimpíada é dividida em <span>4 fases</span>:</p>
                        <Box className={`${styles.flexBox} ${styles.rulesFases}`}>
                            <Box className={styles.linkFase} onClick={() => document.getElementById('fase0102').scrollIntoView({block: "center", behavior: "smooth"})}>
                                <img alt="" src="../../../Home/device.png" sx={{ m: 1.5 }} className={styles.iconCard}/>
                                <h3>Fases 1 e 2</h3>
                                <p>As provas serão online e poderão ser realizadas em computador, tablet ou aplicativo.</p>
                            </Box>
                            <Box className={styles.linkFase} onClick={() => document.getElementById('fase03').scrollIntoView({block: "center", behavior: "smooth"})}>
                                <img alt="" src="../../../Home/online-test.png" sx={{ m: 1.5 }} className={styles.iconCard}/>
                                <h3>Fase 3</h3>
                                <p>A prova será presencial ou virtual, sob supervisão.</p>
                            </Box>
                            <Box className={styles.linkFase} onClick={() => document.getElementById('fase04').scrollIntoView({block: "center", behavior: "smooth"})}>
                                <img alt="" src="../../../Home/congresso-nacional-do-brasil.png" sx={{ m: 1.5 }} className={styles.iconCard}/>
                                <h3>Fase 4</h3>
                                <p>Ocorrerá em Brasília e serão proporcionados transporte e hospedagem aos estudantes e seus responsáveis, caso necessário.</p>
                            </Box>
                        </Box>
                    </Card>
                </Box>

                <Box className={styles.regulation}>
                    <h3>
                        <a
                            className={styles.btn}
                            href={pdf}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Regulamento
                        </a>
                    </h3>
                </Box>
            </Box>

            <Box
                style={{ background: '#f9f9f9' }}
                className={styles.timelineContainer}
            >
                <Box className={styles.timelineInitialText}>
                    <h2>JORNADA INDEPENDÊNCIA</h2>
                    <p>
                        A Olimpíada abrange quatro fases: na primeira e na
                        segunda, uma prova objetiva online; na terceira, uma
                        prova objetiva e presencial; e na quarta,
                        o formato será divulgado posteriormente
                    </p>
                </Box>

                <Timeline position="alternate" className={styles.timeline}>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <p>3 a 10 de julho</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card
                                className={styles.timelineContent}
                                style={{ background: '#01873B' }}
                                id="fase0102"
                            >
                                <h3>FASE 01</h3>
                                <div className={styles.timelineInformation}>
                                    <p>
                                        A primeira fase será realizada de forma
                                        remota. Os inscritos poderão fazer a
                                        prova acessando a internet em
                                        computador, notebook, tablet ou celular.
                                        A prova pode ser feita em casa, na
                                        escola, ou em qualquer lugar com acesso
                                        à internet. A primeira fase é uma prova
                                        objetiva (múltipla escolha) com consulta
                                        a livros e à internet.
                                    </p>
                                </div>
                                <h4>Divulgação dos resultados:</h4>
                                <br />
                                <h4>até 17 de julho</h4>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <p>31 de julho a 7 de agosto</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card
                                className={styles.timelineContent}
                                style={{ background: '#FCB805' }}
                                id="fase02"
                            >
                                <h3>FASE 02</h3>
                                <div className={styles.timelineInformation}>
                                    <p>
                                        A segunda fase será realizada de forma
                                        remota. Os inscritos poderão fazer a
                                        prova acessando a internet em
                                        computador, notebook, tablet ou celular.
                                        A prova pode ser feita em casa, na
                                        escola, ou em qualquer lugar com acesso
                                        à internet. A segunda fase é uma prova
                                        objetiva (múltipla escolha) SEM consulta
                                        a livros e à internet.
                                    </p>
                                </div>
                                <h4>Divulgação dos resultados:</h4>
                                <br />
                                <h4>até 24 de agosto</h4>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <p>28 de agosto</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card
                                className={styles.timelineContent}
                                style={{ background: '#002443' }}
                                id="fase03"
                            >
                                <h3>FASE 03</h3>
                                <div className={styles.timelineInformation}>
                                    <p>
                                        A terceira fase é uma prova com
                                        questões objetivas
                                        e só poderá ser realizada sob a
                                        supervisão de um ou mais professores
                                        oficialmente designados pela COOBINDEN.
                                        A terceira fase será realizada em uma
                                        data e local a serem definidos pela
                                        COOBINDEN, preferencialmente Bibliotecas
                                        Municipais. A COOBINDEN disponibilizará
                                        as respostas das questões no site, bem
                                        como os resultados.
                                    </p>
                                </div>
                                <h4>Divulgação dos resultados:</h4>
                                <br />
                                <h4>até 14 de setembro</h4>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <p>12 de outubro</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card
                                className={styles.timelineContent}
                                style={{ background: '#01873B' }}
                                id="fase04"
                            >
                                <h3>FASE 04</h3>
                                <div className={styles.timelineInformation}>
                                    <p>
                                        O formato da quarta fase será definido
                                        pela COOBINDEN posteriormente, e
                                        informado em tempo hábil. A COOBINDEN
                                        proporcionará transporte e hospedagem
                                        aos participantes, bem como aos seus
                                        responsáveis, caso necessário.
                                    </p>
                                </div>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

                <Box className={styles.regulation}>
                    <h3>
                        <a
                            className={styles.btn}
                            target="_blank"
                            rel="noreferrer"
                            href = "https://fractalid.fractaltecnologia.com.br/signup?app_id=32&url_redirect=https%3A%2F%2Fapp.mncti.com.br%2F"
                        >
                            Inscreva-se
                        </a>
                    </h3>
                </Box>
            </Box>
        </Stack>
    )
}

export default Home
