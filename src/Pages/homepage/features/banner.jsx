import React from 'react'
import Logo from '../assets/Mask group.png'
import Img from '../assets/Vector.png'
import Img1 from '../assets/Codecov (logo — Black).png'
import Img2 from '../assets/UserTesting (logo — Black).png'
import Img3 from '../assets/Vector (1).png'
import { RiSpeakLine } from "react-icons/ri";
import Career from '../assets/banner/career.png'
import Creative from '../assets/banner/creative.png'

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
                <div className="public">
                  <RiSpeakLine/> 
                  <p>Public Speaking</p>
                </div>
                <div className="career">
                  <img src={Career} alt="" />
                  <p>Career oriented</p>
                </div>
                <div className="creative">
                  <img src={Creative} alt="" />
                  <p>Creative thinking</p>
                </div>
              </div>
            </div>
            <div className="banner_image">
                <div className="inimag">
                  <img src={Logo} alt="" />
                  <div className="circle_border">

                  </div>
                </div>
            </div>
          </div>
            <div className="block">
              <div className="colab">
                <h2>250+</h2>
                <p>Collaboration</p>
              </div>
              <div className="duo">
                <a href="#">
                  <img src={Img} alt="" />
                  </a>
              </div>
              <div className="cov">
                <a href="#">
                <img src={Img1} alt="" />
                </a>
              </div>
              <div className="test">
                <a href="#">
                  <img src={Img2} alt="" />
                </a>
              </div>
              <div className="magic">
                <a href="#">
                  <img src={Img3} alt="" />
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner