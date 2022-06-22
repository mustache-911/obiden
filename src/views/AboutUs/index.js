import styles from './aboutus.module.css'
import { Box, Stack, Typography } from '@mui/material'
import BasicModal from '../../components/modal/index.js'


const AboutUs = (props) => {
    const profileList = [
        {title: "Miley Cyrus", subtitle:"Cantora, compositora e atriz norte-americana.", description:"Miley Ray Cyrus é uma cantora, compositora e atriz norte-americana. Tornou-se mundialmente popular por interpretar Miley Stewart/Hannah Montana na famosa série do Disney Channel Hannah Montana. Em 2008, Miley foi eleita pela revista americana Time como uma das 100 famosas mais bem pagas do mundo.", urlImage: "url(./Home/mickey_mouse.jpg)"},
        {title: "Prince William", subtitle:"KAREN GREENFIELD SENIOR VICE PRESIDENT, BUSINESS OPERATIONS, AND DIVERSITY & INCLUSION COUNCIL CHAIR, NATIONAL GEOGRAPHIC PARTNERS", description:"Hi, i'm Minnie Mouse!", urlImage: "url(./Home/minnie_mouse.png)"},
        {title: "Elon Musk", subtitle:"Disney character", description:"Musk demonstrou publicamente preocupações com a extinção humana[4] e também propôs soluções, das quais algumas são o objetivo principal de suas empresas e já estão sendo feitas na prática. Entre elas, a redução do aquecimento global, através do uso de energias renováveis, um projeto multiplanetário, mais especificamente a colonização de Marte,[5] e o desenvolvimento seguro da inteligência artificial. Em janeiro de 2011, uma de suas empresas, a SpaceX, tornou-se a primeira empresa no mundo a vender um voo comercial à Lua. A missão, marcada para 2013, foi contratada pela empresa Astrobotic Technology, tendo como objectivo colocar um pequeno jipe na superfície lunar, o que não aconteceu. Em 2012, encerrou o projeto do Tesla Roadster, o primeiro modelo da sua autoria, um carro totalmente elétrico que custava cerca de 92 mil dólares. A Tesla já lançou quatro modelos: S, Y, X e o Modelo 3, este último com a responsabilidade de trazer os carros elétricos para as massas, partindo de um custo inicial de 35 mil dólares.[6] Em 25 de abril de 2022, ele também concordou em comprar o Twitter por 44 bilhões de dólares.[7]", urlImage: "url(./Home/donald_duck.jpg)"},
        {title: "Elon Musk", subtitle:"Disney character", description:"Hi, i'm Donald Duck!", urlImage: "url(./Home/donald_duck.jpg)"},
        {title: "Elon Musk", subtitle:"Disney character", description:"Hi, i'm Donald Duck!", urlImage: "url(./Home/donald_duck.jpg)"}
    ]
    const profileModal = () => {
        return profileList.map(p => (
            <BasicModal 
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
                urlImage={p.urlImage}
            />
        ))
    }

    return (
        <Stack   
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
        >
            <Box style={{ backgroundImage: "url(/Home/landing_page.svg)" }} className={styles.homeLandingContainer}>
                <Stack direction="column" justifyContent="center">
                    <Typography variant="h1">
                        Welcome to Diagnosis
                    </Typography>
                    <Typography variant="h3">
                        Share your cases
                    </Typography>
                </Stack>
            </Box>
            <Box style={{ backgroundImage: "url(/Home/home_second_image.svg)" }} className={styles.homeLandingContainer}>
                <Stack direction="column" justifyContent="center">
                    <Typography variant="h1">
                        Teste
                    </Typography>
                </Stack>
            </Box>
            <Box className={styles.foundersContainer} >
                <Stack direction="column" justifyContent="center" sx={{width: 1, margin: 5}}>
                    <Typography variant="h2" className={styles.text} sx={{mb: 5}} >
                        Nossos Fundadores
                    </Typography>
                    <Box className={styles.flex}>
                        {profileModal()}
                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}

export default AboutUs;