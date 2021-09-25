import React, {useState, useEffect} from 'react';
import MyWorks_1 from '../../assets/Mobile/myWorks_1.png';
import MyWorks_2 from '../../assets/Mobile/myWorks_2.png';

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
            <div className='MyWorks-Sections'>
                <div className='MyWorks-Sections-Visualizations'>
                    <div className='MyWorks-Sections-Visualizations-Title'>
                        Visualizations
                    </div>
                    <div className='MyWorks-Section-Visualizations-Works'>
                        <img src={MyWorks_1} />
                    </div>
                </div>
            </div>
        </div>
    )
}