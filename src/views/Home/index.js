import styles from './home.module.css'
import { Box, Stack, Card } from '@mui/material'
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
        </Stack>
    )
}

export default Home
