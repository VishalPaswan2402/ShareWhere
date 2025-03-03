import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './CodePage.css'
import { Navigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

export default function CodePage(props) {
    const navigate =useNavigate();
    const location = useLocation();
    const { secretKey } = location.state || {};

    const handleHomePage=()=>{
        navigate("/");
    }

    return (
        <>
            {secretKey ? (
                <>
                    <p className='textCode'>Your file is ready ! Use the secret code to download it.
                        <p className='validInfo'>valid for 1 hour only !</p>
                    </p>
                    <p className='codeNum'>{secretKey}</p>
                </>
            ) : (
                <>
                    
                    <p className='noCode'>No secret code available !</p>
                    <Button label="Back to Home." icon='fa-solid fa-house' click={handleHomePage}></Button>
                </>
            )}
        </>
    )
}
