import React from 'react'
import Image from '../assets/Image.png'
import Image1 from '../assets/Image (1).png'
import Image2 from '../assets/Image (2).png'
import { IoStarSharp } from "react-icons/io5";
import Avatar from '../assets/Avatar.png'
import Avatar1 from '../assets/Avatar (1).png'
import Avatar2 from '../assets/Avatar (2).png'


const Explore = () => {
  return (
    <div className='explore'>
        <div className="page_width">
            <div className="head">
                <h4>Explore Programs</h4>
                <h2>Our Most Popular Class</h2>
                <p>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
            </div>
            <div className="cards">
                <div className="inner_card">
                    <img src={Image} alt="" />
                    <h6>Design</h6>
                    <div className="content">
                        <div className="card_content">
                            <h3>Figma UI UX Design..</h3>
                            <p>Use Figma to get a job in UI Design, User Interface, User Experience design.</p>
                        </div>
                        <div className="stars">
                        <h4>4.3<IoStarSharp className='gold'/><IoStarSharp className='gold'/><IoStarSharp   className='gold' /><IoStarSharp className='gold'/><IoStarSharp className='gold'/></h4>
                        <p>(16,325)</p>
                        </div>
                        <div className="logo">
                            <img src={Avatar} alt="" />
                            <div className="desc">
                                <h3>Jane Cooper</h3>
                                <p>2001 Enrolled</p>
                             </div>
                                <span>$17.84</span>
                        </div>
                    </div>
                </div>
                <div className="inner_card">
                    <img src={Image1} alt="" />
                    <h6>Design</h6>
                    <div className="content">
                        <div className="card_content">
                            <h3>Learn with Shoaib</h3>
                            <p>Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</p>
                        </div>
                        <div className="stars">
                            <h4>3.9<IoStarSharp className='gold'/><IoStarSharp className='gold'/><IoStarSharp className='gold' /><IoStarSharp className='gold'/><IoStarSharp className='gold'/></h4>
                            <p>832</p>
                        </div>
                        <div className="logo">
                            <img src={Avatar1} alt="" />
                             <div className="desc">
                                <h3>Jenny Wilson</h3>
                                <p>2001 Enrolled</p>
                             </div>
                             <span>$8.99</span>

                        </div>
                    </div>
                </div>
                <div className="inner_card">
                    <img src={Image2} alt="" />
                    <h6>Design</h6>
                    <div className="content">
                        <div className="card_content">
                            <h3>Building User Interface..</h3>
                            <p>Learn how to apply User Experience (UX) principles to your website designs.</p>
                        </div>
                        <div className="stars">
                            <h4>4.2<IoStarSharp className='gold'/><IoStarSharp className='gold'/><IoStarSharp className='gold' /><IoStarSharp className='gold'/><IoStarSharp className='gold'/></h4>
                            <p>125</p>
                        </div>
                        <div className="logo">
                            <img src={Avatar2} alt="" />
                            <div className="desc">
                                <h3>Esther Howard</h3>
                                <p>2001 Enrolled</p>
                             </div>
                             <span>$11.70</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <a href="">Explore All Programs</a>
            </div>
        </div>
    </div>
  )
}

export default Explore