import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
        
            <nav class="navbar navbar-expand-lg navbar-light bg-info text-light">
                <div class="container-fluid">

                    <a class="navbar-brand fs-2 fw-bold" id='title' href="#">NewsWeb</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav" id='navbar-ul'>
                           
                            <li class="nav-item">
                                <a class="nav-link active"  aria-current="page" href="#"><Link id='news-links' className='sravya-link' to='/Home'>Home</Link></a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><Link id='news-links' to='/Business'>Business</Link></a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><Link id='news-links' to='/Entertainment'>Entertainment</Link></a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><Link id='news-links' to='/General'>General</Link></a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><Link id='news-links' to='/Health'>Health</Link></a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><Link id='news-links' to='/Science'>Science</Link></a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><Link id='news-links' to='/Sports'>Sports</Link></a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><Link id='news-links' to='/Technology'>Technology</Link></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        // <div className='newslinks'>
        //     <ul>
        //         <li><Link id='linkid' to='/Home'>Home</Link></li>
        //         <li><Link id='linkid' to='/Business'>Business</Link></li>
        //         <li><Link id='linkid' to='/Entertainment'>Entertainment</Link></li>
        //         <li><Link id='linkid' to='/General'>General</Link></li>
        //         <li><Link id='linkid' to='/Health'>General</Link></li>
        //         <li><Link id='linkid' to='/Science'>Science</Link></li>
        //         <li><Link id='linkid' to='/Sports'>Sports</Link></li>
        //         <li><Link id='linkid' to='/Technology'>Technology</Link></li>

        //     </ul>
        // </div>
    )
}

export default Navbar