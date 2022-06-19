import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Stack, Card, CardContent, Container, Button } from '@mui/material';
import { fontFamily } from '@mui/system';
import responsive from './categoriacard.module.css'
const useStyles = makeStyles({
    root: {
        color: "#002443",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "clamp(5px,8vw,50px)",
    },
    root2: {
        color: "#01873B",
        fontWeight:"bold",
        fontFamily: "'Montserrat', sans-serif;",
        fontSize: "clamp(15px,2vw,80px)",
        marginTop: "2rem"
    },
    p: {
        color: "yellow",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "2rem",
    },
    button: {
        background: 'linear-gradient(45deg, #FFF 30%, #FFF 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 0.15rem 0.02rem 0.05rem rgba(255, 255, 255, .3)',
        color: 'black',
        height: 48,
        width: "50vw",
        padding: '0 0',
        margin:"0.5rem 0",
    },
    buttonText:{
        color: "#002443",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1rem",
        fontWeight:"bold"
    },
    card: {
        background: "#fff",
        padding:"1vw",
        margin:"0.5vw 0.5vw",
        height:"clamp(15px,10vh,100px)",
        width:"clamp(50px,28vw,300px)",
        boxShadow: '0 -0.3rem 0 0.05rem rgba(1, 135, 59, 1)'
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
                <Container sx={{ marginTop:"1rem",marginBottom: "5rem", display: "flex", flexDirection: "column", alignItens: "center", justifyContent: "center" }}>
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
                <Container sx={{marginBottom:"4rem"}}>
                    <Button className={classes.button}><p className={classes.buttonText}>INSCREVA-SE</p></Button>
                </Container>
            </Stack>
        </>
    );
}
export default CategoryCard;