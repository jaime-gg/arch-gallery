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
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-right">
                        <p className="fst-italic">
                            "Curabitur maximus et lacus vel egestas. Morbi commodo, libero at feugiat venenatis, tortor tortor commodo arcu, nec blandit lectus metus et quam." ~ Aenean Aliquam
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis non ligula mollis feugiat eu vitae felis. Nulla facilisi. Etiam tempus eleifend vulputate. Donec commodo luctus velit id viverra. Aliquam sit amet quam ligula.    
                        </p>
                        <p>
                            Integer condimentum purus mi, nec mollis nibh convallis quis. Donec quis maximus ligula. Nulla finibus massa sapien. Curabitur sagittis sapien at pellentesque congue. Nullam tempor efficitur sapien, sed tempor dolor cursus ac. Nullam erat diam, accumsan sed quam at, lobortis placerat erat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;