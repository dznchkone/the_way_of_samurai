import React from 'react';
import s from "../Dialogs.module.css";
import user_avatar from "../../../assets/user_img/user_avatar.jpg";

const Message = ({id,message_sender, text}) => {
    return (
        <div key={id} className={s.messages_item}>
            <div className={s.user_wrapper}>
                <img className={s.user_avatar} src={user_avatar} alt="user"/>
                {message_sender}
            </div>
            <p className={s.message}>{text}</p>
        </div>
    )
}

export default Message;