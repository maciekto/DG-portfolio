import React, {useState, useEffect} from 'react';
import MyWorks_1 from '../../assets/Mobile/myWorks_1.png';
import MyWorks_2 from '../../assets/Mobile/myWorks_2.png';

export default function MyWorks() {
    const [width, setWidth] = useState(window.innerWidth);
    const [Visualizations, setVisualizations] = useState('MyWorks-Sections-Works_off');
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const clickSection = () => {
        if(Visualizations === 'MyWorks-Sections-Works_off') {
            setVisualizations('MyWorks-Sections-Works')
        } else {
            setVisualizations('MyWorks-Sections-Works_off')
        }
        
    }
    return (
        <div className="MyWorks">
            <div className='MyWorks-Title'>
                My Works
            </div>
            <div className='MyWorks-Sections'>
                <div className='MyWorks-Sections-Title' onClick={clickSection}>
                    Visualizations
                </div>
                <div className={`MyWorks-Sections-Works ${Visualizations}`}>
                    <img src={MyWorks_1} />
                    <img src={MyWorks_2} />
                </div>
                <div className='MyWorks-Sections-Title' onClick={clickSection}>
                    Visualizations
                </div>
                <div className={`MyWorks-Sections-Works ${Visualizations}`}>
                    <img src={MyWorks_1} />
                    <img src={MyWorks_2} />
                </div>
            </div>
        </div>
    )
}
