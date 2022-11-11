import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Comp_reusable/ProductCard";
import { getTheProducts } from "../Redux/productCartReducer/ProductsAsync";
import styled from '@emotion/styled'
import { Button } from "@mui/material";
import { addToCart } from "../Redux/productCartReducer/ProductCartSlice";
import { useState } from "react";
import Card from '@mui/material/Card';

const ProductContainer = styled.div`


min-width: 730px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`
const ProdFlex = styled.div`

    background: aliceblue;
    min-width: 730px;
    display: flex;
    justify-content: space-between;
`
export default function ProductList(){
  const dispatch = useDispatch()
  const {product:{products, cart}} = useSelector(state=>state)

  const [count, setCount] = useState(0)


  useEffect(()=>{
        dispatch(getTheProducts())
  }, [dispatch])


  const addItem=(product)=>{
    
    dispatch(addToCart(product))
  }
  const increement=()=>{
    setCount(prev=>prev+1)
  }
  const decreement=()=>{
    setCount(prev=>prev-1)
  }
    return(
        <ProductContainer>

            {products?.map((el,i)=>
              
            (
                    <div 
                      sx={{
                         maxWidth: 345 , 
                         height:"auto", 
                         
                         display:"flex", 
                         flexDirection:"column", 
                         justifyContent:"space-between", 
                         padding:"0px"}} 
                         key={i}
                    >
                    <ProductCard 
                        title={el.title}
                        price={el.price}
                        image ={el.image}
                        rating = {el.rating}
                        data = {el}
                    />
                   </div>
                
            ))}
        </ProductContainer>
    )
}