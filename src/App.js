
import './App.css';

import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import SignPage from './components/signinpage';
import Otppage from './components/Otp';
import SuccessPage from './components/success';
function App() {
  return (
  
  <Router>
    <div className="App">
      
      <Routes>
       
        <Route path='/' element={<SignPage/>} />
        <Route path='/otp' element={<Otppage/>} />
        <Route path='/succeess' element={<SuccessPage/>} />
      </Routes>
    </div>
  </Router>

  );
}

export default App;
