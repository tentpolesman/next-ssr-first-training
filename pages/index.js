import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head'
import CategoryCard from '../components/CategoryCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardSkeleton from '../components/CardSkeleton'

export async function getServerSideProps() {
  const request = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  return {
    props: {
      categories: request.data.categories,
    },
  }
}

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box sx={{ padding: "24px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          { categories ? categories.map((category, index) => <CategoryCard category={category} key={index} />) : <CardSkeleton/> }
        </Grid>
      </Box>
    </>
  )
}
