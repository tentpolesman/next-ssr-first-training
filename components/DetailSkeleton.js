import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const DetailSkeleton = () => {
    return (
        <Card sx={{ height: 450, display: "flex" }}>
            <Box sx={{ flex: "0 0 30%" }}>
                <CardContent>
                    <Skeleton variant="rectangular" width="100%" height={320} />
                </CardContent>
            </Box>
            <Box sx={{ pt: 0.5, flex: "0 0 70%" }}>
                <CardContent>
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </CardContent>
            </Box>
        </Card>
    )
}

export default DetailSkeleton
