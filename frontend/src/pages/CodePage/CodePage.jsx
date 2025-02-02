import React from 'react'
import Logo from '../../components/Logo/Logo'
import { useLocation } from 'react-router-dom'
import './CodePage.css'

export default function CodePage(props) {
    const location = useLocation();
    const { secretKey } = location.state || {};

    return (
        <>
            <Logo />
            <p className='textCode'>Secret Code To Download Your File</p>
            <p className='codeNum'>{secretKey}</p>
        </>
    )
}
