import React from 'react'
import './Footer.css'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Footer(props) {
    

    return (
        <>
            <div className='foot-div'>
                <SocialMedia/>
                <p>Designed and created by Vishal Paswan.</p>
                <p>&copy; {new Date().getFullYear()}, All rights reserved.</p>
            </div>
        </>
    )
}
