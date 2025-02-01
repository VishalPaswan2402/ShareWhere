import React from 'react'
import './Button.css'

export default function Button({ label, icon }) {


    return (
        <>
            <button type='submit' className='submit-btn'>{label} &nbsp; <i className={icon}></i> </button>
        </>
    )
}
