import React from 'react'
import './pages-styles.css';
import { Widjets } from './widjets';
export const Pages = (props) => {
  return (
    <div style={{height:`1000px`,width:`640px`}} className='container'>
            {props.widjet.map(elem=>{
                return <Widjets/>
            })}
    </div>
  )
}
