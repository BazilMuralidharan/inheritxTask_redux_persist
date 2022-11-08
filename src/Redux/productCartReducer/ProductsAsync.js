import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit'

export const getTheProducts = createAsyncThunk('fetchPoducts', 
    async()=>{
    try{
        const {data} = await axios.get(`https://fakestoreapi.com/products`)
        return data; 

    }catch(err){
        return err.message
    }
 }) 