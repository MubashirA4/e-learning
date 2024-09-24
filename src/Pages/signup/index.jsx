import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='page_width'>
      <div className="signup-form">
        <div className="signup-img">
          <blockquote class="quote">
            <p>“Education is not the filling of a pail, but the lighting of a fire.”</p>
            <footer>- William Butler Yeats</footer>
          </blockquote>
        </div>
        <form action="">
          <h2>Signup & Start learning</h2>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <h3>Already have an account? <Link to="/sign_in">Log in</Link></h3>
          <button>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp