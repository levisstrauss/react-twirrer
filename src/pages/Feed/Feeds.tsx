

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faImage, faCamera, faChartBar } from "@fortawesome/free-solid-svg-icons";
import FeedNavigation from "../../components/FeedNavigation";
import Posts from "../../components/Posts";
import postsData from "../../data/postdata";


import './css/styles.css';
import FollowUser from "../../components/FollowUser.tsx/FollowUser";


const Feeds = () => {
    return (
        <section className="feeds-page">
            <FeedNavigation />
            <div className="feeds-content">
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

                {/* ----------------- Posts ---------- */}
                
                <div className="posts">
                    {postsData.map(post => (
                            <Posts 
                            key={post.id}
                            userAvatar={post.userAvatar}
                            userName={post.userName}
                            userHandle={post.userHandle}
                            postTime={post.postTime}
                            postText={post.postText}
                            postImg={post.postImg}
                        />
                    ))}

                    <div className="follow">
                        <h3 className="follow-heading">Who to follow</h3>
                        <FollowUser 
                            userAvatar="assets/images/user3.jpg"
                            userName="Ann Smith"
                            userHandle="annsmith"
                        />
                        <FollowUser 
                            userAvatar="assets/images/user4.jpg"
                            userName="John Doe"
                            userHandle="johndoe"
                        />
                         <FollowUser 
                            userAvatar="assets/images/user5.jpg"
                            userName="John Doe"
                            userHandle="johndoe"
                        />
                        <div className="follow-link">
                            <a href="#">Show more</a>
                        </div>
                        <footer className="follow-footer">
                          <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">More</a></li>
                          </ul>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feeds;
