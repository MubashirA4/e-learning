import React from 'react'
import Logo from './assets/image 2.png'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="page_width">
        <div className="inner_footer">
          <div className="column1">
            <img src={Logo} alt="" />
            <p>Top learning experiences that create more talent in the world.</p>
          </div>
          <div className="column2">
            <ul>
              <li className='head'><a href="#">Product</a></li>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="column2">
              <ul>
                <li className='head'><a href="#">Company</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press <span>New</span></a></li>
                <li><a href="#">News</a></li>
              </ul>
          </div>
          <div className="column2">
              <ul>
                  <li className='head'><a href="#" >Social</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">Dribble</a></li>
              </ul>
          </div>
          <div className="column2">
              <ul>
                <li className='head'><a href="#">Legal</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
          </div>
        </div>
          <div className="rights">
            <p>&copy; 2022 Ed-Circle. All rights reserved.</p>
            <div className="icons">
            <FaTwitter className='icons-1' size={24}/>
            <FaLinkedin className='icons-1'size={24}/>
            <FaFacebook className='icons-1'size={24}/>
            <IoLogoGithub className='icons-1'size={24}/>
            <FaDribbble size={24}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer