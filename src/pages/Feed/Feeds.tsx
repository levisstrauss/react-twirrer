

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHashtag, faBell, faEnvelope, faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import './css/styles.css';

const Feeds = () => {
    return (
        <section className='feeds-page'>
            <nav className='feeds-nav'>
                <div className='icons'>
                    <a href='#' className='active'><FontAwesomeIcon icon={faHome} className=""/></a>
                    <a href="#"><FontAwesomeIcon icon={faHashtag} className=""/></a>
                    <a href="#"><FontAwesomeIcon icon={faBell} className=""/></a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} className=""/></a>
                </div>
                {/* ---- Search bar ------ */}
                <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-bar-icon"/>
                    <input type="text" placeholder="Search Twirrer" className="search-bar-input"/>
                </div>
                <div className="user">
                    <div className="user-img-wrapper">
                        <img src="assets/images/user1.jpg" width={40}/>
                    </div>
                    <a href="#" className="user-link">Zakaria Smith</a>
                    <FontAwesomeIcon icon={faChevronDown} className="user-chevron-down"/>
                </div>
            </nav>
        </section>
    );
};

export default Feeds;