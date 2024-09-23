import React from 'react';
import '../styles/style.css';
import panditji from '../assets/img/panditji.png';
import google from '../assets/img/google.png';
import apple from '../assets/img/apple.png';


function Login() {
    return (
        <div>
            <div className="login-form">
                <h1 style={{color:"#fff"}}>Login</h1>
                <div className="container">
                    <div className="main">
                        <div className="content">
                            <h2>Log In</h2>
                            <form action="#" method="post">
                                <p className="helpText text-left box-text-content">Enter your mobile number</p>
                                <input type="text" name="" placeholder="Enter your mobile number" required style={{border: "1px solid #d4d4d4"}} />
                                <button className="btn" type="submit">
                                    GET OTP
                                </button>
                            </form>
                            <p className="account"> By signing up, I agree to the <a href="#"><b>Privacy Policy,Terms and Conditions.</b></a></p>
                        </div>
                        <div className="form-img">

                            <p className="para1">Talk To India's Best Astrologers </p>
                            <p className="para2">First Consultaion at &#8377; 5 only </p>
                            <div className="panditjiimg">
                                <img src={panditji} alt="icon" />
                            </div>
                            <div className="iconimg">
                                <a href="#"><img src={google} alt="google" className="img2" /></a>
                                <a href="#"><img src={apple} alt="apple" className="img2" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
