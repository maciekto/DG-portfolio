import React, {useState, useEffect} from 'react';
import MyWorks_1 from '../../assets/Mobile/myWorks_1.png';
import MyWorks_2 from '../../assets/Mobile/myWorks_2.png';

export default function MyWorks() {
    const [width, setWidth] = useState(window.innerWidth);
    const [Visualizations, setVisualizations] = useState();
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const clickSection = () => {
        console.log('siema')
    }
    return (
        <div className="MyWorks">
            <div className='MyWorks-Title'>
                My Works
            </div>
            <div className='MyWorks-Sections'>
                <div className='MyWorks-Sections-Title' onClick={this.clickSection}>
                    Visualizations
                </div>
                <div className='MyWorks-Sections-Works MyWorks-Sections-Works_off'>
                    <img src={MyWorks_1} />
                    <img src={MyWorks_2} />
                </div>
            </div>
        </div>
    )
}
