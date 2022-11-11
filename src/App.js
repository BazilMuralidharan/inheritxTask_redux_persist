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
      <div style={{display:"flex", justifyContent:"center", marginTop:"15px"}}>
      < h1>INHERITX STORE
      </h1>
      <MasterCart/>

      </div>


      <ProductList/>
    </div>
  );
}

export default App;
