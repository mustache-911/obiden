import React from 'react'
import planilhaprofessor from './OBINDEN_3a_fase_locais_de_prova.xlsx'
import planilhaaluno from './OBINDEN_3a_fase_alunos.xlsx'
import { makeStyles } from '@material-ui/styles'
import {
    Stack,
    Card
} from '@mui/material'
import responsive from './avisocard.module.css'
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
            nome: 'Estudante',
            texto: 'Estudante, vejam aqui seu local de prova, amanhã, sexta-feira, 9h. Leve seu celular para a prova.'
        },   
        {
            nome: 'Professor',
            texto: 'Professor do polo de aplicação de prova, veja aqui aqui a relação dos estudantes que farão a prova na sua escola.'
        }
    ]
    return (
        <>
            <Stack>
     
                <div className={responsive.Stack}>
                    <Card
                        className={`${responsive.Card}`}
                        sx={{
                            minHeight: 'clamp(80px,33vw,320px)',
                            maxWidth: '90vw',
                            margin: '2rem',
                            backgrouColor: '#F2F2F2',
                            padding: '1rem 2rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <h3 className={classes.root}>{categorias[0].nome}</h3>

                        <button className={responsive.btn}>
                            <a href= {planilhaaluno} >Acesse a planilha </a>
                        </button>  
                        
                        <p
               
                            sx={{
                                marginTop: '3rem',
                                marginBottom: '3rem',
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
                            margin: '2rem',
                            backgrouColor: '#F2F2F2',
                            padding: '1rem 2rem',
                            borderRadius: '1rem'
                        }}
                    >
                        
                        <h3 className={classes.root}>{categorias[1].nome}</h3>

                        <button className={responsive.btn}>
                            <a href= {planilhaprofessor} >Acesse a planilha </a>
                        </button>  
                        <p
                    
                            sx={{
                                marginTop: '3rem',
                                marginBottom: '3rem',
                                marginX: '2rem 0rem',
                                width: '20rem',
                                wordWrap: 'break-word'
                            }}
                        >
                            {categorias[1].texto}
                        </p>
                        
                       
                    </Card>
               
                </div>

            </Stack>
        </>
    )
}
export default CategoryCard
