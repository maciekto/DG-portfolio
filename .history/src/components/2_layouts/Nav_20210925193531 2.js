import React, {useState, useEffect} from 'react';
import nav_download from '../../assets/Mobile/nav_download.png';

export default function Nav(props) {
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
        <div className={`Nav ${props.NavOpen === false ? 'Nav-Closed' : 'Nav-Open'}`}>
            <a href="#aboutMe" className='Nav-Title' onClick={() => props.triggerNav(false)}>
                About me
            </a>
            <div className='Nav-Line'></div>
            <a href="#myWorks" className='Nav-Title' onClick={() => props.triggerNav(false)}>
                My works
            </a>
            <div className='Nav-Line'></div>
            <a href="#contact" className='Nav-Title' onClick={() => props.triggerNav(false)}>
                Contact
            </a>
            <div className='Nav-Line'></div>
            <a href="#aboutMe"className='Nav-Title'>
                CV <img src={nav_download} />
            </a>
        </div>
    )
}
