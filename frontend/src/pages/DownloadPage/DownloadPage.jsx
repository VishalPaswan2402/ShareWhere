import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Button from '../../components/Button/Button'
import './DownloadPage.css'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import assets from '../../assets/assets'

export default function DownloadPage(props) {
    const backend_url = "http://localhost:8080";

    const [isKey, setIsKey] = useState(false);
    const [searching, setSearching] = useState(false);
    const [downloadAvl, setDownloadAvl] = useState(false);
    const [fileType, setFileType] = useState(null);
    const [urlLink, setUrlLink] = useState(null);
    const [errMsg, setErrMsg] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const secretKey = watch("secretCode");

    const downloadFileData = async (e) => {
        e.preventDefault();
        if (!secretKey) {
            setIsKey(true);
            setErrMsg("Secret code required !");
            return;
        }
        setIsKey(false);
        setErrMsg(null);
        try {
            setSearching(true);
            const response = await axios.post(backend_url + "/api/sharewhere/downloadFile", { secretKey });
            console.log(response.data);
            setFileType(response.data.dataType);
            setUrlLink(response.data.dataUrl);
            setDownloadAvl(true);
        } catch (error) {
            setErrMsg(error.response.data.message + " ! Check your secret code.");
            setIsKey(true);
            setSearching(false);
        }
    };

    // download...
    const downloadFile = async () => {
        try {
            const fileUrl = urlLink; // Your Cloudinary file link
            // Extract file extension dynamically
            const urlParts = fileUrl.split(".");
            const fileExtension = urlParts[urlParts.length - 1].split("?")[0]; // Handle query params
            // Set default filename based on extension
            const fileName = `Share_Where.${fileExtension}`;
            const response = await axios.get(fileUrl, { responseType: "blob" });
            const blobUrl = window.URL.createObjectURL(new Blob([response.data]));

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = fileName; // Use dynamically extracted filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(blobUrl); // Clean up memory
        } catch (error) {
            console.error("Download failed", error);
        }
    };

    return (
        <>
            {!searching ?
                (
                    <form onSubmit={downloadFileData}>
                        <div className="codeValue">
                            <input type='text' placeholder='Enter Secret Code' className='secretCode' {...register("secretCode", { required: true })} />
                            {isKey ? <span className='req'>{errMsg ? errMsg : null}</span> : null}
                        </div>
                        <Button type="submit" label="Verify Code" />
                    </form>
                )
                :
                (
                    downloadAvl ?
                        <div className='downDiv'>
                            <img className='planeImg' src={assets.dots} alt='' />
                            <p className='fileType'>File_Type : {fileType ? fileType : null}</p>
                            <Button label="Download File" click={downloadFile} />
                        </div>
                        :
                        <Loader textMsg="Securing And Searching..." />
                )
            }
        </>
    )
}
