import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';

import Home from './components/Home'
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact'

import Footer from './components/Footer'

function App() {

    //SET UP THE ABOUT TO BE RENDERED ON INITIAL LOAD 
    const [currentPage, setCurrentPage] = useState('Home');

    //CONDTIONALLY RENDER EACH PAGE DEPENDING ON THE CURRENT-PAGE STATE
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home currentPage={currentPage} handlePageChange={handlePageChange} />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Gallery') {
            return <Gallery />;
        }
        return <Contact />;
    };

    // UPDATE DEPENDING ON PAGE
    const handlePageChange = (page) => setCurrentPage(page);

    // ALWAYS RENDER THE HEADER, HERO, AND FOOTER, THEN USE THE RENDERPAGE FUNCTION TO INSERT THE BODY CONTENT
    return (
        <div className="App">
            <header className="App-header row fixed-top">
                {/* THE FUNCTIONS WILL BE PUSHED TO THE NAV COMPONENT */}
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <main className='d-flex flex-column min-vh-100'>

                {renderPage()}

            </main>
            <footer className='row mt-auto'>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
