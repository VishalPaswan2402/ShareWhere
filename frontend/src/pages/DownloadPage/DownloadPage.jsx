import React from 'react'
import Logo from '../../components/Logo/Logo'
import { useForm } from "react-hook-form"
import Button from '../../components/Button/Button'
import './DownloadPage.css'

export default function DownloadPage(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <Logo />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="codeValue">
                    <input type='text' placeholder='Enter Secret Code' className='secretCode' {...register("secretCode", { required: true })} />
                    {errors.secretCode && <span className='req'>Secret code required</span>}
                </div>
                <Button label="Verify Code" />
            </form>
        </>
    )
}
