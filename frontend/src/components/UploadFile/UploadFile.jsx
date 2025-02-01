import React from 'react'
import assets from '../../assets/assets'
import './UploadFile.css'
import Button from '../Button/Button'

export default function UploadFile(props) {

    return (
        <>
            <div className="inputs">
                <form>
                    <div className="uploadBox">
                        <input type='file' id='image' hidden />
                        <label htmlFor='image' className='uploadFile'>
                            <img src={assets.uploadFileImage} alt='' />
                            <p>Select file to share</p>
                            <img src={assets.uploadFileImage} alt='' />
                        </label>
                    </div>
                    <Button label="Secure & Share" />
                </form>
            </div>
        </>
    )
}
