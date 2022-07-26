import styles from './cases.module.css'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import CardDeck from '../../components/cardDeck'


const Cases = (props) => {
    const [filterBy, setFilterBy] = useState("")
    const [orderBy, setOrderBy] = useState("")
    const filtersBy = ["Active"]
    const ordersBy = ["Most recent", "Less recent", "Relevance", "Bigger reward"]
    const texts = ['texto1', 'texto2', 'texto3', 'texto4', 'texto5', 'texto6', 'texto4', 'texto5', 'texto6']
    const titles = ['title1', 'title2', 'title3', 'title4', 'title5', 'title6', 'title4', 'title5', 'title6']
    const buttons = [['button1'], ['button2'], ['button3'], ['button4'], ['button5'], ['button6'], ['button4'], ['button5'], ['button6']]

    return (
        <Stack   
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
        >
            <Box style={{ backgroundImage: "url(/Home/landing_page.svg)" }} className={styles.casesLandingContainer}>
                <Stack direction="column" justifyContent="center">
                    <CardDeck texts={texts} titles={titles} buttons={buttons} 
                        filterBy={filterBy} setFilterBy={setFilterBy} 
                        orderBy={orderBy} setOrderBy={setOrderBy}
                        filtersBy={filtersBy} ordersBy={ordersBy}/>
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

export default Cases;