import React from 'react';
import style from "./Profile.module.css";
import header_img from "../../assets/user_img/user-header.jpg";
import PostsWrapper from "../PostsWrapper";


const Profile = () => {
    return (
        <div className={style.content}>
            <div className={style.header}>
                <img className={style['header-img']} src={header_img}
                     alt="profile header"/>
            </div>
            <div>
                avatar + description
            </div>
            <PostsWrapper/>
        </div>
    )
}

export default Profile;