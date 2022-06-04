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
import { useContext } from 'react'
import { LanguageContext } from '../../context/language'

const Home = props => {
    const { language } = useContext(LanguageContext)

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
                <p>Participe da 1ª edição da Olimpíada da Independência</p>
                <button className={styles.btn}>Inscreva-se agora</button>
            </Box>

            <Box className={styles.homeContent}>
                <Box className={styles.landingImage} />

                <Card className={styles.homeLandingWhatIs}>
                    <h3>
                        <span style={{ color: '#FCB805' }}>200</span> ANOS DE{' '}
                        <span style={{ color: '#01873B' }}>INDEPENDÊNCIA</span>
                    </h3>
                    <p>
                        A Olimpíada Brasileira de Inteligência Artificial
                        (Celeritas) é uma competição que tem a missão de
                        instigar a pesquisa e debate sobre inteligência
                        artificial no Brasil. É através do fomento à inovação,
                        praticidade, rapidez e força, que queremos promover a
                        reflexão acerca de como é possível transformar o mundo
                        atual, estimulando soluções criativas para os problemas
                        cotidianos.
                    </p>
                </Card>
            </Box>

            <Box className={styles.homeParticipate}>
                <div className={styles.homeParticipateCard}>
                    <h3>
                        PARA TODAS AS <br /> MENTES INOVADORAS
                    </h3>
                    <p>
                        A Celeritas é aberta ao público, incluindo alunos do
                        Ensino Fundamental, Médio e Superior e todas as mentes
                        inquietas que se interessarem pela transformação.
                    </p>
                </div>
            </Box>

            <Box style={{ background: '#f5f5f5' }}>
                <Box className={styles.timelineInitialText}>
                    <h2>JORNADA INDEPENDÊNCIA</h2>
                    <p>
                        A Olimpíada abrange quatro fases: na primeira e na
                        sefunda, uma prova objetiva sobre; na terceira, uma
                        prova com questões objetivas e discursivas; e na quarta
                        o formata será divulgado posteriormente
                    </p>
                </Box>

                <Timeline position="alternate" className={styles.timeline}>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            3 a 10 de julho
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
                            31 de julho a 7 de agosto
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
                            >
                                <h3>FASE 02</h3>
                                <div className={styles.timelineInformation}>
                                    <p>
                                        A sgunda fase será realizada de forma
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
                                <h4>até 24 de agosto</h4>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                            28 de agosto
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
                            >
                                <h3>FASE 03</h3>
                                <div className={styles.timelineInformation}>
                                    <p>
                                        A terceira fase é uma prova híbrida, com
                                        questões objetivas e discursivas
                                        diferentes para cada uma das categorias
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
                            12 de outubro
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
