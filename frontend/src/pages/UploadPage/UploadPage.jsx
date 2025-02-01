import React from 'react'
import './UploadPage.css'
import assets from '../../assets/assets'
import Logo from '../../components/Logo/Logo'
import UploadFile from '../../components/UploadFile/UploadFile'

export default function HomePage(props) {

    return (
        <>
            <Logo />
            <UploadFile />
        </>
    )
}
