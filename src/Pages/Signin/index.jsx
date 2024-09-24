import React from 'react'
import Image from './assets/image.jpg'
import { IoMdMail } from "react-icons/io";
import { IoLockClosedSharp } from "react-icons/io5";

const Signin = () => {
  return (
    <div className='page_width'>
      <div className="login">
        <form action="">
          <h2>Sign In</h2>
          <div className="email">
          <IoMdMail className='e-icon'/>
          <input type="email" placeholder="Email or Phone" />
          </div>
          <div className="email">
          <IoLockClosedSharp className='e-icon'/>
          <input type="password" name="" id="" placeholder='Password'/>
          </div>
          <button>Sign in</button>
        </form>
        <div className="log-img">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Signin