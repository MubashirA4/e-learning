import React from 'react'
import Logo from '../assets/Mask group.png'
import Img from '../assets/Vector.png'
import Img1 from '../assets/Codecov (logo — Black).png'
import Img2 from '../assets/UserTesting (logo — Black).png'
import Img3 from '../assets/Vector (1).png'
import { RiSpeakLine } from "react-icons/ri";
import Career from '../assets/banner/career.png'
import Creative from '../assets/banner/creative.png'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import Ring from '../assets/Ring.png'
import { GiTeacher } from "react-icons/gi";
import { CgToolbox } from "react-icons/cg";
import { TbBulb } from "react-icons/tb";
import { BiColor } from 'react-icons/bi'



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
                <RiSpeakLine className='p_icon' size="40px"/>
                <p>Public Speaking</p>
              </div>
              <div className="public">
              <CgToolbox className='c_icon' size="40px"/>
              <p>Career oriented</p>
              </div>
              <div className="public">
                <TbBulb className='t_icon' size="40px"/>
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
            <div className="card-1">
              <HiOutlineDesktopComputer size={34} className="img" />
              <div className="card-cont">
                <h2>2K+</h2>
                <p>Video Courses</p>
              </div>
            </div>
            <div className="card-2">
              <img src={Ring} alt="" />
              <div className="card-cont">
                <h2>5K+</h2>
                <p>Online Courses</p>
              </div>
            </div>
            <div className="card-3">
              <GiTeacher size={34} className='img' />
              <div className="card-cont">
                <p>Tutors</p>
                <h2>250+</h2>
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