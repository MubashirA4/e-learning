import React from 'react'
import { Link } from 'react-router-dom'

const Benefits = () => {
  return (
    <div>
        <div className="benefits">
            <h3>Our Benefits</h3>
            <h4>By Joining WEEKENS UX Platform,<br /> One Can Avail a Lot Of Benefits.</h4>
            <p>Install our top-rated dropshipping app to your e-commerce site and get <br />access to US Suppliers, AliExpress vendors, and the best.</p>
        </div>
        <div className="cards">
            <div className="card-1">
                <h1>01</h1>
                <h3>Standardization</h3>
                <p>When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ... <Link to="/about_us">Read More</Link></p>
            </div>
            <div className="card-1">
                <h1>02</h1>
                <h3>Reduced Costs</h3>
                <p>With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ...  <Link to="/about_us">Read More</Link></p>
            </div>
            <div className="card-1">
                <h1>03</h1>
                <h3>More Customization</h3>
                <p>ust like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ...  <Link to="/about_us">Read More</Link></p>
            </div>
            <div className="card-1">
                <h1>04</h1>
                <h3>Affordable Pricing</h3>
                <p>With Weekend UX, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning ...  <Link to="/about_us">Read More</Link></p>
            </div>
            <div className="card-1">
                <h1>05</h1>
                <h3>Learner Satisfaction</h3>
                <p>If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ...  <Link to="/about_us">Read More</Link></p>
            </div>
            <div className="card-1">
                <h1>06</h1>
                <h3>Multimedia Materials</h3>
                <p>One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ...  <Link to="/about_us">Read More</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Benefits