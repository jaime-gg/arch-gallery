import React from 'react';
import './style.css';

function Footer() {

    return (
        <section id="footer" className="footer">
            <div className="container">
                <div className="container" >
                    <div className=" row d-flex  justify-content-center align-items-stretch info">
                        <div className="github col-lg-3 col-md-4 col-sm-12 c-item">
                            <a href='https://github.com/jaime-gg'><i className='bx bxl-github' ></i></a>
                            <h4>Github User:</h4>
                            <p> <a href='https://github.com/jaime-gg'>Jaime-gg</a></p>
                        </div>

                        <div className="email col-lg-3 col-md-3 col-sm-12 c-item">
                            <a href='mailto:jaimegg.ai@gmail.com'> <i className='bx bxs-envelope' ></i></a>
                            <h4>Email:</h4>
                            <p><a href='mailto:jaimegg.ai@gmail.com'>jaimegg.ai@gmail.com</a></p>
                        </div>

                        <div className="github col-lg-3 col-md-3 col-sm-12 c-item">
                            <a href="https://www.linkedin.com/in/jaime-gallegos/"> <i className='bx bxl-linkedin' ></i></a>
                            <h4>Visit:</h4>
                            <p> <a href="https://www.linkedin.com/in/jaime-gallegos/"> LinkedIn.com </a> </p>
                        </div>

                        <div className="github col-lg-3 col-md-3 col-sm-12 c-item">
                            <a href="https://twitter.com/JaimeGrey_"> <i className='bx bxl-twitter' ></i></a>
                            <h4>Follow Me:</h4>
                            <p> <a href="https://twitter.com/JaimeGrey_"> @JaimeGrey_ </a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;