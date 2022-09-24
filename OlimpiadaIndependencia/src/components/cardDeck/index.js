import * as React from 'react';
import { useContext } from 'react';
import { ColorContext } from '../../context/color';
import Typography from '@mui/material/Typography';
import { Stack, Container} from '@mui/material';
import MultiActionAreaCard from '../card'
import SelectLabels from '../select'

export default function CardDeck({ titles, texts, buttons, filterBy, orderBy, setFilterBy, setOrderBy, filtersBy, ordersBy }) {
    const { lightColor, mainColor } = useContext(ColorContext)

    return (
        <Container maxWidth="mx1">
            <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ backgroundColor: mainColor, color: 'white', boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;", py: 1, px: 2 }}>
                    <Typography variant="h4">
                        Cases
                    </Typography>   
                    <Stack direction="row" alignItems="center">
                        <SelectLabels value={filterBy} onChange={setFilterBy} possibleValues={filtersBy} name={"Filter by"}/>
                        <SelectLabels value={orderBy} onChange={setOrderBy} possibleValues={ordersBy} name={"Order by"} />
                    </Stack>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" sx={{ flexWrap: "wrap", backgroundColor: lightColor, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
                    {titles.map((title, index) => {
                        return <MultiActionAreaCard key={index} title={title} text={texts[index]} buttons={buttons[index]} />
                    })}
                </Stack>
            </Stack>
        </Container>
    );
}
