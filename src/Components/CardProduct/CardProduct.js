import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardProduct = ({instrumentosData}) => {
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={instrumentosData.img}
            title="Sintetizadores"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {instrumentosData.instrumento}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {instrumentosData.voices}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {instrumentosData.precio}
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">ver descripcion</Button>
    </CardActions>
    </Card>
    );
}
export default CardProduct;