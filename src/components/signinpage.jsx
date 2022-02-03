
import './SigninPage.css';
import logo from './AK_logo.jpg'
import MuiPhoneNumber from 'material-ui-phone-number';

// function redirect(){
  
// }

function handleOnChange(value) {
  this.setState({
     phone: value
  });
}

function SignPage() {
    return (
  <div className="signin-home">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="text">
      <p className="react">Welcome Back</p>
      <p  className="signin-yourself">Please sign into your account</p>
    </div>
    
    
    <div className="inputbox-main">
      <div className="inputbox-header">
        <p className="contact-text">Enter Contact Number</p>
      </div>
      
       
      </div>
    <div className="inputbox-1">
      <div className="phone-number">
     <MuiPhoneNumber defaultCountry={'us'} />
      </div>
    </div>
    
    
    <div className="otp-alert">
      <p>We will send you a one time SMS message.Charges may apply.</p>
    </div>
    <button className="button" onClick={event =>  window.location.href='/otp'}>Sign In with OTP</button>
  </div>
    );
  }
  
  export default SignPage;



    

 
 