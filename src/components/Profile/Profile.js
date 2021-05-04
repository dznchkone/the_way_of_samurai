import React from 'react';
import s from "./Profile.module.css";

import PostsWrapper from "./PostsWrapper";
import ProfileInfo from "./ProfileInfo";




const Profile = (props) => {
    return (
        <div className={s.wrapper}>
            <ProfileInfo/>
            <PostsWrapper/>
        </div>
    )
}

export default Profile;