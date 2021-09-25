import React, {useState, useEffect} from 'react';

export default function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
        <div className='Nav'>
            <a href="#aboutMe"className='Nav-Aboutme'>
                About me
            </a>
            <div className='Nav-Line'></div>
        </div>
    )
}
