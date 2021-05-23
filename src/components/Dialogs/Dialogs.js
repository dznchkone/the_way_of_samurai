import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import Message from "./Message";


const Dialogs = ({state}) => {

    const dialogsElements = state.dialogs.map(item => <DialogsItem name={item.name} id={item.id}/>);
    const messagesElements = state.messages.map(({id, message_sender, text}) => <Message id={id} message_sender={message_sender}
                                                                                      text={text}/>);
    return (
        <div className={s.wrapper}>
            <p className={s.heading}>Dialogs</p>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;