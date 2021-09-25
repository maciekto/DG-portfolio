import React, {useState, useEffect} from 'react';

export default function MyWorks() {
    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
        <div className="MyWorks">
            <div className='MyWorks-Title'>
                My Works
            </div>
            asdf
        </div>
    )
}
