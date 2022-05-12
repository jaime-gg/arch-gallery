import React from 'react';
import './style.css'

function Home() {

    return (
        <section>
            <div>
                <h3> wow so cool</h3>
                <p>this is content</p>
                <div className='row'>
                    <div className='col p-5'>
                        <div className="arch"></div>
                    </div>

                    <div className='col p-5'>
                        <div className="arch"></div>
                    </div>

                    <div className='col p-5'>
                        <div className="arch"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;