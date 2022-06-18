import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Stack, Card, CardContent, Container, Button } from '@mui/material';
import { fontFamily } from '@mui/system';
import responsive from './categoriacard.module.css'
const useStyles = makeStyles({
    root: {
        color: "blue",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "3rem",
        width: "20rem"
    },
    root2: {
        color: "green",
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: "1.5rem",
        width: "20rem",
        marginTop: "4rem"
    },
    p: {
        color: "yellow",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "2rem",
        paddingTop:"5rem"
    },
    button: {
        background: 'linear-gradient(45deg, #F2F2F2 30%, #B2B2B2 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0.15rem 0.02rem 0.05rem rgba(255, 255, 255, .3)',
        color: 'black',
        height: 48,
        width: "50vw",
        padding: '0 0'
    },
    card: {
        background: 'linear-gradient(45deg, #F2F2F2 30%, #B2B2B2 90%)'
    }
})
const CategoryCard = () => {
    const classes = useStyles()
    const categorias = [
        {
            nome: "Júnior",
            texto: "Categoria destinada aos alunos do 8o e 9o anos do Ensino Fundamental"
        },
        {
            nome: "Livre",
            texto: "Categoria destinada a qualquer pessoa,sendo independente de idade e formação academica"
        },
        {
            nome: "Senior",
            texto: "Categoria destinada aos alunos do ensino médio"
        }
    ]
    return (
        <>
            <Stack>
                <Container sx={{ marginBottom: "5rem", display: "flex", flexDirection: "column", alignItens: "center", justifyContent: "center" }}>
                    <h1>QUEM PODE PARTICIPAR?</h1>
                    <p className={classes.p}>A olimpiada da independência sera dividida em tres categorias</p>
                </Container>
                <Stack direction="row" className={responsive.Stack}>
                    <Card className={classes.card} sx={{ minHeight: "20rem", maxWidth: "33vw", margin: "1rem", backgrouColor: "#F2F2F2", padding: "1rem 2rem", borderRadius: "1rem" }}>
                        <h3 className={classes.root} >{categorias[0].nome}</h3>
                        <p className={classes.root2} sx={{ marginTop: "6rem", marginBottom: "2rem", marginX: "2rem 0rem", width: "20rem" }}>{categorias[0].texto}</p>
                    </Card>
                    <Card className={classes.card} sx={{ minHeight: "20rem", maxWidth: "33vw", margin: "1rem", backgrouColor: "#F2F2F2", padding: "1rem 2rem", borderRadius: "1rem" }}>
                        <h3 className={classes.root} >{categorias[1].nome}</h3>
                        <p className={classes.root2} sx={{ marginTop: "6rem", marginBottom: "2rem", marginX: "2rem 0rem", width: "20rem" }}>{categorias[1].texto}</p>
                    </Card>
                    <Card className={classes.card} sx={{ minHeight: "20rem", maxWidth: "33vw", margin: "1rem", backgrouColor: "#F2F2F2", padding: "1rem 2rem", borderRadius: "1rem" }}>
                        <h3 className={classes.root} >{categorias[2].nome}</h3>
                        <p className={classes.root2} sx={{ marginTop: "6rem", marginBottom: "2rem", marginX: "2rem 0rem", width: "20rem" }}>{categorias[2].texto}</p>
                    </Card>
                </Stack>
                <Container>
                    <Button className={classes.button}><p>INSCREVA-SE</p></Button>
                </Container>
            </Stack>
        </>
    );
}
export default CategoryCard;