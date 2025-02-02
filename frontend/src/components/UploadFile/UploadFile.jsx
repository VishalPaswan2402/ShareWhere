import React from 'react'
import assets from '../../assets/assets'
import './UploadFile.css'
import Button from '../Button/Button'
import { useForm } from "react-hook-form"
import axios from 'axios'

export default function UploadFile(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);
    const selectedFile = watch("fileUploaded");
    const getShortFileName = (fileName) => {
        return fileName.length > 10 ? fileName.substring(0, 10) + "..." : fileName;
    }

    const uploadFileToShare = async () => {
        await axios.post("/api/uploadFileToShare")
            .then((response) => {
                console.log("react api");
                console.log(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="inputs">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="uploadBox">
                        <input type='file' id='image' hidden {...register("fileUploaded", { required: true })} />
                        <label htmlFor='image' className='uploadFile'>
                            <img src={assets.uploadFileImage} alt='' />
                            <p>
                                {selectedFile && selectedFile.length > 0
                                    ? getShortFileName(selectedFile[0].name)  // Show selected file name
                                    : "Select file to share"}
                            </p>
                            <img src={assets.uploadFileImage} alt='' />
                        </label>
                        {errors.fileUploaded && <span className='error'>File is missing!</span>}
                    </div>
                    <Button label="Secure & Share" click={uploadFileToShare} />
                </form>
            </div>
        </>
    )
}
