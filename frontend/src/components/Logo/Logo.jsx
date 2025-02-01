import React from 'react'
import './Logo.css'
import assets from '../../assets/assets'

export default function Logo(props) {

    return (
        <>
            <div className="title">
                <p className='head'>Share<img src={assets.logo2} alt='' className='logo' />Where</p>
                <p className='slogan'>Share Your File Anywhere</p>
            </div>
        </>
    )
}
