import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function Counter(){
    const [count , setCount] = useState(1)

    
    return(
        <div>
            <Button>+</Button>
            <span>{count}</span>
            <Button>-</Button>
        </div>
    
    )
}