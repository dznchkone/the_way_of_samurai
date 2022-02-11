import React from "react";
import PropTypes from "prop-types"
import user_avatar from "../../assets/user_img/user_avatar.jpg";
import s from "./User.module.css";

const User = (props) => {
    const {size} = props;
    const imgSize = 'user_avatar-'+size;
    const fontSize = 'friend_link-'+size
    console.log(size)
    return (
        <div className={s.user_wrapper}>
            <img className={`${s.user_avatar} ${s[imgSize]}`} src={user_avatar} alt="user"/>
            <p className={`${s.friend_link} ${s[fontSize]}`} >{props.userName}</p>
            {props.children? props.children:null}
        </div>
    )
}

User.propTypes = {
    size: PropTypes.string.isRequired
}

export default User;