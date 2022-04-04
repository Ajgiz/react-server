import React from 'react';
import { Pages } from './components/Pages';
import { Widjets } from './components/widjet';
import  './styles.scss';

import {Test} from './test.jsx'
const onClickEvent = (e) => {
    e.preventDefault();
    alert('You Clicked Me!')
}

export const App = (props) => {
    return (
        <div  style={{width:props.wrapperWidth,height:props.wrapperHeight}}>
          {props.pages.map(i=>{
              return <Pages page={i} size={props.sizePage}/>
          })}
        </div>
    )
}

