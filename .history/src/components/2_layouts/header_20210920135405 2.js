import React, { Component } from 'react'
import laptop from '../../assets/Mobile/laptop.png';
import elipse_title from '../../assets/Mobile/elipse_title.png';
export default class header extends Component {
    render() {
        return (
            <header>
                <div className='header-Burger'>
                    <div className='header-Burger-Line header-Burger-Line1'></div>
                    <div className='header-Burger-Line header-Burger-Line2'></div>
                    <div className='header-Burger-Line header-Burger-Line3'></div>
                </div>
                <div className='header-Name'>
                    Dominika Głuszkowska Graphic&nbsp;Designer
                </div>
                <div className='header-Title'>
                    Art is <span className='header-ElipseTitle'>not</span> a thing,
                    it is a way 
                    Elbert Hubbard 
                </div>
                <img src={laptop} alt='Laptop' className='header-Laptop' />
            </header>
        )
    }
}
