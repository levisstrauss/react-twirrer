import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

import './css/styles.css';

const MiddleContent = () => {
    return (
        <div className="middle-content">
            <FontAwesomeIcon icon={faDove} className="middle-content-icon" />
            <h1>Explore what's happening in the world</h1>
            <h4>Join Twirrer today</h4>
            <button type="button" className="sign-up">Sign Up</button>
            <button type="button" className="log-in">Log In</button>
        </div>
    );
};

export default MiddleContent;
