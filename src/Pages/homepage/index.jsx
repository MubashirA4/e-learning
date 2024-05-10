import React from 'react'
import '../homepage/style.css'
import Banner from './features/banner'
import Services from './features/our-services'
import Explore from './features/explore'
import Tutors from './features/tutors'
import Review from './features/review'
import Blogs from './features/blogs'

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <Services/>
        <Explore/>
        <Tutors/>
        <Review/>
        <Blogs/>
    </div>
  )
}

export default HomePage