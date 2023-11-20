import React, { useState } from 'react';
import Header from './Header';
import "./EmergencyAlertChoices.css";


const Choices = () => {
    // State to track the user's choice
    const [userChoice, setUserChoice] = useState(null);

    // State for incident report form
    const [incidentReport, setIncidentReport] = useState({
        type: '',
        date: '',
        time: '',
        description: '',
    });

    // State to track whether Button 2 is clicked
    const [showAlerts, setShowAlerts] = useState(false);

    // Function to handle button click
    const handleButtonClick = (choice) => {
        setUserChoice(choice);

        // If Button 2 is clicked, show the list of alerts
        if (choice === 'Option 2') {
            setShowAlerts(true);
        } else {
            setShowAlerts(false);
        }
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIncidentReport((prevReport) => ({
            ...prevReport,
            [name]: value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission logic here, e.g., send the data to a server
        console.log('Incident Report:', incidentReport);
    };

    return (
        <div style={{ backgroundColor: '#213555' }}>
            <div>
                <Header />
                <img src={"fullbg.png"} alt="Background Image" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
            </div>
            <div className="popup-container">
                <div className="popup-box">
                    <img src={"BClogo.png"} alt="Logo Pop-up" className="popup-image" />

                    <div class="container">
                        {/* Button 1 */}
                        <button class="button button-submit" onClick={() => handleButtonClick('Option 1')}>
                            Option 1
                        </button>

                        <br />
                        {/* Button 2 */}
                        <button class="button button-emergency" onClick={() => handleButtonClick('Option 2')}>
                            Option 2
                        </button>

                        </div>

                        {/* Incident Report Form */}
                        {userChoice === 'Option 1' && (
                            <form onSubmit={handleSubmit}>
                                <label>Type of Incident:</label>
                                <input
                                    type="text"
                                    name="type"
                                    value={incidentReport.type}
                                    onChange={handleInputChange}
                                    required
                                />

                                <label>Date of Incident:</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={incidentReport.date}
                                    onChange={handleInputChange}
                                    required
                                />

                                <label>Time of Incident:</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={incidentReport.time}
                                    onChange={handleInputChange}
                                    required
                                />

                                <label>Describe the Incident:</label>
                                <textarea
                                    name="description"
                                    value={incidentReport.description}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>

                                <button type="submit">Submit</button>
                            </form>
                        )}

                        {/* Display alerts when Button 2 is clicked */}
                        {showAlerts && userChoice === 'Option 2' && (
                            <div>
                                <h2>List of Alerts:</h2>
                                {/* Render your actual list of alerts here */}
                                <p>Alert 1</p>
                                <p>Alert 2</p>
                                {/* ... (more alerts) */}
                            </div>
                        )}

                        {/* Display user's choice */}
                        {userChoice && (
                            <p>You chose: {userChoice}</p>
                        )}
                    </div>
                </div>
            </div>
    );
};

export default Choices;
