import React from "react";

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
                <label className="">Forgot Password?</label>
            </div>
            <button type="button" className="btn-top">Log in</button>
        </form>
    );
};

export default LoginForm;
