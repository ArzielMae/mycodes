import React, { useState } from 'react';
import Header from "./Header";


const EmergencyHotline = () => {
    // Sample list of hotlines
    const hotlines = [
        { id: 1, name: 'Emergency Hotline', number: '911' },
        { id: 2, name: 'Mental Health Helpline', number: '1-800-XXX-XXXX' },
        { id: 3, name: 'Domestic Violence Hotline', number: '1-800-XXX-XXXX' },
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
                    <div style={{ marginRight: '40%', backgroundColor: '#213555', width: '70%', padding: '10px', marginLeft: 'auto' }}>
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

export default EmergencyHotline;
