import React from 'react'
import contact_img from '../../assets/Mobile/contact_img.png';
import contact_imgPC from '../../assets/Desktop/contact_img.png';
export default function Contact() {
    return (
        <div className='Contact'>
            <div className='Contact-Title'>
                Contact
            </div>
            <img src={contact_img}/>
            <div className='Contact-Desc'>
                Contact with
                me through
                Linkedin
            </div>
        </div>
    )
}
