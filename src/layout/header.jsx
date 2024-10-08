import React,{useState} from 'react'
import './css/style.css'
import Logo from './assets/image 2.png'
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Header = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <div className="page_width">
 <header>
      <div className="logo-otr"> 
        <Link to="/"><img src={Logo} alt="" /></Link>
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
        {showMenu == true ? <FaTimes/> :<HiOutlineBars3 />  }
      </div>
      <div className={`bar_menu ${showMenu == true ? 'show_menu' : 'hide_menu'}`}>
      <nav>
        <ul className="menu">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about_us"}>About us</Link></li>
          <li><Link to={"/"}>Courses</Link></li>
          <li><Link to={"contact_us"}>Contact us</Link></li>
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
    </div>
   
  )
}

export default Header