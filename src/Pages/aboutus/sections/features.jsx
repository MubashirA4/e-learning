import React from 'react'
import Img from '../assets/Section Img.png'
const Features = () => {
  return (
    <div className='pagewidth'>
        <div className="features">
            <div className="feature-img">
                <img src={Img} alt="" />
            </div>
            <div className="feature-content">
                <h5>Features</h5>
                <h3>We are always working to provide you best of the features in all aspects.</h3>
                <p>At WEEKENDUX the chief determination is to clear the minds of our students about their goals, while making them consistent in their ambitions and pushing them to be confident for their journey towards the course of time.</p>
                
                <div className="btn">
                    <p>You will find every little thing on the internet in just a click of hand, but here we admire that without knowledge and practice the internet may even also fail you in your life.</p>
                    <a href="">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features