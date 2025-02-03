import React from 'react'
import Button from '../../components/Button/Button'
import './HomePage.css'
import { useNavigate } from 'react-router-dom';

export default function HomePage(props) {
    const navigate = useNavigate();
    const directToSharePage = () => {
        // console.log("Upload page");
        navigate("/uploadFile");
    }
    const directToDownloadPage = () => {
        // console.log("DownloadPage");
        navigate("/downloadFile");
    }
    return (
        <>
            <Button label="Share File" icon="fa-solid fa-cloud-arrow-up" click={directToSharePage} />
            <p className='differ'>------ OR ------</p>
            <Button label="Receive File" icon="fa-solid fa-cloud-arrow-down" click={directToDownloadPage} />
        </>
    )
}
