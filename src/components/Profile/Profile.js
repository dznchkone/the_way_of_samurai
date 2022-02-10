import React from 'react';
import s from "./Profile.module.css";

import PostsWrapper from "./PostsWrapper";
import ProfileInfo from "./ProfileInfo";


const Profile = ({state}) => {

    return (
        <div className={s.wrapper}>
            <ProfileInfo />
            <PostsWrapper posts={state.posts}/>
        </div>
    )
}

export default Profile;