import { Grid, Menu, MenuItem, Link, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import "./EmergencyAlertChoices.css";
import Header from "./Header";

export default function EmergencyAlertChoices() {

    const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
    const [calendarAnchorEl, setCalendarAnchorEl] = useState(null);

    const handleAboutClick = (event) => {
        setAboutAnchorEl(event.currentTarget);
    };

    const handleCalendarClick = (event) => {
        setCalendarAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAboutAnchorEl(null);
        setCalendarAnchorEl(null);
    };

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
                        <Button class="button button-submit" variant="contained" style={{ height: '70px', padding: '15px 30px', borderRadius: '10px' }}>Submit a Report Form</Button>
                        <br />
                        <span class="text" style={{ fontWeight: "bolder" }}>OR</span>
                        <br />
                        <Button class="button button-emergency" variant="contained" style={{ height: '70px', padding: '15px 30px', borderRadius: '10px' }}>See Emergency Reports</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}