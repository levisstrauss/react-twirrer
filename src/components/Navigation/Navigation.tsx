import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from "@fortawesome/free-solid-svg-icons";


import './css/styles.css';


const Navigation = () => {
    return (
        <nav className='login-page-nav'>
            <ul>
                <li className='brand'>
                    <a href='#'><FontAwesomeIcon icon={faDove} className="login-logo-icon"/>Home</a>
                </li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Language: English</a></li>
            </ul>
        </nav>
        
    )
}

export default Navigation;