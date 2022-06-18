import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import { Typography, Stack, Card, CardContent, Container } from '@mui/material';
const CategoryCard = () => {
    const categorias = [
        {
            nome: "junior",
            texto: "lorem"
        },
        {
            nome: "categoria2",
            texto: "texto2"
        },
        {
            nome: "categoria3",
            texto: "texto3"
        }
    ]
    return (
        <>
        <Stack direction="row" justifyContent="flex-start" sx={{ flexWrap: "wrap", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
            {categorias.map((categoria, index)=>{
              return(  <Card sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography>
                            {categoria.texto},{categoria.nome}
                        </Typography>
                    </CardContent>
                </Card>)
            })}
        </Stack>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
export default CategoryCard;