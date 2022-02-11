import React from "react";
import user_avatar from "../../assets/user_img/user_avatar.jpg";
import s from "./User.module.css";

const User = (props) => {
    const setSize = (size) => {
        switch (size) {
            case 's':
                return s['user_avatar-s']
            case 'm':
                return s['user_avatar-m']
            case 'l':
                return s['user_avatar-l']
            default:
                return s['user_avatar-m']
        }
    }

    const size = setSize(props.size)
    console.log(size)
    return (
        <div className={s.user_wrapper}>
            <img className={`${s.user_avatar} ${size}`} src={user_avatar} alt="user"/>
            <p className={s.friend_link} >{props.userName}</p>
            {props.children? props.children:null}
        </div>
    )
}

export default User;