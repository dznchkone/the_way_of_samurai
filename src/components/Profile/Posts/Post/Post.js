import React from "react";
import s from "./Post.module.css"

import avatar from "../../../../assets/user_img/user_avatar.jpg";

const Post = ({text, likesCount, photo}) => {
    return (
        <div className={s.item}>
            <div className={s.wrapper}>
                <div className={s.user_avatar_wrapper}>
                    <img className={s.user_avatar} src={photo? photo : avatar} alt="user"/>
                </div>
                <div className={s.user_message_wrapper}>
                    {text}
                </div>
            </div>
            <span className={s.like}>Likes: {likesCount} </span>
        </div>
    )
}

export default Post;