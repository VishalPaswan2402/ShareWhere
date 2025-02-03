import React from 'react'
import './Button.css'

export default function Button({ label, icon, click ,type }) {


    return (
        <>
            <button type={type} className='submit-btn' onClick={click}>{label} &nbsp; <i className={icon}></i> </button>
        </>
    )
}
