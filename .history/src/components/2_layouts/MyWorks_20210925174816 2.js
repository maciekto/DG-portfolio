import React, {useState, useEffect} from 'react';
import MyWorks_1 from '../../assets/Mobile/myWorks_1.png';
import MyWorks_2 from '../../assets/Mobile/myWorks_2.png';
import MyWorks_3 from '../../assets/Mobile/myWorks_3.png';
import MyWorks_4 from '../../assets/Mobile/myWorks_4.png';
import MyWorks_5 from '../../assets/Mobile/myWorks_5.png';
import MyWorks_6 from '../../assets/Mobile/myWorks_6.png';
import MyWorks_7 from '../../assets/Mobile/myWorks_7.png';
import MyWorks_8 from '../../assets/Mobile/myWorks_8.png';
import MyWorks_arrow from '../../assets/Mobile/myWorks_arrow.png';

export default function MyWorks() {
    const [width, setWidth] = useState(window.innerWidth);


    const [Visualizations, setVisualizations] = useState('MyWorks-Sections-Works-Visualizations_off');
    const [VisualizationsArrow, setVisualizationsArrow] = useState('MyWorks-Sections-Title-Arrow-Visualizations_off');
    const [VisualizationsImg, setVisualizationsImg] = useState('MyWorks-Sections-Works-Visualizations_off_img');

    const [Drawings, setDrawings] = useState('MyWorks-Sections-Works-Drawings_off');
    const [DrawingsArrow, setDrawingsArrow] = useState('MyWorks-Sections-Title-Arrow-Drawings_off');
    const [DrawingsImg, setDrawingsImg] = useState('MyWorks-Sections-Works-Drawings_off_img');

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
            }, 200); 
        } else if(type === 'Banners') {
            Banner === 'MyWorks-Sections-Works-Banner_off' ? setBanner('MyWorks-Sections-Works-Banner') : setBanner('MyWorks-Sections-Works-Banner_off');
            BannerArrow === 'MyWorks-Sections-Title-Arrow-Banner_off' ? setBannerArrow('') : setBannerArrow('MyWorks-Sections-Title-Arrow-Banner_off');
            BannerImg === 'MyWorks-Sections-Works-Banner_off_img' ? setTimeout(() => { setBannerImg('') }, 200) : setTimeout(() => {
                setBannerImg('MyWorks-Sections-Works-Banner_off_img');
            }, 200); 
        } else if(type === 'Drawings') {
            if(Drawings === 'MyWorks-Sections-Works-Drawings_off') {
                setDrawings('MyWorks-Sections-Works-Drawings')
            } else {
                setDrawings('MyWorks-Sections-Works-Drawings_off');
            }
            DrawingsArrow === 'MyWorks-Sections-Title-Arrow-Drawings_off' ? setDrawingsArrow('') : setDrawingsArrow('MyWorks-Sections-Title-Arrow-Drawings_off');
            DrawingsImg === 'MyWorks-Sections-Works-Drawings_off_img' ? setDrawingsImg('') : setTimeout(() => {
                setDrawingsImg('MyWorks-Sections-Works-Drawings_off_img');
            }, 200); 
        }
        
    }
    return (
        <div className="MyWorks">
            <div className='MyWorks-Title'>
                My Works
            </div>
            <div className='MyWorks-Sections'>
                <div className='MyWorks-Sections-Title MyWorks-Sections-Title-Visualizations' onClick={() => clickSection('Visualizations')}>
                    Visualizations
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${VisualizationsArrow}`}/>
                </div>
                <div className={`MyWorks-Sections-Works ${Visualizations}`}>
                    <img src={MyWorks_1} className={VisualizationsImg}/>
                    <img src={MyWorks_2} className={VisualizationsImg}/>
                </div>
                <div className='MyWorks-Sections-Title MyWorks-Sections-Title-Banners' onClick={() => clickSection('Banners')}>
                    Banners
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${BannerArrow}`}/>
                </div>
                <div className={`MyWorks-Sections-Works ${Banner}`}>
                    <img src={MyWorks_3} className={BannerImg}/>
                    <img src={MyWorks_4} className={BannerImg}/>
                    <img src={MyWorks_5} className={BannerImg}/>
                </div>
                <div className='MyWorks-Sections-Title MyWorks-Sections-Title-Drawings' onClick={() => clickSection('Drawings')}>
                    Drawings
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${DrawingsArrow}`}/>
                </div>
                <div className={`MyWorks-Sections-Works ${Drawings}`}>
                    <img src={MyWorks_6} className={DrawingsImg}/>
                    <img src={MyWorks_7} className={DrawingsImg}/>
                    <img src={MyWorks_8} className={DrawingsImg}/>
                </div>
            </div>
        </div>
    )
}
