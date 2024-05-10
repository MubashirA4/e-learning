import React from 'react'
import Logo from '../../../layout/assets/image 2.png'
import Img from '../assets/review.png'

const Review = () => {
  return (
    <div className='review'>
        <div className="page_width">
            <div className="inner_review">
                <img src={Logo} alt="" />
                <h3>Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.</h3>
                <img src={Img} alt="" />
                <h5>Jacob Jones</h5>
                <p>Student, National University</p>
            </div>
        </div>
    </div>
  )
}

export default Review