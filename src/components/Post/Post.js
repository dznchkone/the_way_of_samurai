import React from "react";
import style from "./Post.module.css"

import avatar from "../../assets/user_img/user_avatar.jpg";

const Post = ({id}) => {
    return (
        <div key={id} className={style.item}>
            <img className={style.user_avatar} src={avatar} alt="user"/>
            Post{id}<br/>
            <span>Like</span>
        </div>
    )
}

export default Post;