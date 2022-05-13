import React from 'react';
import './style.css'

function Home({ currentPage, handlePageChange }) {

    return (
        <section>
            <div className='justify-content-center'>
                <h3 className="text-center">Choose Your Path: </h3>
                <div className='home-arch row'>
                    <div className='arch col p-4'>
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active nav-link ' : 'nav-link '} >
                            <h3 className="center-text">About Me</h3>
                        </a>
                    </div>

                    <div className='arch col p-4'>
                        <a href="#gallery" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Gallery' ? 'active nav-link ' : 'nav-link '}>
                            <h3 className="">Gallery</h3>
                        </a>
                    </div>

                    <div className='arch col p-4'>
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active nav-link ' : 'nav-link '}>
                            <h3 className="">Contact Me</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;