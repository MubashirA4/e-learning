import React from 'react'
import Tutor from '../assets/tutor.png'
import Tutor1 from '../assets/tutor (1).png'
import Tutor2 from '../assets/tutor (2).png'
import Tutor3 from '../assets/tutor (3).png'
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Tutors = () => {
  return (
    <div className='tutor'>
        <div className="page_width">
            <div className="intro">
                <h5>Tutors</h5>
                <h3>Meet the Heroes</h3>
                <p>On Weekend UX, instructors from all over the world instruct millions of students. <br /> We offer the knowledge and abilities.</p>
            </div>
            <div className="intro-card">
                <div className="card-details">
                    <img src={Tutor} alt="" />
                    <h4>Theresa Webb</h4>
                    <h6>Application Support Analyst Lead</h6>
                    <p>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>   
                    <FaTwitter className='twitt'/><FaLinkedin className='linke' />
                </div>
                <div className="card-details">
                    <img src={Tutor1} alt="" />
                    <h4>Courtney Henry</h4>
                    <h6>Director, Undergraduate Analytics and Planning</h6>
                    <p>Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>   
                    <FaTwitter className='twitt'/><FaLinkedin className='linke' />
                </div>
                <div className="card-details">
                    <img src={Tutor2} alt="" />
                    <h4>Albert Flores</h4>
                    <h6>Career Educator</h6>
                    <p>Former PM for Linear, Lambda School, and On Deck.</p>   
                    <FaTwitter className='twitt'/><FaLinkedin className='linke' />
                </div>
                <div className="card-details">
                    <img src={Tutor3} alt="" />
                    <h4>Marvin McKinney</h4>
                    <h6>Co-op & Internships Program & Operations Manager</h6>
                    <p>Former frontend dev for Linear, Coinbase, and Postscript.</p>   
                    <FaTwitter className='twitt'/><FaLinkedin className='linke' />
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Tutors