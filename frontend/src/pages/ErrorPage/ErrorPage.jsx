import React from 'react'
import assets from '../../assets/assets'
import './ErrorPage.css'

export default function ErrorPage(props) {


    return (
        <>
            <div className='error-div'>
                <img className='errImg' src={assets.errorImg} alt='' />
                <p>Nothing to see here. Let’s go back!</p>
                <a href='/' >Click here</a>
            </div>
        </>
    )
}
