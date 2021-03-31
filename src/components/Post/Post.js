import React from "react";
import s from "./Post.module.css"

import avatar from "../../assets/user_img/user_avatar.jpg";

const Post = ({id, message, likes}) => {
    return (
        <div key={id} className={s.item}>
            <div className={s.wrapper}>
                <div className={s.user_avatar_wrapper}>
                    <img className={s.user_avatar} src={avatar} alt="user"/>
                </div>
                <div className={s.user_message_wrapper}>
                    {message}
                </div>
            </div>
            <span className={s.like}>Likes: {likes} </span>
        </div>
    )
}

export default Post;