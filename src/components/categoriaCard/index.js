import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Stack,
    Card,
    Container,
} from '@mui/material'
import responsive from './categoriacard.module.css'
const useStyles = makeStyles({
    root: {
        color: '#002443',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 'clamp(25px,4vw,50px)'
    },
    root2: {
        color: '#212121',
        fontWeight: '-moz-initial',
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: 'clamp(13px,3.5vw,15px)',
        marginTop: '2rem'
    },
    p: {
        color: '#FCB805',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '2rem'
    },
    // button: {
    //     background: 'linear-gradient(45deg, #FFF 30%, #FFF 90%)',
    //     border: 0,
    //     borderRadius: 3,
    //     boxShadow: '0 0.15rem 0.02rem 0.05rem rgba(255, 255, 255, .3)',
    //     color: 'black',
    //     height: 48,
    //     width: "50vw",
    //     padding: '0 0',
    //     margin: "0.5rem 0",
    //     borderRadius:"5rem",
    //     width:"10vw",
    //     height:"10vh",
    //     opacity:"0.6"
    // },
    buttonText: {
        color: '#002443',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },
    card: {
        boxShadow: '0 -0.3rem 0 0.05rem rgba(1, 135, 59, 1)'
    }
})
const CategoryCard = () => {
    const classes = useStyles()
    const categorias = [
        {
            nome: 'Júnior',
            texto: 'Categoria destinada a estudantes nascidos depois de 1º de janeiro de 2008, inclusive. Salientamos que as questões serão elaboradas para estudantes acima de 11 anos. Entretanto está facultado o direito, aos estudantes mais novos, de participar desta categoria.'
        },   
        {
            nome: 'Sênior',
            texto: 'Categoria destinada a estudantes nascidos entre de 31 de dezembro de 2007, inclusive, e 1o de janeiro de 2004, inclusive, desde que não estejam matriculados em algum curso superior.'
        }
    ]
    return (
        <>
            <Stack>
                <Container
                    sx={{
                        marginTop: '1rem',
                        marginBottom: '5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItens: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <h1>
                        QUEM PODE PARTICIPAR?
                        <br />
                        <br />
                    </h1>
                    <p className={classes.p}>
                        A Olimpíada da Independência será dividida em duas
                        categorias
                    </p>
                </Container>
                <div className={responsive.Stack}>
                    <Card
                        className={`${responsive.Card}`}
                        sx={{
                            minHeight: 'clamp(80px,33vw,320px)',
                            maxWidth: '90vw',
                            margin: '1rem',
                            backgrouColor: '#F2F2F2',
                            padding: '1rem 2rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <h3 className={classes.root}>{categorias[0].nome}</h3>
                        <p
                            className={classes.root2}
                            sx={{
                                marginTop: '6rem',
                                marginBottom: '2rem',
                                marginX: '2rem 0rem',
                                width: '25rem',
                            }}
                        >
                            {categorias[0].texto}
                        </p>
                    </Card>
                    <Card
                        className={responsive.Card}
                        sx={{
                            minHeight: 'clamp(80px,33vw,320px)',
                            maxWidth: '90vw',
                            margin: '1rem',
                            backgrouColor: '#F2F2F2',
                            padding: '1rem 2rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <h3 className={classes.root}>{categorias[1].nome}</h3>
                        <p
                            className={classes.root2}
                            sx={{
                                marginTop: '6rem',
                                marginBottom: '2rem',
                                marginX: '2rem 0rem',
                                width: '20rem',
                                wordWrap: 'break-word'
                            }}
                        >
                            {categorias[1].texto}
                        </p>
                    </Card>
               
                </div>
                {/* <Container sx={{ marginBottom: "4rem" }}>
                    <Button className={responsive.Button}><p className={classes.buttonText}>INSCREVA-SE</p></Button>
                </Container> */}
            </Stack>
        </>
    )
}
export default CategoryCard
