import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import './UploadFile.css'
import assets from '../../assets/assets.js'
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader.jsx";
import Button from "../Button/Button.jsx";


export default function UploadFile() {
    const backend_url = "http://localhost:8080";

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const selectedFile = watch("fileUploaded");
    const [uploading, setUploading] = useState(false);
    const [isFile, setIsFile] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getShortFileName = (fileName) => {
        return fileName.length > 10 ? fileName.substring(0, 10) + "..." : fileName;
    };

    const uploadFileToServer = async (e) => {
        e.preventDefault();
        if (!selectedFile || selectedFile.length === 0) {
            setErrorMessage("File not exist.");
            setIsFile(true);
            return;
        }
        const file = selectedFile[0];
        // console.log(file.size);
        const formData = new FormData();
        formData.append("file", file);

        setUploading(true);
        setIsFile(false);

        const fileSizeInBytes = file.size;
        const maxFileSize = 5 * 1024 * 1024;

        if (fileSizeInBytes > maxFileSize) {
            setTimeout(() => {
                setUploading(false);
                setIsFile(true);
                setErrorMessage("File size exceed 5MB");
            }, 5000);
            return;
        }

        try {
            const response = await axios.post(
                backend_url + "/api/sharewhere/uploadFileToShare",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                }
            );
            if (response) {
                // console.log("Upload Successful:", response.data);
                navigate("/secretCodePage", {
                    state:
                    {
                        secretKey: response.data.secretCode
                    }
                });
            }
        } catch (error) {
            console.error("Upload Error:", error);
            setIsFile(true);
            setErrorMessage(error.message);
        }
        setUploading(false);
    };

    return (
        <div className="inputs">
            <form onSubmit={uploadFileToServer}>
                {!uploading ?
                    <div className="uploadBox">
                        <input type="file" id="image" hidden accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" {...register("fileUploaded", { required: true })} />
                        <label htmlFor="image" className="uploadFile">
                            <img src={assets.uploadFileImage} alt='' />
                            <p>
                                {selectedFile && selectedFile.length > 0
                                    ? getShortFileName(selectedFile[0].name)
                                    : "Choose a file to share."}
                            </p>
                            <img src={assets.uploadFileImage} alt='' />
                        </label>
                        {isFile ? <span className='error'>{errorMessage}</span> : null}
                    </div>
                    :
                    <Loader textMsg="Securing And Sharing..." />
                }
                {!uploading ?
                    <Button type="submit" label="Secure & Share" />
                    :
                    null
                }
            </form>
        </div>
    );
}
