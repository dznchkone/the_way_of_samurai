import React from "react";
import s from "./DialogsWrapper.module.css";
import user_avatar from "../../assets/user_img/user_avatar.jpg";
import {NavLink} from "react-router-dom";


const DialogItem = ({name, id}) => {//Деструктурируем пропсы сразу на переменные, т.к. знаем что придет в компонент.

    return (
        <div className={s.dialogs_item}>
            <NavLink to={`/dialogs/${id}`}>
                {name}
            </NavLink>
        </div>
    )
}

const Message = ({message_sender,text}) => {
    return (
        <div className={s.messages_item}>
            <div className={s.user_wrapper}>
                <img className={s.user_avatar} src={user_avatar} alt="user"/>
                {message_sender}
            </div>
            <p className={s.message}>{text}</p>
        </div>
    )
}

const DialogsWrapper = () => {
    return (
        <div className={s.wrapper}>
            <p className={s.heading}>Dialogs</p>
            <div className={s.dialogs}>
                <DialogItem name="Andrew" id="1"/>
                <DialogItem name="Victor" id="2"/>
                <DialogItem name="Svetlana" id="3"/>
                <DialogItem name="Petr" id="4"/>
            </div>
            <div className={s.messages}>
                <Message message_sender="User" text="I'm fine! And you?"/>
                <Message message_sender="Me" text="How are you?"/>
                <Message message_sender="User" text="Hello"/>
                <Message message_sender="Me" text="Hello"/>
            </div>
        </div>
    )
}

export default DialogsWrapper;