import React from 'react'
import './SocialMedia.css'

export default function SocialMedia(props) {


    return (
        <>
            <div className='link-container'>
                <a href='https://www.linkedin.com/in/vishal-paswan-59772925b' target='_blank'><div className='link-circle'><i class="fa-brands fa-linkedin-in"></i></div></a>
                <a href='https://github.com/VishalPaswan2402' target='_blank'><div className='link-circle'><i class="fa-brands fa-github"></i></div></a>
                <a href='https://x.com/VishalPaswan24' target='_blank'><div className='link-circle'><i class="fa-brands fa-twitter"></i></div></a>
                <a href='https://www.instagram.com/imvishal2402' target='_blank'><div className='link-circle'><i class="fa-brands fa-instagram"></i></div></a>
            </div>
        </>
    )
}
