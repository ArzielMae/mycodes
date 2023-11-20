import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import "./EmergencyAlertChoices.css";

const Home = () => {
    return (
        <div style={{ backgroundColor: '#213555' }}>
            <div>
                {/* Header */}
                <Header />
                <img src={"fullbg.png"} alt="Background Image" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
            </div>
            <div className="popup-container">
                <div className="popup-box">
                    {/* Content inside the pop-up container */}
                    <img src={"BClogo.png"} alt="Logo Pop-up" className="popup-image" />
                    <div class="container">
                        <Link to="/button1">
                            <Button class="button button-submit" variant="contained" style={{ height: '70px', padding: '15px 150px', borderRadius: '10px', fontWeight: 'bold' }}>
                                Submit a Report Form
                            </Button>
                        </Link>
                        <br />
                        <span class="text" style={{ fontWeight: "bolder" }}>OR</span>
                        <br />
                        <Link to="/button2">
                            <Button class="button button-emergency" variant="contained" style={{ height: '70px', padding: '15px 150px', borderRadius: '10px', fontWeight: 'bold' }}>
                                See Emergency Alert
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;