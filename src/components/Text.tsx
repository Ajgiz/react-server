import React from 'react'

export const Text = (props) => {
  return (
    <div className='container-text'>
        <input value={props.value} className='input' style={{
            textAlign:props.textAlign,
            color:props.color,
            fontSize:props.fs,
            textDecoration:props.underline,
            fontWeight:props.bold ? 'bold':'normal'
        }}/>
    </div>

  )
}
