import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import Button from '../../components/Button/Button'
import './DownloadPage.css'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
import assets from '../../assets/assets'

export default function DownloadPage(props) {
    const backend_url = "https://sharewherebackend.onrender.com";

    const [isKey, setIsKey] = useState(false);
    const [searching, setSearching] = useState(false);
    const [downloadAvl, setDownloadAvl] = useState(false);
    const [fileType, setFileType] = useState(null);
    const [urlLink, setUrlLink] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const [textMsg, setTextMsg] = useState("Securing And Verifying...");

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
            const response = await axios.post(
                backend_url + "/api/sharewhere/downloadFile",
                { secretKey },
                {
                    onUploadProgress: (progressEvent) => {
                        const percentCompleted = Math.round(
                            (progressEvent.loaded * 100) / progressEvent.total
                        );
                        if (percentCompleted > 50) {
                            setTextMsg("Securing And Searching...");
                        }
                    }
                }
            );
            // console.log(response.data);
            let fileExName = response.data.dataName;
            if (fileExName.length > 20) {
                const startingName = fileExName.slice(0, 8);
                const endingName = fileExName.slice(-8);
                fileExName = `${startingName}...${endingName}`;
            }
            setFileType(fileExName);
            setUrlLink(response.data.dataUrl);
            setDownloadAvl(true);
        } catch (error) {
            // console.log("Error d");
            // console.log(error.message);
            if (error) {
                // console.log("e",error)
                setErrMsg(error.message);
                setIsKey(true);
                setSearching(false);
            }
            setErrMsg(error.response.data.message + " ! Check your secret code.");
            setIsKey(true);
            setSearching(false);
            // console.log("End");
        }
    };

    // download...
    const downloadFile = async () => {
        try {
            const fileUrl = urlLink;
            const response = await axios.get(fileUrl, { responseType: "blob" });

            // Determine file type from response headers if available
            const mimeType = response.headers["content-type"];
            let fileExtension = "";

            if (mimeType) {
                if (mimeType.includes("pdf")) {
                    fileExtension = "pdf";
                } else if (mimeType.includes("image")) {
                    fileExtension = mimeType.split("/")[1]; // Extract image format (e.g., jpg, png)
                } else {
                    console.warn("Unsupported file type, using default extension.");
                    fileExtension = "file"; // Default unknown extension
                }
            } else {
                //Extract extension from URL if MIME type is missing
                const urlParts = fileUrl.split(".");
                fileExtension = urlParts[urlParts.length - 1].split("?")[0];
            }

            const fileName = `Share_Where.${fileExtension}`;
            const blob = new Blob([response.data], { type: mimeType });
            const blobUrl = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(blobUrl);
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
                            <input type='text' maxLength={6} placeholder='Enter Secret Code' className='secretCode' {...register("secretCode", { required: true })} />
                            {isKey ? <span className='req'>{errMsg ? errMsg : null}</span> : null}
                        </div>
                        <Button type="submit" label="Unlock File" icon="fa-solid fa-unlock-keyhole" />
                    </form>
                )
                :
                (
                    downloadAvl ?
                        <div className='downDiv'>
                            <img className='planeImg' src={assets.dots} alt='' />
                            <p className='fileType'>File_Name : {fileType ? fileType : null}</p>
                            <Button label="Download File" click={downloadFile} />
                        </div>
                        :
                        <Loader textMsg={textMsg} />
                )
            }
        </>
    )
}
