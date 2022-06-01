import styles from './aboutus.module.css'
import { Box, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { LanguageContext } from '../../context/language'
import BasicModal from '../../components/modal/index.js'


const AboutUs = (props) => {
    const { language } = useContext(LanguageContext)
    const profileList = [
        {title: "Mickey Mouse", subtitle:"Disney character", description:"Hi, i'm mickey mouse!", urlImage: "url(./Home/mickey_mouse.jpg)"}
    ]
    const profileModal = () => {
        return profileList.map(p => (
            <BasicModal 
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
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
            <Box style={{ backgroundColor: "#ddd" }} className={styles.homeLandingContainer}>
                <Stack direction="column" justifyContent="center">
                    <Typography variant="h3" bgcolor={'pink'} sx={{ mb: 10 }} >
                        Nossos Fundadores
                    </Typography>
                    <Stack direction="row" justifyContent="center">
                        {profileModal()}
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

export default AboutUs;