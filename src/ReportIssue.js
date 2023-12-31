import React, { useState } from 'react';
import "./ReportIssue.css";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Header from './Header';

export default function ReportIssue() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [incidentDetails, setIncidentDetails] = useState('');
    const [incidentType, setIncidentType] = useState('');
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can handle the form submission logic here, for example, sending the data to a server.

        // For now, let's just log the data to the console.
        console.log({
            date,
            time,
            location,
            incidentDetails,
            incidentType,
        });

        // Open the dialog
        setDialogOpen(true);

        // You can reset the form fields here if needed.
        // setDate('');
        // setTime('');
        // setLocation('');
        // setIncidentDetails('');
        // setIncidentType('');
    };

    const handleDialogClose = () => {
        // Close the dialog
        setDialogOpen(false);
    };

    const handleSubmitAnotherReport = () => {
        // Reset the form fields
        setDate('');
        setTime('');
        setLocation('');
        setIncidentDetails('');
        setIncidentType('');

        // Close the dialog
        setDialogOpen(false);
    };
    return (
        <div>
            <Header />
            <div class="label-voice">
                <h1>LET YOUR VOICE BE HEARD!</h1>
            </div>
            <div className='report-image'>
                <img src={"reportissuepic.png"} alt="Background Image" style={{ width: "15%", height: "30vh" }} />
            </div>
            <div class="text-voice">
                <p>Help us make our community a better place by reporting any issues <br />
                    or concerns you encounter. Whether it's about public services, safety, <br />
                    infrastructure, or any other matter, we want to hear from you. <br />
                    Your input plays a vital role in addressing and resolving community <br />
                    issues.
                </p>
                <p>
                    Our barangay officials and dedicated team will review your report <br />
                    promptly and take the necessary steps to resolve the issue. Your <br />
                    participation is crucial in maintaining the well-being of our community.
                </p>
                <p>
                    Your community, your app - Barangay Connect!
                </p>
            </div>
            <div className='report-label'>
                <div className="report-label-box">
                    <h1 style={{ color: "#fff", marginLeft: '10px' }}>REPORT AN ISSUE</h1>
                </div>
                <div className='report-issue'>
                    <div style={{ border: "2px solid #213555", padding: "3px", width: "870px", height: "540px" }}>
                        <form onSubmit={handleSubmit}>
                            {/* Type of Incident */}
                            <br />
                            <input
                                type="text"
                                value={incidentType}
                                onChange={(e) => setIncidentType(e.target.value)}
                                placeholder='Type of Incident.....'
                                required
                                className='incident-input'
                            />
                            <br />
                            <br />

                            {/* Date and Time */}
                            <label style={{ marginLeft: '10px' }}>
                                Date:
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    className='incident-date'
                                />
                            </label>

                            <label style={{ marginLeft: '10px' }}>
                                Time:
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                    className='incident-time'
                                />
                            </label>
                            <br />

                            {/* Exact Location */}
                            <br />
                            <br />
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder='Exact Location.....'
                                required
                                className='incident-location'
                            />
                            <br />
                            <br />

                            {/* Incident Details */}
                            <br />
                            <textarea
                                type="text"
                                value={incidentDetails}
                                onChange={(e) => setIncidentDetails(e.target.value)}
                                placeholder='Incident Details.....'
                                required
                                className='incident-incident-details'
                            />
                            <br />
                            <div className='button-submit'>
                                <Button
                                    variant="contained"
                                    style={{ color: '#FFFFFF', fontWeight: "bolder", backgroundColor: "#213555", width: '400px', height: '20px', padding: '15px 30px', borderRadius: '10px', textAlign: 'center' }}
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Dialog for submission confirmation */}
            <Dialog open={isDialogOpen} onClose={handleDialogClose} PaperProps={{ style: { backgroundColor: '#E0E0E0' } }}>
                <img src={"checkbutton.png"} alt="Check Button" className="checkbutton" />
                <DialogTitle style={{ margin: 'auto', textAlign: 'center', color: '#213555', fontWeight: 'bold', fontSize: '30px' }}>
                    Your Emergency Report has been submitted!
                </DialogTitle>
                <DialogActions>
                    <Button
                        style={{ backgroundColor: "#213555", marginBottom: "10px"}}
                        className="button-anotherreport"
                        onClick={handleSubmitAnotherReport}
                        variant="contained"
                    >
                        Another Report
                    </Button>

                    <Button
                        style={{ backgroundColor: "#213555", marginBottom: "10px"}}
                        className="button-backhome"
                        onClick={handleDialogClose}
                        variant="contained"
                    >
                        Back Home
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};