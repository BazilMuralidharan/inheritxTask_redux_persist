import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import MasterCart from "./Component/MasterCart";
import ProductList from "./Component/ProductList";
import { getTheProducts } from "./Redux/productCartReducer/ProductsAsync";

function App() {
//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(getTheProducts())
// }, [])
  
  return (
    <div className="App">
      <h1>INHERITX STORE


      <MasterCart/>
      <ProductList/>
      </h1>
    </div>
  );
}

export default App;
