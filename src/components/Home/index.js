import React, { Require } from 'react';
import './style.css'
import archImg from '../../Assets/arch.png'

function Home({ currentPage, handlePageChange }) {

    return (
        <section>
            <div className='justify-content-center'>
                <h3 className="text-center">Choose Your Path: </h3>
                <div className='home-arch row h-100'>
                    <div className='arch col p-4 d-flex justify-content-center text-center'>
                        <img src={archImg} />
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active nav-link ' : 'nav-link '} >
                            <h3 className="main-title">About Me</h3>
                        </a>
                    </div>

                    <div className='arch col p-4 d-flex justify-content-center text-center'>
                        <img src={archImg} />
                        <a href="#gallery" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Gallery' ? 'active nav-link ' : 'nav-link '}>
                            <h3 className="main-title">Gallery</h3>
                        </a>
                    </div>

                    <div className='arch col p-4 d-flex justify-content-center text-center'>
                        <img src={archImg} />
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active nav-link ' : 'nav-link '}>
                            <h3 className="main-title">Contact Me</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;