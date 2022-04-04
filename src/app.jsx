import React from 'react';
import  './styles.scss';

import {Test} from './test.jsx'
const onClickEvent = (e) => {
    e.preventDefault();
    alert('You Clicked Me!')
}

export const App = (props) => {
    return (
        <div  style={{width:"500px",height:"350px",backgroundColor:'black'}}>
            <h1>Hello world!</h1>
        </div>
    )
}

