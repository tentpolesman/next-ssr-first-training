import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import CategoryDetail from '../../../components/CategoryDetail'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import DetailSkeleton from '../../../components/DetailSkeleton';

export async function getServerSideProps(context) {
    const request = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${context.params.menu}`);
    return {
      props: {
        meals: request.data.meals[0],
      },
    }
  }

const index = ({ meals }) => {
    const router = useRouter();
    return (
        <>
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
                    <Link
                        underline="hover"
                        color="text.primary"
                    >
                        {meals.idMeal}
                    </Link>
                </Breadcrumbs>
            </Box>
            <Box sx={{ padding: "24px" }}>
                {meals ? <CategoryDetail meals={meals} /> : <DetailSkeleton />}
            </Box>
        </>
    )
}

export default index;
