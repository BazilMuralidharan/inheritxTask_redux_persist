// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ProductCard({title, price, image}){
 
    return(
        <Card sx={{ maxWidth: 245 , height:"auto"}}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{objectFit:"contain"}}
        />
        <CardContent sx={{display:"flex", flexDirection:"column"}}>
          <Typography  variant="h6" component="div">
             {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"price"} : {price}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button variant='contained' onClick={addItem}>Add to Cart</Button> */}
          <Typography variant="h3" color="text.secondary">
             {/* <span>+</span>: {1}<span>-</span> */}
          </Typography>
          
        </CardActions>
      </Card>
    );
    
}