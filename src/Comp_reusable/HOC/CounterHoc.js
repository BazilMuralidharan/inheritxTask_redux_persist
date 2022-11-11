import { useEffect, useState } from "react"

export default function CounterHoc(OriginalComponent){
    return function NewComponent(props){
        const [count, setCount] = useState(1);

        // console.log(props?.rating?.count)

        useEffect(()=>{
            if(count<1){
                setCount(1)
            }
        },[count])
        const increement = ()=> setCount(prev=>prev+1)
        const decreement = ()=> setCount(prev=>prev-1)
        return (<OriginalComponent count ={count} increement={increement}  decreement={decreement} {...props}/>)
    }
} 