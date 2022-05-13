import React from 'react';
import('./style.css')

function Gallery() {

    return (
        <section id="gallery" className="gallery">
            <div className="container">

                <div>
                    <h2>Gallery</h2>
                    <p>Donec eget risus a erat blandit sagittis. Nullam commodo lobortis ullamcorper. Phasellus ut bibendum erat. Curabitur nec felis ut augue interdum feugiat. Nunc vitae elit id nisi faucibus congue. Fusce vitae sem mi. </p>
                    <p>Vestibulum accumsan eros ut accumsan maximus. Nunc dui est, dictum ut cursus at, faucibus non turpis. Sed mauris massa, faucibus elementum tempus fringilla, viverra id sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in eros laoreet, porttitor odio ac, porttitor metus. Pellentesque at tellus a velit maximus faucibus..</p>
                </div>

                <div className="row gallery-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 gallery-item">
                        <div className="gallery-wrap">
                            <img src={require('../../Assets/gallery/gallery-1.png')} className="img-fluid" alt="" />
                            <div className="gallery-links">
                                <a href="https://github.com/jaime-gg/project1" title="View Github"><i className="bx bxl-github"></i></a>
                                <a href="https://jaime-gg.github.io/project1/" title="View Page"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 gallery-item">
                        <div className="gallery-wrap">
                            <img src={require('../../Assets/gallery/gallery-2.png')} className="img-fluid" alt="" />
                            <div className="gallery-links">
                                <a href="https://github.com/jaime-gg/tech-blog" title="View Github"><i className="bx bxl-github"></i></a>
                                <a href="https://um-technically-blog.herokuapp.com/" title="View Page"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 gallery-item">
                        <div className="gallery-wrap">
                            <img src={require('../../Assets/gallery/gallery-3.png')} className="img-fluid" alt="" />
                            <div className="gallery-links">
                                <a href="https://github.com/jaime-gg/storeEZ" title="View Github"><i className="bx bxl-github"></i></a>
                                <a href="https://store-ez.herokuapp.com/" title="View Page"><i className="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Gallery;