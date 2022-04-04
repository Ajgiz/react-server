import React from 'react'
export const Test=(props)=>{
    return(
        <div>
            <h1>hello world</h1>
        {props.test.map(i=>{
         return  <p style={{color:"red"}}>{i}</p>
        })}
     
        </div>
    )
}