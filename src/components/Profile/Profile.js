import React from 'react';
import s from "./Profile.module.css";
import header_img from "../../assets/user_img/user-header.jpg";
import PostsWrapper from "../PostsWrapper";

import user_avatar from "../../assets/user_img/user_avatar.jpg";


const Profile = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <img className={s.header_img} src={header_img}
                     alt="profile header"/>
            </div>

                <div className={s.user_info}>
                    <div className={s.user_avatar}>
                        <img className={s.user_avatarImg} src={user_avatar} alt="user"/>
                    </div>
                    <div className={s.user_bio}>
                        <p className={s.username}><b>Ivan Ivanov</b></p>
                        <br/>
                        <p className={s.birthdate}><b>Date of Birth:</b> 12 June</p>
                        <p className={s.city}><b>City:</b> Moscow</p>
                        <p className={s.education}><b>Education:</b> MGU</p>
                        <p className={s.website}><b>Website:</b> www.mysite.com</p>
                    </div>
                </div>

            <PostsWrapper/>
        </div>
    )
}

export default Profile;