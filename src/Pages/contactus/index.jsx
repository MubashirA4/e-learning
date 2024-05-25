import React from 'react'
import './style.css'
import Img from './assets/Rectangle 19.png'
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="pagewidth">
        <div className="form">
          <h2>Contact us</h2>
          <div className="inner-form">
            <form action="" method="get">
              <p>Leave us a message</p>
              <label htmlFor="">Name
                <input type="text" placeholder='First_Name Last_Name' />
              </label><br />
              <div className="email-form">
                <label htmlFor="">
                  <input type="email" name="" id=""  placeholder='Email Address'/>
                </label><br />
              </div>
              <label htmlFor="">
                <textarea name="" id="" rows="10" cols="64" placeholder='Your Message'></textarea>
              </label><br />
              <button>Send</button>
            </form>
            <div className="map">
              <p>Weekend UX <br />
                B 37/3 Ground Floor Double StoryRamesh Nagar , Near Raja Garden Chowk.Delhi: 110015</p>
                <h5>+91 9599272754</h5>
                <h6>hello@info.com.ng</h6>
                <div className="icon">
                  <IoLogoYoutube className='youtube'/>
                  <FaInstagram className='insta'/>
                  <FaFacebookF className='facebook'/>
                  <FaTwitter/>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.298303438773!2d74.3388960745426!3d31.51596597421601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458d32a5d45%3A0x8cbd6ce309877ba4!2sI.T.%20Tower!5e0!3m2!1sen!2s!4v1715525639448!5m2!1sen!2s" width='100%' height={250} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs