import React from 'react'
import './Footer.css'

export default function Footer(props) {
    

    return (
        <>
            <div className='foot-div'>
                <p>Designed and created by Vishal Paswan.</p>
                <p>&copy; {new Date().getFullYear()}, All rights reserved.</p>
            </div>
        </>
    )
}
