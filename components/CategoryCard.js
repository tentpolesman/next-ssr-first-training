import * as React from 'react';
import Link from 'next/link'
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CategoryCard = (props) => {
    const category = props.category;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ height: 450 }}>
                <CardMedia
                    component="img"
                    image={category.strCategoryThumb}
                    alt="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category.strCategory}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category.strCategoryDescription.length > 200 ? (category.strCategoryDescription.substring(0, 200) + "...") : category.strCategoryDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/[category]" as={`/${category.strCategory}`}>
                        <Button size="small">Detail</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CategoryCard;
