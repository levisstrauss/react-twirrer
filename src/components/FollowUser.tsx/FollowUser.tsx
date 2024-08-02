// FollowUser.tsx
import React from 'react';

interface FollowUserProps {
    userAvatar: string;
    userName: string;
    userHandle: string;
}

const FollowUser = ({ userAvatar, userName, userHandle }: FollowUserProps) => {
    return (
        <div className="follow-user">
            <div className="follow-user-img">
                <img src={userAvatar} alt={`${userName}'s avatar`} />
            </div>
            <div className="follow-user-info">
                <h4>{userName}</h4>
                <p>@{userHandle}</p>
            </div>
            <button type="button" className="follow-btn">Follow</button>
        </div>
    );
};

export default FollowUser;
