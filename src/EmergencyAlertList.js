import React, { useState } from 'react';
import "./ReportIssue.css";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Header from './Header';
import "./EmergencyAlertChoices.css";

const EmergencyAlertList = () => {

    const hotlines = [
        { id: 1, name: 'Barangay Hall', number: '249-1564' },
        { id: 2, name: 'Barangay Ambulance', number: '254-1445' },
        { id: 3, name: 'Tisa Fire Station', number: '345-7889' },
        { id: 4, name: 'Tisa Police Station', number: '455-1224' },
        { id: 5, name: 'Tisa Health Center', number: '249-1564' },
        { id: 6, name: 'Tisa Traffic Enforcement Service', number: '859-9999' },
        { id: 7, name: 'Tisa Water System', number: '789-4134' },
        // Add more hotlines as needed
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [alertText, setAlertText] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleHotlineClick = () => {
        setAlertText('Alert! Hotline clicked!');
    };

    return (
        <div>
            <div>
                {/* Header */}
                <Header />
                <div style={{ display: 'flex' }}>
                    {/* Left side: Hotline List */}
                    <div style={{ marginRight: '1000px', backgroundColor: '#213555', width: '35%', padding: '10px', marginLeft: 'auto' , height: '635px'}}>
                        <h2 style={{ color: '#fff' }}>Hotlines</h2>
                        <input
                            type="text"
                            placeholder="Search hotlines"
                            value={searchTerm}
                            onChange={handleSearch}
                            style={{
                                width: '100%',
                                maxWidth: '100%',
                                padding: '8px',
                                boxSizing: 'border-box',
                                marginTop: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                backgroundColor: '#fff',
                                color: '#333',
                                outline: 'none',
                            }}
                        />
                        <ul>
                            {hotlines
                                .filter((hotline) =>
                                    hotline.name.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((hotline) => (
                                    <li key={hotline.id} onClick={handleHotlineClick}>
                                        {hotline.name} - {hotline.number}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmergencyAlertList;
