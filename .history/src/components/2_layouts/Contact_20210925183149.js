import React from 'react'
import contact_img from '../../assets/Mobile/contact_img.png';
export default function Contact() {
    return (
        <div className='Contact'>
            <div className='Contact-Title'>
                Contact
            </div>
            <img src={contact_img}/>
            <div className='Contact-Desc'>
                Contact width
                me through
                Linkedin
            </div>
        </div>
    )
}
