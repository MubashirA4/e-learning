import React from 'react'
import './css/style.css'
import Logo from './assets/image 2.png'

const Header = () => {
  return (
    <div className='Header'>
        <nav>
          <img src={Logo} alt="" />
          <div className="input">
          <input type="text"  placeholder="Want to learn?" className='inner_input'/>
          <button>Explore</button>
          </div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Courses</a></li>
            <li><a href="">Contact us</a></li>
            <li><a href="">FAQ's</a></li>
            <div className="signup"></div>
            <li><a href="">Signin</a></li>
            <button>Create Free account </button>
          </ul>
        </nav>
    </div>
  )
}

export default Header