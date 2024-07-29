
import LoginForm from '../../components/LoginForm';
import Navigation from '../../components/Navigation';

import './css/styles.css';

const Login = () => {
    return (
        <section className='login-page'>
           <Navigation />
           <div className='login'>
            <div className='login-content'>
                <h2>Log in to Twirrer</h2>
                <form className='login-form'>
                    <input type='text' placeholder='phone, emai or username' />
                    <input type='password' placeholder='Password' />
                    <div>
                        <button type='button' className='login-form-btn'>Log In</button>
                        <input type='checkbox' className='login-form-checkbox' id='check'/>
                        <label htmlFor='check'>Remember me</label>
                        <a href='#'>Forgot password?</a>
                    </div>
                </form>
            </div>
            <footer className='login-footer'>
                <p>New to Twirrer? <a href='#'>Sign up now</a></p>
                <p>Already using Twitter via text message ? <a href='#'>Activate your account</a></p>
            </footer>
           </div>
        </section>
    )
}


export default Login;