import React,{useState} from 'react'
import './css/style.css'
import Logo from './assets/image 2.png'
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu,setShowMenu] = useState(false)

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
      <div className="bars" onClick={() => setShowMenu(!showMenu)}>
        <HiOutlineBars3 />
      </div>
      <div className={`bar_menu ${showMenu == true ? 'show_menu' : 'hide_menu'}`}>
      <nav>
        <ul className="menu">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about_us"}>About us</Link></li>
          <li><Link to={"/courses"}>Courses</Link></li>
          <li><Link to={"contact_us"}>Contact us</Link></li>
          <li><Link to={"Faqs"}>FAQ's</Link></li>
        </ul>
      </nav>
      <div className="signup">
        <ul>
        <li><Link to={"sign_in"} className='signin'>Signin</Link></li>
        <li><Link to={"/sign_up"} className='cfa'>Create Free account</Link></li>
        </ul>
      </div>
      </div>
    </header>
  )
}

export default Header