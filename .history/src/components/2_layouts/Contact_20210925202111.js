import React, {useState, useEffect} from 'react';
import contact_img from '../../assets/Mobile/contact_img.png';
import contact_imgPC from '../../assets/Desktop/contact_img.png';
export default function Contact() {
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
        <div className='Contact' id="contact">
            <div className='Contact-Title'>
                Contact
            </div>
            <img src={width > 1366 ? contact_imgPC : contact_img}/>
            <div className='Contact-Desc'>
                Contact with <br />
                me through <br />
                Linkedin
            </div>
        </div>
    )
}
