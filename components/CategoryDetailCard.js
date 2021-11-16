import * as React from 'react';
import Link from 'next/link'
import Grid from '@mui/material/Grid';

import { useRouter } from 'next/router'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CategoryDetailCard = (props) => {
    const router = useRouter();
    const category = props.category;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ height: 550 }}>
                <CardMedia
                    component="img"
                    image={category.strMealThumb}
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category.strMeal.length > 50 ? (category.strMeal.substring(0, 50) + "...") : category.strMeal}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/[category]/[menu]" as={`/${router.asPath}/${category.idMeal}`}>
                        <Button size="small">
                            Detail
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CategoryDetailCard;
