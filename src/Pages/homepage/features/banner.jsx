import React from 'react'
import Logo from '../assets/image1.png'
const Banner = () => {
  return (
    <div className='banner'>
        <div className="page_width">
          <div className="inner_banner">
            <div className="content">
              <h2>Up Your <span>Skills</span> To <span>Advance</span> Your <span>Career</span> Path</h2>
              <p>Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.</p>
              <div className="buttons">
                <div className="getstarted">
                  <button>Get started</button>
                </div>
                <div className="details">
                  <button>Get Free trial</button>
                </div>
              </div>
              <div className='bar'>
                <p>Public Speaking</p>
                <p>Career oriented</p>
                <p>Creative thinking</p>
              </div>
            </div>
            <div className="banner_image">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner