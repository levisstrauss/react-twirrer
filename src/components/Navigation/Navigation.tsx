import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from "@fortawesome/free-solid-svg-icons";


import './css/styles.css';


const Navigation = () => {
    return (
        <ul>
            <li className='brand'>
                <a href='#'><FontAwesomeIcon icon={faDove} className="login-icon"/>Home</a>
            </li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Language: English</a></li>
     </ul>
    )
}


export default Navigation;