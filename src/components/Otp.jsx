import React, { useState } from 'react';
import './Otp.css';
import glove from './otp.jpg'


import OtpInput from 'react-otp-input';


function handleOTP(evt) {
  console.log("new value", evt);
  if (evt =="1234"){
    window.location.href='/succeess' ;

  }
  else {
    alert("invalid otp");
    
  }
  
}






function Otppage() {
 
 

  const [OTP, setOTP] = useState("");
  function handleChange(evt) {
    setOTP(evt);
    
  }

  return (
    <div className="otp-home">
      <div className="logo">
        <img src={glove} alt="Logo" />
      </div>
      <div>
        <div className="verify-text">
          <p>Please verify Mobile number</p>
        </div>
        <div className="otp-sent">
          <p>An OTP is sent to +91##########</p>


        </div>
        <div className="change-number">
          <a href="#">Change Phone Number</a>
        </div>
      </div>


      <div className="input-field">
        <OtpInput className="inputfield-1"
          value={OTP}
          onChange={handleChange}

          numInputs={4}
          separator={<span>-</span>}
        />

      </div>
      <button className="button" onClick={ () => handleOTP(OTP) }>Sign In with OTP</button>
    </div>
  );
}

export default Otppage;






