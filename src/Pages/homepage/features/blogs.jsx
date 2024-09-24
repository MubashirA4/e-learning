import React from 'react'
import Blog1 from '../assets/Blogs/blog 1.png'
import Blog2 from '../assets/Blogs/blog 2.png'
import Blog3 from '../assets/Blogs/blog 3.png'
import { Link } from 'react-router-dom'

const Blogs = () => {
    return (
        <div className='page_width'>
            <div className="blog">
                <h3>Our recent blogs</h3>
                <div className="inner_blog">
                    <div className="blog-1 blog-left">
                        <div className="blog-content">
                            <img src={Blog1} alt="" />
                            <div className="blog-desc">
                                <h6>November 16, 2014</h6>
                                <h4>Three Pillars of User Delight</h4>
                                <p>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
                                <div className="imgs">
                                    <Link to="/" className='research'>Research</Link>
                                    <Link to="/" className='uiux'>UI UX</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-2 blog-left">
                        <div className="blog-content space">
                            <img src={Blog2} alt="" />
                            <div className="blog-desc">
                                <h6>September 24, 2017</h6>
                                <h4>UX Mapping Methods</h4>
                                <p>Visual-design principles can be applied consistently throughout the process of creating a polished UX map...</p>
                                <div className="imgs">
                                    <Link to="/" className='research'>Research</Link>
                                    <Link to="/" className='uiux'>UI Design</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-3 blog-right">
                        <img src={Blog3} alt="" />
                        <div className="blog-desc">
                            <h6>March 13, 2014</h6>
                            <h4>Agile Development Projects and Usability</h4>
                            <p>Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. </p>
                            <div className="imgs">
                                <Link to="/" className='prog'>Programming</Link>
                                <Link to="/" className='research'>Research</Link>
                                <Link to="/" className='devel'>Developments</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs