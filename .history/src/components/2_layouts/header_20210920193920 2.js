import React, { Component } from 'react'
import laptop from '../../assets/Mobile/laptop.png';
import laptopPC from '../../assets/Mobile/laptopPC.png';
import elipse_title from '../../assets/Mobile/elipse_title.png';
import elipse_titlePC from '../../assets/Mobile/elipse_titlePC.png';
export default class header extends Component {
    state = {
        width: undefined
    }

    componentDidMount() {
        const width = window.innerWidth;
        this.setState({
            width: width
        })
    }
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
                    Art is <span className='header-Title-PinElipseTitle'>not<img src={this.state.width < 1160 ? elipse_title : elipse_titlePC} alt='Elipse' className='header-Title-ImgElipseTitle' /></span> a thing,<br />
                    it is a way 
                    <br />
                    <span className='header-Title-Quote'>Elbert Hubbard</span>
                </div>
                <img src={this.state.width < 1160 ? laptop : laptopPC} alt='Laptop' className='header-Laptop' />
            </header>
        )
    }
}
