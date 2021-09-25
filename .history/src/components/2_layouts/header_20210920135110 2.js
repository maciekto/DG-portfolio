import React, { Component } from 'react'

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
                    Art is not a thing,
                    it is a way 
                    Elbert Hubbard 
                </div>
                <img />
            </header>
        )
    }
}
