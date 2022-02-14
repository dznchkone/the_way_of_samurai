import React from 'react';
import s from "./Profile.module.css";

import PostsWrapper from "./PostsWrapper";
import ProfileInfo from "./ProfileInfo";



const Profile = (props) => {
    const {state,addPost, updateNewPost} = props;

    return (
        <div className={s.wrapper}>
            <ProfileInfo />
            <PostsWrapper posts={state.posts}
                          addPost={addPost}
                          updateNewPost={updateNewPost}
                          newPostText={state.newPostText}
            />
        </div>
    )
}

export default Profile;
