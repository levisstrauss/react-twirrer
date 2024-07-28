import React from "react";


import './css/styles.css'

const LoginForm = () => {
    return (
        <form className="right-content-form">
            <input 
                type="text" 
                className="user-info" 
                placeholder="Phone, email or username"
            />
            <div>
                <input type="password" className="password" placeholder="Password" />
                <label>Forgot Password?</label>
            </div>
            <button type="button" className="btn-top">Log in</button>
        </form>
    );
};

export default LoginForm;
