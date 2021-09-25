import React, {useState, useEffect} from 'react';
import MyWorks_1 from '../../assets/Mobile/myWorks_1.png';
import MyWorks_2 from '../../assets/Mobile/myWorks_2.png';
import MyWorks_arrow from '../../assets/Mobile/myWorks_arrow.png';

export default function MyWorks() {
    const [width, setWidth] = useState(window.innerWidth);


    const [Visualizations, setVisualizations] = useState('MyWorks-Sections-Works_off');
    const [VisualizationsArrow, setVisualizationsArrow] = useState('MyWorks-Sections-Title-Arrow_off');

    const [Banner, setVisualizations] = useState('MyWorks-Sections-Works_off');
    const [Banner, setVisualizationsArrow] = useState('MyWorks-Sections-Title-Arrow_off');
    
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const clickSection = (type) => {
        if(type === 'Visualizations') {
            Visualizations === 'MyWorks-Sections-Works_off' ? setVisualizations('') : setVisualizations('MyWorks-Sections-Works_off');
            VisualizationsArrow === 'MyWorks-Sections-Title-Arrow_off' ? setVisualizationsArrow('') : setVisualizationsArrow('MyWorks-Sections-Title-Arrow_off');
        } else if(type === 'Banners') {

        }
        
    }
    return (
        <div className="MyWorks">
            <div className='MyWorks-Title'>
                My Works
            </div>
            <div className='MyWorks-Sections'>
                <div className='MyWorks-Sections-Title' onClick={() => clickSection('Visualizations')}>
                    Visualizations
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${VisualizationsArrow}`}/>
                </div>
                <div className={`MyWorks-Sections-Works ${Visualizations}`}>
                    <img src={MyWorks_1} />
                    <img src={MyWorks_2} />
                </div>
                <div className='MyWorks-Sections-Title' onClick={() => clickSection('Banners')}>
                    Banner
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${VisualizationsArrow}`}/>
                </div>
                <div className={`MyWorks-Sections-Works ${Visualizations}`}>
                    <img src={MyWorks_1} />
                    <img src={MyWorks_2} />
                </div>
            </div>
        </div>
    )
}