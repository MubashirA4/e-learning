import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import WebDesign from './assets/web design.jpg'
import WebDev from './assets/web dev.jpg'
import GameDev from './assets/game dev.jpg'
import AppDev from './assets/app design.jpg'
import Marketing from './assets/marketing.jpg'
import Research from './assets/research.jpg'
import ContentWrite from './assets/content creating.jpg'
import Seo from './assets/seo.jpg'

const Courses = () => {
  return (
    <div className="page_width">
    <div className='courses'>
      <div className="subjects">
        <h2>SUBJECTS</h2>
        <h4>Explore Top Subjects</h4>
        <div className="row">
          <div className="cat">
            <img src={WebDesign} alt="" />
              <Link to="/courses">
                <h4>Web Design</h4>
                <p>100 Courses</p>
              </Link>
          </div>
          <div className="cat">
            <img src={WebDev} alt="" />
              <Link to="/courses">
                <h4>Development</h4>
                <p>100 Courses</p>
              </Link>
          </div>
          <div className="cat">
            <img src={GameDev} alt="" />
              <Link to="/courses">
                <h4>Game Design</h4>
                <p>100 Courses</p>
              </Link>
          </div>
          <div className="cat">
            <img src={AppDev} alt="" />
              <Link to="/courses">
                <h4>App Design</h4>
                <p>100 Courses</p>
              </Link>
          </div>
          <div className="cat">
            <img src={Marketing} alt="" />
              <Link to="/courses">
                <h4>Marketing</h4>
                <p>100 Courses</p>
              </Link>
          </div>
          <div className="cat">
            <img src={Research} alt="" />
              <Link to="/courses">
                <h4>Research</h4>
                <p>100 Courses</p>
              </Link>
          </div>
          <div className="cat">
            <img src={ContentWrite} alt="" />
              <Link to="/courses">
                <h4>Content Writing</h4>
                <p>100 Courses</p>
              </Link>
          </div>
          <div className="cat">
            <img src={Seo} alt="" />
              <Link to="/courses">
                <h4>SEO</h4>
                <p>100 Courses</p>
              </Link>
          </div>
        </div>
      </div> 
    </div>
  </div>
  )
}

export default Courses