// Post.tsx
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faComment, faRetweet, faHeart, faShareAlt } from "@fortawesome/free-solid-svg-icons";

import "./css/styles.css";

interface PostProps {
    userAvatar: string;
    userName: string;
    userHandle: string;
    postTime: string;
    postText: string;
    postImg: string; // optional
}

const Posts = ({ userAvatar, userName, userHandle, postTime, postText, postImg }: PostProps) => {
    return (
        <div className="post">
            <div className="user-avatar">
                <img src={userAvatar} alt={`${userName}'s avatar`} />
            </div>
            <div className="post-content">
                <div className="post-user-info">
                    <h4>{userName}</h4>
                    <FontAwesomeIcon icon={faCheckCircle} className="fa-check-icon" />
                    <span>@{userHandle} {postTime}</span>
                </div>
                <p className="post-text">
                    {postText}
                </p>
                    <div className="post-img">
                    <img src={postImg} alt="Post" />
                </div>
                <div className="post-icons">
                    <FontAwesomeIcon icon={faComment} className="fa-comment-icon"/>
                    <FontAwesomeIcon icon={faRetweet} className="fa-retweet-icon"/>
                    <FontAwesomeIcon icon={faHeart} className="fa-heart-icon"/>
                    <FontAwesomeIcon icon={faShareAlt} className="fa-share-icon"/>
                </div>
            </div>
        </div>       
        
    );
};

export default Posts;


{/* <p className="post-text">
                    {postText}
                </p>
                {postImg && (
                    <div className="post-img">
                        <img src={postImg} alt="Post" />
                    </div>
                )} */}