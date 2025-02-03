import React from 'react'
import { useLocation } from 'react-router-dom'
import './CodePage.css'

export default function CodePage(props) {
    const location = useLocation();
    const { secretKey } = location.state || {};

    return (
        <>
            <p className='textCode'>Secret Code To Download Your File</p>
            <p className='codeNum'>{secretKey}</p>
        </>
    )
}
