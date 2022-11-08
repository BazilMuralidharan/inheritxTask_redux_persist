import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import ModalCartPage from '../Comp_reusable/ModalCart';

export default function MasterCart(){
const [open, setOpen] = useState(false); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    const {product:{cart}} = useSelector(state=>state)
    // console.log(cart?.length)
    return(
        <div>
            <IconButton onClick={handleOpen}>
                <Badge badgeContent={cart?.length } color="primary" showZero>
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>
            <ModalCartPage  open ={open} handleOpen={handleOpen} handleClose={handleClose}/>
        </div>
    )
}