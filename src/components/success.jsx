import react from "react";
import logo from './success.jpg'

import './success.css';

function SuccessPage() {
    return (
        <div className="signin-home">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="welcome">
            <p>Welcome to AdmitKard</p>
            </div>
        <div className="welcome-text">
            <p>In order to provide you with 
            a custom experience,
            we need to ask you a few questions.</p>
        </div>
        <div >
        <a href="/#" class="button">Get Started</a>
        </div>
        <div className="end">
            <p>*This will only take 5 min.</p>
        </div>
        </div>
          );
        }
        
  
  export default SuccessPage;