import React from 'react'
import './pages-styles.css';
import { Widjet } from './widjet';
export const Pages = (props) => {
  return (
    <div style={{height:props.size.height,width:props.size.width}} className='container'>
            {props.widjets.map(elem=>{
                return <Widjet widjet={elem}/>
            })}
    </div>
  )
}
