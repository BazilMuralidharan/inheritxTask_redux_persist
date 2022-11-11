
import {createSlice} from '@reduxjs/toolkit';
import { getTheProducts } from './ProductsAsync';

const metaState ={
    products:[],
    cart:[],
    loading:false,
    error:false,
    productSafeCopy :[]
}

const ProductCarSlicer = createSlice({
    name:'productCart',
    initialState:metaState,
    reducers:{
        addToCart:(state, action)=>{
            if(state.cart.find(el=>el.id === action.payload.id)){
                let index = state.cart.findIndex(el=>el.id === action.payload.id)
                state.cart.splice(index, 1, action.payload)
            }
            else{
                state.cart.push(action.payload)
            }
        },
        editQtyinCheckoutCart:(state, action)=>{
                let index = state.cart.findIndex(el=>el.id === action.payload.id)
                state.cart.splice(index, 1, action.payload)
        },
        removeItemFromCart:(state,action)=>{
            let findItem= state.cart.findIndex(el=>el.id===action.payload)
            state.cart.splice(findItem,1)
        },
        editProductCartQuantity:(state, action)=>{
            let index = state.products.findIndex(el=>el.id === action.payload.id)
             state.products.splice(index, 1, action.payload)
        },

    },
    extraReducers(builder){
        builder
        .addCase(getTheProducts.fulfilled, (state, action)=>{
            state.products=action.payload
            state.productSafeCopy = action.payload
            state.loading= false
        }).addCase(getTheProducts.pending, (state, action)=>{
            state.loading= true
        }).addCase(getTheProducts.rejected, (state, action)=>{
            
            state.error= true;
        })

    }
    
})

export const {addToCart,editProductCartQuantity ,removeItemFromCart, editQtyinCheckoutCart} = ProductCarSlicer.actions
export default ProductCarSlicer.reducer