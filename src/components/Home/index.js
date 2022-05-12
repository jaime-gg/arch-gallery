import React from 'react';
import './style.css'

function Home({ currentPage, handlePageChange }) {

    return (
        <section>
            <div className='justify-content-center'>
                <h3 className="text-center">Choose Your Path: </h3>
                <div className='home-arch row'>
                    <div className='col p-5'>
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active nav-link ' : 'nav-link '} >
                        <div className="first arch"></div>
                        </a>
                    </div>

                    <div className='col p-5'>
                        <a href="#gallery" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Gallery' ? 'active nav-link ' : 'nav-link '}>
                            <div className="second arch"></div>
                        </a>
                    </div>

                    <div className='col p-5'>
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active nav-link ' : 'nav-link '}>
                            <div className="third arch"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;