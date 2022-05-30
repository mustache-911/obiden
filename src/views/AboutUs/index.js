import styles from './aboutus.module.css'
import { Box, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import { LanguageContext } from '../../context/language'


const AboutUs = (props) => {
    const { language } = useContext(LanguageContext)

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
        </Stack>
    )
}

export default AboutUs;