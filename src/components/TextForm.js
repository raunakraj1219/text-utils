import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState('Enter text')
    const handleClick=()=>{
        console.log("btn clicked");
        const newtext = text.toUpperCase()
        setText(newtext);
    }
    const handleOnChange =(e)=>{
        setText(e.target.value)
    }
    return (
        <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    {/* <div>{text}</div> */}
                   <textarea className='form-control' onChange={handleOnChange} value={text} id="mybox" rows="8"/>
                </div>   
                <button className="btn btn-primary" onClick={handleClick}>Convert to uppercase</button>
        </div>
    )
}
