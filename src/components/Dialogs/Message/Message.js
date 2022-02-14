import React from 'react';
import s from "../Dialogs.module.css";
import User from "../../User";


const Message = ({message_sender, text}) => {
    const left = message_sender==='Me' ? `${s['messages_item-left']}`:'';

    return (
        <div className={`${s.messages_item} ${left}`}>
            <User size={'m'} userName={message_sender} />
            <p className={s.message}>{text}</p>
        </div>
    )
}

export default Message;