import React, {useState, useEffect} from 'react';

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
            <a href="#aboutMe"className='Nav-Aboutme' onClick={() => props.triggerNav(false)}>
                About me
            </a>
            <div className='Nav-Line'></div>
            <a href="#myWorks"className='Nav-Aboutme'>
                My works
            </a>
            <div className='Nav-Line'></div>
            <a href="#contact"className='Nav-Aboutme'>
                Contact
            </a>
            <div className='Nav-Line'></div>
            <a href="#aboutMe"className='Nav-Aboutme'>
                CV
            </a>
        </div>
    )
}
