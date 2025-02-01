import React from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import './HomePage.css'

export default function HomePage(props) {


    return (
        <>
            <Logo />
            <Button label="Share File" icon="fa-solid fa-cloud-arrow-up" />
            <p className='differ'>--------- ---------</p>
            <Button label="Receive File" icon="fa-solid fa-cloud-arrow-down" />
        </>
    )
}
