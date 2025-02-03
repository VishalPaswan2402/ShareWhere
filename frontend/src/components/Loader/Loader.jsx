import React from 'react'
import assets from '../../assets/assets'
import './Loader.css'

export default function Loader({ textMsg }) {


    return (
        <>
            <div className="loaderDiv">
                <img className="loader" src={assets.loader} alt="" />
                <p>{textMsg}</p>
            </div>
        </>
    )
}
