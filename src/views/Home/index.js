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
import pdf from './regulamento_olimpiada.pdf'
import CategoryCard from '../../components/categoriaCard'
import livro1 from './livros/livro1.png'
import livro2 from './livros/livro2.png'
import livro3 from './livros/livro3.png'
import livro4 from './livros/livro4.png'
import livro5 from './livros/livro5.png'
import livro6 from './livros/livro6.png'
import livro7 from './livros/livro7.png'
import livro8 from './livros/livro8.png'
import livro9 from './livros/livro9.png'
import livro10 from './livros/livro10.png'
import livro11 from './livros/livro11.png'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

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

                <Card className={styles.warningcard}>
                    <h2>Atenção!</h2>
                        <p>O início da segunda fase foi adiado para o dia 22 de outubro</p>
                </Card>
                
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
                        <p>Há <span>2 categorias</span> na Olimpíada: <span>Júnior</span> e <span>Sênior</span>.</p>
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
                                <h3>Fase 1</h3>
                                <p>As provas serão online e poderão ser realizadas com consulta, em computador, tablet ou aplicativo próprio.</p>
                            </Box>
                            <Box className={styles.linkFase} onClick={() => document.getElementById('fase0102').scrollIntoView({block: "center", behavior: "smooth"})}>
                                <img alt="" src="../../../Home/device.png" sx={{ m: 1.5 }} className={styles.iconCard}/>
                                <h3>Fase 2</h3>
                                <p>As provas serão online e poderão ser realizadas sem consulta, em computador, tablet ou aplicativo próprio.</p>
                            </Box>
                            <Box className={styles.linkFase} onClick={() => document.getElementById('fase03').scrollIntoView({block: "center", behavior: "smooth"})}>
                                <img alt="" src="../../../Home/online-test.png" sx={{ m: 1.5 }} className={styles.iconCard}/>
                                <h3>Fase 3</h3>
                                <p>A prova será presencial em instituição pública do município, em computador, tablet ou aplicativo, sob supervisão de professores.</p>
                            </Box>
                            <Box className={styles.linkFase} onClick={() => document.getElementById('fase04').scrollIntoView({block: "center", behavior: "smooth"})}>
                                <img alt="" src="../../../Home/congresso-nacional-do-brasil.png" sx={{ m: 1.5 }} className={styles.iconCard}/>
                                <h3>Fase 4</h3>
                                <p>Evento presencial em Brasília para premiação do melhor participante de cada categoria de cada estado, com passagens e diárias aos estudantes e seus responsáveis, se necessário.</p>
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

            <Box className={styles.bibliographycontainer} sx={{flexDirection: "column", paddingBottom:'1em'}}>
                <h1>Material de estudo</h1>
                <p>Recomendamos que os participantes utilizem os seguintes materiais 
                para estudar para a Olimpíada do Bicentenário da Independência</p>
                <Stack
                        flexWrap={'wrap'}
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        className={styles.bookscontainer}
                >
                       
                        <Box
                                
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro1}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/arquivo/sites-tematicos/200-anos-de-independencia-do-brasil/a-independencia-1/catalogos/leopoldina-imperatriz-e-maria-do-brasil'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro2}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/arquivo/sites-tematicos/200-anos-de-independencia-do-brasil/a-independencia-1/catalogos/d-joao-vi-e-a-construcao-do-brasil'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro3}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/arquivo/sites-tematicos/200-anos-de-independencia-do-brasil/a-independencia-1/catalogos/d-joao-vi-e-a-construcao-do-brasil'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro4}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/arquivo/sites-tematicos/200-anos-de-independencia-do-brasil/a-independencia-1/catalogos/revolucao-do-porto-1820'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro5}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/arquivo/sites-tematicos/200-anos-de-independencia-do-brasil/a-independencia-1/catalogos/o-brasil-nas-cortes-de-lisboa-1821'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro6}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://www2.camara.leg.br/a-camara/documentos-e-pesquisa/arquivo/sites-tematicos/200-anos-de-independencia-do-brasil/a-independencia-1/catalogos/o-movimento-da-independencia'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro7}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://livraria.camara.leg.br/a-imprensa-no-processo-de-independencia-do-brasil'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro8}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://livraria.camara.leg.br/jose-bonifacio-de-andrada-patriarca-da-nacionalidade'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro9}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://livraria.camara.leg.br/jose-bonifacio-de-andrada-patriarca-da-nacionalidade'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro10}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://livraria.camara.leg.br/o-constitucionalismo-e-o-fim-do-absolutismo-regio'
                                        )
                                    )
                                }
                        />

                        <Box
                                component="img"
                                sx={{
                                    margin: 2,
                                    cursor: 'pointer',
                                    maxWidth:'150px',
                                    maxHeight:'200px'
                    
                                }}
                                src={livro11}
                                onClick={() =>
                                    navigate(
                                        window.location.replace(
                                            'https://livraria.camara.leg.br/primeiras-eleicoes-gerais-no-brasil-1821'
                                        )
                                    )
                                }
                        />
                </Stack>
                
               

            
                
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
                            <p>1 a 10 de outubro</p>
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
                                <h4>10 de outubro</h4>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <p>20 a 27 de outubro</p>
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
                                <h4>28 de outubro</h4>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <p>9 de novembro</p>
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
                                <h4>10 de novembro</h4>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            <p>1 de dezembro</p>
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

            </Box>


            
        </Stack>
    )
}

export default Home
