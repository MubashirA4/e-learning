import React from 'react'
import './css/style.css'
import Logo from './assets/image 2.png'
import { FiSearch } from "react-icons/fi";

import { Link } from 'react-router-dom'

const Header = () => {
  return ( 
    <div className='Header'>
        <nav>
          <img src={Logo} alt="" />
          <div className="input">
         
          <input type="text"  placeholder="Want to learn?" className='inner_input'/>
          <FiSearch className='icon'/>
          <p>Explore</p>
          </div>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about_us"}>About us</Link></li>
            <li><Link to={"/courses"}>Courses</Link></li>
            <li><Link to={"contact_us"}>Contact us</Link></li>
            <li><Link to={"Faqs"}>FAQ's</Link></li>
            <div className="signup">
              <li><Link to={"sign_in"}>Signin</Link></li>
              <button><Link to={"/sign_up"}>Create Free account</Link> </button>
            </div>
          </ul>
        </nav>
    </div>
  )
}

export default Header