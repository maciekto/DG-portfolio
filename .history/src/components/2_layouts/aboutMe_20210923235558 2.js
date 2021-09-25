import React from 'react'
import aboutMe_1 from '../../assets/Mobile/aboutMe_1.png';
import aboutMe_2 from '../../assets/Mobile/aboutMe_2.png';

import aboutMe_elipse from '../../assets/Mobile/aboutMe_elipse.png';

export default function AboutMe() {
    return (
        <div className="AboutMe">
            <div className='AboutMe-Title'>
                About Me
            </div>
            <div className='AboutMe-Img1'>
                <img src={aboutMe_1} />
            </div>
            <div className='AboutMe-Description1'>
                I was interested art since I was a child. <br />
                I had my first exhibition in middle school. Recently i started to create graphics and train myself for this profession. Creating various projects give me great pleasure and it is my passion.
            </div>
            <div className='AboutMe-Img2'>
                <img src={aboutMe_2} />
            </div>
            <div className='AboutMe-Description2'>
                I design the interface of websites <br />
                and applications. <br />
                I create mailings, banners, business cards, <br />
                and graphics for social media. <br />
                If you want to cooperate, let's go for a coffee! :)
            </div>
            <img src={aboutMe_elipse} className='AboutMe-Elipse1'/>
            <img src={aboutMe_elipse} className='AboutMe-Elipse2'/>
        </div>
    )
}
