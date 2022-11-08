import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../Redux/productCartReducer/ProductCartSlice";
import { useEffect } from "react";
import { useState } from "react";
import { display } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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



  const [stateCart, setStateCart] = useState([]);
  // console.log("modalCart", cart);
  // console.log("modalProductCart>>>>>>>>>>>>>>>>>");

  // console.log(cart?.map(el=>el.price)?.reduce((acc,cur)=>acc+cur, 0))
  ///count logic
  // let count = {};
  // cart.forEach(function(el) {
  //     count[el.title] = (count[el.title]||0) + 1;

  // });
  // console.log('count',count)
  // console.log(Object.keys(count))
  // let x = Object.assign({},l )

  const removeElement = (itemID) => dispatch(removeItemFromCart(itemID));
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
                <img src={el.image} width={40} />

                <div>{el.title}</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{}}>${el.price}</div>
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
              <span>{"TOTAL"}</span>
              <span>
                $
                {cart
                  ?.map((el) => el.price)
                  ?.reduce((acc, cur) => acc + cur, 0)?.toFixed(2)}
              </span>
            </Typography>
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
