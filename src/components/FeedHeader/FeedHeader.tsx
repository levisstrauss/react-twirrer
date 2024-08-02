import { faStar, faImage, faCamera, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FeedHeader = () => {
    return (
        <div className="feed-header">
            <div className="header-top">
                <h4>Home</h4>
                <FontAwesomeIcon icon={faStar} className="fa-star-icon"/>
            </div>
            <div className="header-post">
                <div className="header-img-wrapper">
                <img src="assets/images/user1.jpg" />
                </div>
                <input type="text" placeholder="What's happening?" />
                <FontAwesomeIcon icon={faImage} className="fa-image-icon"/>
                <FontAwesomeIcon icon={faCamera} className="fa-camera-icon"/>
                <FontAwesomeIcon icon={faChartBar} className="fa-chart-bar-icon"/>
            </div>
        </div>
   )
} 

export default FeedHeader;