import React from 'react'
import Rectangle1 from '../assets/Rectangle 1.png'
import Rectangle2 from '../assets/Rectangle 2.png'
import { Link } from 'react-router-dom';
 
const Joinus = () => {
  return (
    <div className="pagewidth">
          <div className='joinus'>
            <div className="join-content">
                <h2>About Us</h2>
                <h4><span>WEEKEND UX</span> providing the best opportunities to the students around the glob.</h4>
                <p>Weekend UX, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design/ User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening up your skills, for your golden future</p>
                <Link to ="/sign_up">Join Us</Link>
            </div>
            <div className="join-images">
                <div className="rectangle">
                  <img src={Rectangle2} alt="" className="rectangle1" />
                  <img src={Rectangle1} alt="" className="rectangle2" /><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Joinus