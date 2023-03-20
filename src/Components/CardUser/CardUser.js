import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardUser = ({img, modelo, precio, backgroundColor}) => {
    return (
    <Card sx={{ maxWidth: 345 , background: backgroundColor}}>
        <CardMedia
            sx={{ height: 140 }}
            image={img}
            title="green iguana"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {modelo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {precio}
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">ver descripcion</Button>
    </CardActions>
    </Card>
    );
}
export default CardUser;