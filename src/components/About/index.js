import React from 'react';

function About() {

    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row">
                    <h2>About</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src={require('../../Assets/profile-img.jpg')} className="img-fluid" alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default About;