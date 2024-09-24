import React from 'react'
import Logo from './assets/image 2.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaDribbble } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="page_width">
        <div className="inner_footer">
          <div className="column1">
            <Link to="/"><img src={Logo} alt="" /></Link>
            <p>Top learning experiences that create more talent in the world.</p>
          </div>
          <div className="column2">
            <ul>
              <li className='head'><h2>Product</h2></li>
              <li><Link to="/">Overview</Link></li>
              <li><Link to="/">Features</Link></li>
              <li><Link to="/">Solutions</Link></li>
              <li><Link to="/">Tutorials</Link></li>
              <li><Link to="/">Pricing</Link></li>
            </ul>
          </div>
          <div className="column2">
              <ul>
                <li className='head'><h2>Company</h2></li>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/">Careers</Link></li>
                <li><Link to="/">Press <span>New</span></Link></li>
                <li><Link to="/">News</Link></li>
              </ul>
          </div>
          <div className="column2">
              <ul>
                  <li className='head'><h2>Social</h2></li>
                  <li><Link to="/">Twitter</Link></li>
                  <li><Link to="/">LinkedIn</Link></li>
                  <li><Link to="/">GitHub</Link></li>
                  <li><Link to="/">Dribble</Link></li>
              </ul>
          </div> 
          <div className="column2">
              <ul>
                <li className='head'><h2>Legal</h2></li>
                <li><Link to="/">Terms</Link></li>
                <li><Link to="/">Privacy</Link></li>
                <li><Link to="/">Cookies</Link></li>
                <li><Link to="/">Contact</Link></li>
                </ul>
          </div>
        </div>
          <div className="rights">
            <p>&copy; 2022 Ed-Circle. All rights reserved.</p>
            <div className="icons">
            <Link><FaTwitter className='icons-1' size={24}/></Link>
            <Link><FaLinkedin className='icons-1'size={24}/></Link>
            <Link><FaFacebook className='icons-1'size={24}/></Link>
            <Link><IoLogoGithub className='icons-1'size={24}/></Link>
            <Link><FaDribbble size={24}/></Link>
            
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer