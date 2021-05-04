import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import Message from "./Message";


const Dialogs = (props) => {
    const dialogsData = [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Petr'}
    ];

    const massagesData = [
        {id: 4, message_sender: 'User', text: 'I\'m fine! And you?'},
        {id: 3, message_sender: 'Me', text: 'How are you?'},
        {id: 2, message_sender: 'User', text: 'Hello'},
        {id: 1, message_sender: 'Me', text: 'Hello'},
    ];

    const dialogsElements = dialogsData.map(item => <DialogsItem name={item.name} id={item.id}/>);
    const messagesElements = massagesData.map(({id, message_sender, text}) => <Message id={id} message_sender={message_sender}
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