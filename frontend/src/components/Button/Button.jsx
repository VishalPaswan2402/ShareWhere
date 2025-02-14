import React from 'react'
import './Button.css'

export default function Button({ label, icon, click, type }) {


    return (
        <>
            <button
                type={type || "button"}
                className='submit-btn'
                onClick={click}>{label}
                {icon && (
                    <>
                        <span style={{ marginLeft: "5px" }}></span>
                        <i className={icon}></i>
                    </>
                )}
            </button>
        </>
    )
}
