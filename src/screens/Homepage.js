import React, { useState } from 'react';
import '../styles/App.css'; // Import your CSS file for styling

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container">
            <div className="video-container">
                <video className="video" autoPlay loop muted>
                    <source src={process.env.PUBLIC_URL + '/Hair.mp4'} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="beat-hair-loss-text">
                    <div style={{ color: 'white' }}>Beat Hair Loss with</div>
                    <div style={{ color: 'lightgreen' }}>Scalp Micropigmentation</div>
                    <p style={{ whiteSpace: 'pre-line', color: 'white' }}>Scalp Micropigmentation is a highly effective, non-invasive, low maintenance solution to hair loss that{'\n'}delivers immediate, long term results.</p>
                    <button className="free-quote-button">GET A FREE QUOTE</button>
                </div>
            </div>
            <div className="content">
                <div className="top-bar">
                    <div className="logo-container">
                        {/* Logo image from the public folder */}
                        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" />
                    </div>
                    <div className="options">
                        <ul>
                            <li><a href="#">Treatments</a></li>
                            <li><a href="#">Trainings</a></li>
                            <li><button className="consultation-button">Book a Free Consultation</button></li>
                        </ul>
                    </div>
                    <div className="drawer-icon" onClick={toggleMenu}>
                        {/* Menu icon */}
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                        <div className="menu-icon"></div>
                    </div>
                </div>
                {menuOpen && (
                    <div className="menu-screen">
                        {/* Menu items */}
                        <ul>
                            <li><a href="#">Item 1</a></li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};  

export default HomePage;
