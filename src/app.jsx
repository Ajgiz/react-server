import React from 'react';
import  './styles.scss';

import {Test} from './test.jsx'
const onClickEvent = (e) => {
    e.preventDefault();
    alert('You Clicked Me!')
}

export const App = (props) => {
    return (
        <div className='content'>
          <Test test={props.test}/>
            <div className='title'>
                Create React App Without CRA😊
            </div>
            <button className='btn' onClick={onClickEvent}>Click Me 😎</button>
        </div>
    )
}

