import React, {useState, useEffect} from 'react';
import MyWorks_1 from '../../assets/Mobile/myWorks_1.png';
import MyWorks_2 from '../../assets/Mobile/myWorks_2.png';
import MyWorks_arrow from '../../assets/Mobile/myWorks_arrow.png';

export default function MyWorks() {
    const [width, setWidth] = useState(window.innerWidth);


    const [Visualizations, setVisualizations] = useState('MyWorks-Sections-Works-Visualizations_off');
    const [VisualizationsArrow, setVisualizationsArrow] = useState('MyWorks-Sections-Title-Arrow-Visualizations_off');
    const [VisualizationsImg, setVisualizationsImg] = useState('MyWorks-Sections-Works-Visualizations_off_img');

    const [Banner, setBanner] = useState('MyWorks-Sections-Works-Banner_off');
    const [BannerArrow, setBannerArrow] = useState('MyWorks-Sections-Title-Arrow-Banner_off');
    const [BannerImg, setBannerImg] = useState('MyWorks-Sections-Works-Banner_off_img');

    
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const clickSection = (type) => {
        if(type === 'Visualizations') {
            Visualizations === 'MyWorks-Sections-Works-Visualizations_off' ? setVisualizations('') : setVisualizations('MyWorks-Sections-Works-Visualizations_off');
            VisualizationsArrow === 'MyWorks-Sections-Title-Arrow-Visualizations_off' ? setVisualizationsArrow('') : setVisualizationsArrow('MyWorks-Sections-Title-Arrow-Visualizations_off');
            VisualizationsImg === 'MyWorks-Sections-Works-Visualizations_off_img' ? setVisualizationsImg('') : setTimeout(() => {
                setVisualizationsImg('MyWorks-Sections-Works-Visualizations_off_img');
            }, 400); 
        } else if(type === 'Banners') {
            Banner === 'MyWorks-Sections-Works-Banner_off' ? setBanner('') : setBanner('MyWorks-Sections-Works-Banner_off');
            BannerArrow === 'MyWorks-Sections-Title-Arrow-Banner_off' ? setBannerArrow('') : setBannerArrow('MyWorks-Sections-Title-Arrow-Banner_off');
            BannerImg === 'MyWorks-Sections-Works-Banner_off_img' ? setBannerImg('') : setTimeout(() => {
                setBannerImg('MyWorks-Sections-Works-Banner_off_img');
            }, 400); 
        }
        
    }
    return (
        <div className="MyWorks">
            <div className='MyWorks-Title'>
                My Works
            </div>
            <div className='MyWorks-Sections'>
                <div className='MyWorks-Sections-Title MyWorks-Sections-Visualization-Title' onClick={() => clickSection('Visualizations')}>
                    Visualizations
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${VisualizationsArrow}`}/>
                </div>
                <div className={`MyWorks-Sections-Works ${Visualizations}`}>
                    <img src={MyWorks_1} className={VisualizationsImg}/>
                    <img src={MyWorks_2} className={VisualizationsImg}/>
                </div>
                <div className='MyWorks-Sections-Title MyWorks-Sections-Banners-Title' onClick={() => clickSection('Banners')}>
                    Banner
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${BannerArrow}`}/>
                </div>
                <div className={`MyWorks-Sections-Works ${Banner}`}>
                    <img src={MyWorks_1} className={BannerImg}/>
                    <img src={MyWorks_2} className={BannerImg}/>
                </div>
            </div>
        </div>
    )
}
