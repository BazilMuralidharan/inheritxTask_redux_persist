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

import React, {memo, useMemo} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InventoryIcon from '@mui/icons-material/Inventory';
import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CounterHoc from './HOC/CounterHoc';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart, editProductCartQuantity } from '../Redux/productCartReducer/ProductCartSlice';


const ProductCard= ({title, price, image, rating, data,  count, increement, decreement})=>{

  const {product:{cart, dummy }} = useSelector(state=>state)
  const dispactch = useDispatch()
  // console.log(dummy)
  const itemAdd =()=>{
    let discountPriceForItem; 
    let discount = Math.round((count/rating?.count)*100)
        if(discount>=90){
          discountPriceForItem = 20
        }
        else if((discount>=50)&&(discount<90)){
            discountPriceForItem = 10
        }
        else
        {
          discountPriceForItem = 5
        }
        let cartItem = { ...data , count, discountPriceForItem}
        // console.log(cartItem)
        dispactch(addToCart(cartItem))

        let qtyDecrement = { ...data,  rating:{...data.rating, count: data.rating.count - count}}
        // console.log('>>>>>>>>>>>>>>>>>>>',qtyDecrement)
        dispactch(editProductCartQuantity(qtyDecrement))
  }
  
  return(
        <Card 
          sx={{ 
            width: "290px" , 
            height:"560px", 
            paddingBottom:"20px" ,
            display:"flex", 
            flexDirection:"column", justifyContent:"space-between",
            marginTop:"30px"
            }}>
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

          
          <Rating name="read-only" value={rating?.rate} readOnly />
          <Typography variant="body4" color="text.secondary" component={"h2"}>
            {"Item in Stocks"} : {rating?.count}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button variant='contained' onClick={addItem}>Add to Cart</Button> */}

          <div style={{display:"flex", flexDirection:"column", width:"100%", alignItems:"center"}}>
          <Typography  variant="body3" color="text.secondary">
             <Button variant="outlined" onClick={()=>increement()}>+</Button> {count}<Button variant='outlined' onClick={()=>decreement()}>-</Button>
          </Typography>
          <Button variant='contained' onClick={itemAdd}>Add to Cart</Button>
          </div>
        </CardActions>
      </Card>
    );
    
}

export default    CounterHoc(ProductCard); 
