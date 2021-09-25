

import React, {useState, useEffect} from 'react'
import laptop from '../../assets/Mobile/laptop.png';
import laptopPC from '../../assets/Mobile/laptopPC.png';
import elipse_title from '../../assets/Mobile/elipse_title.png';
import elipse_titlePC from '../../assets/Mobile/elipse_titlePC.png';
import { Simulate } from 'react-dom/test-utils';



export default function Header() {
    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    return (
            <header>
                <div className="header-Top">
                    <div className='header-Burger'>
                        <div className='header-Burger-Line header-Burger-Line1'></div>
                        <div className='header-Burger-Line header-Burger-Line2'></div>
                        <div className='header-Burger-Line header-Burger-Line3'></div>
                    </div>
                    <div className='header-Name'>
                        Dominika Głuszkowska<br /> Graphic&nbsp;Designer
                    </div>
                </div>
                <div className='header-Title'>
                    Art&nbsp;is&nbsp;<span className='header-Title-PinElipseTitle'>not<img src={width < 1366 ? elipse_title : elipse_titlePC} alt='Elipse' className='header-Title-ImgElipseTitle' /></span> a <span className="header-Title-LaptopPC">thing,<img src={laptopPC} alt='Laptop' className='header-LaptopPC' /> </span>
                    <br />it is a way 
                    <br />
                    <span className='header-Title-Quote'>Elbert Hubbard</span>
                </div>
                <img src={laptop} alt='Laptop' className='header-Laptop' /> 
            </header>
    )
}




