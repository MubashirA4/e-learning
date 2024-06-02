import React from 'react'
import './css/style.css'
import Logo from './assets/image 2.png'
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import { Link } from 'react-router-dom'
 
const Header = () => {
  return (
    <header className='container'>
      
      <div className="logo-otr">
      <img src={Logo} alt="" />
      </div>
        <div className="input">
          <input type="text" placeholder="Want to learn?" className='inner_input' />
          <FiSearch className='icon' />
          <div className="explore">
            <p>Explore</p>
            <IoIosArrowDown />
          </div>
        </div>
      <nav>
        <ul className='menu'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about_us"}>About us</Link></li>
          <li><Link to={"/courses"}>Courses</Link></li>
          <li><Link to={"contact_us"}>Contact us</Link></li>
          <li><Link to={"Faqs"}>FAQ's</Link></li>
          
        </ul>
      </nav>
      <div className="signup">
            <Link to={"sign_in"} className='signin'>Signin</Link>
            <Link to={"/sign_up"} className='cfa'>Create Free account</Link>
      </div>
    </header>
  )
}

export default Header