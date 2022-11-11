import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, editQtyinCheckoutCart } from "../Redux/productCartReducer/ProductCartSlice";
import { useEffect } from "react";
import { useState } from "react";
import { display } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalCartPage({ open, handleOpen, handleClose }) {
  const dispatch = useDispatch();
  const {
    product: {products, cart, discount },
  } = useSelector((state) => state);

  const increaseItemQuantityCart=(items)=>{
    let increasedCount = {...items, count: items.count + 1}
    // console.log('+++',increasedCount);
    if(increasedCount?.rating?.count< increasedCount?.count ){
      alert('ITEM OUT OF STOCK ')
      increasedCount =  {...items, count: items.count}
    }
    let discountPriceForItem; 
    let discount = Math.round((increasedCount?.count/increasedCount?.rating?.count)*100)
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
    let countIncrWithDiscount = {...increasedCount, discountPriceForItem}
    dispatch(editQtyinCheckoutCart(countIncrWithDiscount))
  }
  const decreaseItemQuantityCart=(items)=>{
    let decreasedCount = {...items, count: items?.count - 1}
    if(decreasedCount?.count < 1){
      // decreasedCount =  {...items, count: items.count-1}
      if(window.confirm('Do you want to reove this Item ?..🤨')){
        dispatch(removeItemFromCart(items.id))
      }else{
        decreasedCount = {...items, count: items?.count+1}
        return  decreasedCount; 
      }
    }else{
      let discountPriceForItem; 
      let discount = Math.round((decreasedCount?.count/decreasedCount?.rating?.count)*100)
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
      let countDecrWithDiscount = {...decreasedCount, discountPriceForItem}
      dispatch(editQtyinCheckoutCart(countDecrWithDiscount))
    }
    
  }
  
  const removeElement = (itemID) => {
    dispatch(removeItemFromCart(itemID))
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {cart?.length > 0 ? (
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {"PRODUCTS"}
            </Typography>
            {cart?.map((el, i) => (
              <div
                key={i}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                  <div style={{display:"flex"}}>
                    <div>
                      <img src={el.image} width={40} />
                    </div>
                    <div style={{display:"flex"}}>
                      <span>
                         {el.title} <br/>
                          
                           <span>
                           
                            <Button variant="outlined" sx={{borderRadius:"100px"}}
                              onClick={()=>increaseItemQuantityCart(el)}
                            
                            >+</Button>
                              <span style={{padding:"10px"}}>{el.count}</span>
                            <Button variant="outlined" sx={{borderRadius:"100px"}}
                              onClick={()=>decreaseItemQuantityCart(el)}
                            
                            >-</Button>
                          </span> 
                          QTY:{el.count} <br/>
                          <span style={{color:"blue", fontWeight:"bolder"}}>
                            Discount :  {(el?.discountPriceForItem)}%👻
                          </span>
                          
                          <span style={{marginLeft:"20px"}}>
                            PRICE :  {el.price} * {el.count}  = ${el.price * el.count}
                          </span>
                          
                      </span>

                    </div>
                  </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>${el.price * el.count }</div>
                  <IconButton onClick={() => removeElement(el.id)}>
                    <CancelIcon />
                  </IconButton>
                </div>
              </div>
            ))}
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h2"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{"TOTAL"} 
              </span>
              <span>
                $
                {cart
                  ?.map((el) => el.price)
                  ?.reduce((acc, cur) => acc + cur, 0)?.toFixed(2)}
                  😒
              </span>
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="p"
            >
              Total discount in your Item: 
              {cart
                  ?.map((el) => el?.discountPriceForItem)
                  ?.reduce((acc, cur) => acc + cur, 0)
                }% 
            </Typography>

            <span>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="p"
              >

              Amount to be paid after Discount :    😎 
            {
            (cart
              ?.map((el) => el?.price)
              ?.reduce((acc, cur) => acc + cur, 0)?.toFixed(2))-           
            parseFloat(cart
                  ?.map((el) => el?.discountPriceForItem)
                  ?.reduce((acc, cur) => acc + cur, 0)
                )/100  } $ only ... 😎

            </Typography>

            </span>
          </Box> 
        ) : (
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              variant="h6"
              component="h2"
              sx={{ display: "flex", justifyContent: "center" }}
            >NO ITEM IN THIS CART</Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
}
