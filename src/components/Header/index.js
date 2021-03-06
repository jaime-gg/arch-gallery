import React from 'react';
import './style.css';
import archImg from '../../Assets/arch.png'

// PULL IN THE NESSESSARY PROPS
function Header({ currentPage, handlePageChange }) {
    const renderNav = () => {
        if (currentPage === 'Home') {
            return (
                <nav id="navbar" className="nav-menu navbar1">
                    <a className='justify-content-center a-logo' href='/'>
                        <img src={archImg} className="logo" />
                    </a>
                    <h3> THE ARCH GALLERY BIDS YOU WELCOME</h3>
                </nav>
            );
        }
        return (
            <nav id="navbar" className="nav-menu navbar1">
                <a className='justify-content-center a-logo' href='/'>
                    <img src={archImg} className="logo" />
                </a>
                <ul className='justify-content-center'>
                    <li>
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active nav-link ' : 'nav-link '} >
                            <span>About Me</span>
                        </a>
                    </li>

                    <li>
                        <a href="#gallery" onClick={() => handlePageChange('Gallery')} className={currentPage === 'Gallery' ? 'active nav-link ' : 'nav-link '}>
                            <span>Gallery</span>
                        </a>
                    </li>

                    <li>
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active nav-link ' : 'nav-link '}>
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    };


    return (
        <nav>
                {renderNav()}
        </nav>
    )
}

export default Header;