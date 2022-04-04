import React from 'react'
import './widjet.css';
import {Text} from './Text'
export const Widjet = (props) => {

  const reducer=(type:string)=>{
    switch(type){
      case 'text':
        return (
          <Text properties={props.properties}/>
        )
    }
  }
  return (
    <div style={{width:props.properties.size.width,height:props.properties.size.height,zIndex:props.properties.size.zIndex,top:props.position.y,left:props.position.x}} 
    className='widjet'>
              {reducer('d')}
    </div>
  )
}
