import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import axios from 'axios';
import CategoryDetailCard from '../../components/CategoryDetailCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardSkeleton from '../../components/CardSkeleton'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export async function getServerSideProps(context) {
  const request = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${context.params.category}`);
  return {
    props: {
      categories: request.data.meals,
    },
  }
}

const Category = ({ categories }) => {
  const router = useRouter();
  return (
      <>
        <Head>
          <title>{router.query.category} Category</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Box sx={{ padding: "24px 24px 0 24px" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              aria-current="page"
            >
              {router.query.category} Category
            </Link>
          </Breadcrumbs>
        </Box>
        <Box sx={{ padding: "24px" }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {categories ? categories.map((category, index) => <CategoryDetailCard category={category} key={index} />) : <CardSkeleton/> }
          </Grid>
        </Box>
      </>
  )
}

export default Category;
