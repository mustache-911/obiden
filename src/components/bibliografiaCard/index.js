import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Box,
    Stack,
    Card,
} from '@mui/material'
import responsive from './categoriacard.module.css'
import livro1 from '../../views/Home/livros/livro1.png'
import livro13 from '../../views/Home/livros/livro13.png'
import livro12 from '../../views/Home/livros/livro12.png'
import { useNavigate } from 'react-router-dom';
import livro9 from '../../views/Home/livros/livro9.png'


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
})
const CategoryCard = () => {
    const classes = useStyles()
    const categorias = [
        {
            nome: 'Júnior',
            texto: livro1
        },   
        {
            nome: 'Sênior',
            texto: 'Categoria destinada a estudantes nascidos entre de 1o de janeiro de 2004, inclusive, e 31 de dezembro de 2007, inclusive, desde que não estejam matriculados em algum curso superior (Ensino Médio e Ensino Técnico).'
        }
    ]

    const navigate = useNavigate();

    return (
            <Stack>

                <div className={responsive.Stack}>
                    <Card
                        className={`${responsive.Card}`}
                        sx={{
                            minHeight: 'clamp(80px,33vw,320px)',
                            maxWidth: '90vw',
                            backgrouColor: '#F2F2F2',
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem'
                        }}
                    >
                        <h3 className={classes.root}>{categorias[0].nome}</h3>
                    

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
                    </Card>
                    <Card
                        className={responsive.Card}
                        sx={{
                            minHeight: 'clamp(80px,33vw,320px)',
                            maxWidth: '90vw',
                            backgrouColor: '#F2F2F2',
                            padding: '1rem 2rem',
                            borderRadius: '0.5rem'
                        }}
                    >
                        <h3 className={classes.root}>{categorias[1].nome}</h3>
                        <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        >
                           
                           <Box
                                    component="img"
                                    sx={{
                                        margin: 2,
                                        cursor: 'pointer',
                                        maxWidth:'150px',
                                        maxHeight:'200px'
                        
                                    }}
                                    src={livro13}
                                    onClick={() =>
                                        navigate(
                                            window.location.replace(
                                                'https://livraria.camara.leg.br/d-leopoldina-imperatriz-e-maria-do-brasil-3ed?search=menck'
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
                                    src={livro12}
                                    onClick={() =>
                                        navigate(
                                            window.location.replace(
                                                'https://livraria.camara.leg.br/d-pedro-i-entre-o-voluntarismo-e-o-constitucionalismo-2-volumes?search=Pedro%20I'
                                            )
                                        )
                                    }
                            />
                        </Stack>
     
                    </Card>
               
                </div>
                {/* <Container sx={{ marginBottom: "4rem" }}>
                    <Button className={responsive.Button}><p className={classes.buttonText}>INSCREVA-SE</p></Button>
                </Container> */}
            </Stack>
    )
}
export default CategoryCard
