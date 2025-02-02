import React from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import './HomePage.css'
import { useNavigate } from 'react-router-dom';
import DownloadPage from '../DownloadPage/DownloadPage';

export default function HomePage(props) {
    const navigate = useNavigate();
    const directToSharePage = () => {
        console.log("Share page");
        navigate("/uploadFile");
    }
    const directToDownloadPage = () => {
        console.log("DownloadPage");
        navigate("/downloadFile");
    }
    return (
        <>
            <Logo />
            <Button label="Share File" icon="fa-solid fa-cloud-arrow-up" click={directToSharePage} />
            <p className='differ'>--------- ---------</p>
            <Button label="Receive File" icon="fa-solid fa-cloud-arrow-down" click={directToDownloadPage} />
        </>
    )
}
