import React from 'react'
import Frame3 from '../assets/Frame 1.png'
import Frame2 from '../assets/Frame 2.png'
import Frame1 from '../assets/Frame 3.png'
import { MdOutlineNavigateNext } from "react-icons/md";

 
const Services = () => {
  return (
    <div className='our_services'>
        <div className="page_width">
            <div className="services">
                <h3>Our Services</h3>
                <h2>Fostering a playful & engaging learning <br /> environment</h2>    
            </div>  
            <div className="service-detail">
                <div className="card1">
                    <div className="card-img">
                        <img src={Frame1} alt="" />
                        <h4>Interaction Design</h4>
                    </div>
                    <p>Lessons on design that cover the most recent developments.</p> 
                    <button>Learn More  <MdOutlineNavigateNext  size={24} className='Lm'/></button>   
                </div>    
                <div className="card2">
                    <div className="card-img">
                        <img src={Frame2} alt="" />
                        <h4>UX Design Course</h4>
                    </div>
                    <p>Lessons on design that cover the most recent developments.</p>    
                    <button>Learn More <MdOutlineNavigateNext size={24} className='Lm'/></button>   
                </div>    
                <div className="card2">
                    <div className="card-img">
                        <img src={Frame3} alt="" />
                        <h4>User interface design</h4>
                    </div>
                    <p>Lessons on design that cover the most recent developments.</p>   
                    <button>Learn More  <MdOutlineNavigateNext size={24} className='Lm'/></button>    
                </div>    
            </div>  
        </div>
    </div>
  )
}

export default Services