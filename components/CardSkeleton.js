import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

const CardSkeleton = () => {

    const skeletonItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {skeletonItem.map((skeleton, index) => 
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ height: 380, padding: "24px" }}>
                        <Skeleton variant="rectangular" width="100%" height={200} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton width="60%" />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Box>
                    </Card>
                </Grid>
            )}
        </>
    )
}

export default CardSkeleton
