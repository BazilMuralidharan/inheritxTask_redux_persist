import {createSlice} from '@reduxjs/toolkit';
import { getTheProducts } from './ProductsAsync';

const metaState ={
    products:[],
    cart:[],
    loading:false,
    error:false
}

const ProductCarSlicer = createSlice({
    name:'productCart',
    initialState:metaState,
    reducers:{
        addToCart:(state, action)=>{
            state.cart.push(action.payload)
        },
        removeItemFromCart:(state,action)=>{
            let findItem= state.cart.findIndex(el=>el.id===action.payload)
            state.cart.splice(findItem,1)
        }
    },
    extraReducers(builder){
        builder
        .addCase(getTheProducts.fulfilled, (state, action)=>{
            state.products=action.payload
            state.loading= false
        }).addCase(getTheProducts.pending, (state, action)=>{
            state.loading= true
        }).addCase(getTheProducts.rejected, (state, action)=>{
            
            state.error= true;
        })

    }
    
})

export const {addToCart, removeItemFromCart} = ProductCarSlicer.actions
export default ProductCarSlicer.reducer