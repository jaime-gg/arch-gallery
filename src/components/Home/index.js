import React from 'react';
import './style.css'

function Home() {

    return (
        <section>
            <div className='justify-content-center'>
                <p className="text-center">Choose Your Path: </p>
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