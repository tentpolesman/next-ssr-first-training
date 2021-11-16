import React from 'react'

import Head from 'next/head'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CategoryDetail = (props) => {
    const meals = props.meals;
    const theme = useTheme();
    console.log(meals);
    return (
        <>
        <Head>
            <title>{meals.strMeal}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Card sx={{ display: 'flex', flexDirection: "row", flexWrap: "wrap" }}>
            <Box sx={{ flex: "0 0 30%" }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%" }}
                        image={meals.strMealThumb}
                        alt="Live from space album cover"
                    />
                </CardContent>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: "0 0 70%" }}>
                <CardContent sx={{ flex: '1 1 auto' }}>
                    <Typography component="div" variant="h5">
                        {meals.strMeal}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {meals.strInstructions}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
        </>
    )
}

export default CategoryDetail;
