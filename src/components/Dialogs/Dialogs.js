import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem";
import Message from "./Message";



const Dialogs = (props) => {

    const {state} = props;

    const dialogsElements = state.dialogs.map(item => <DialogsItem key={item.id} name={item.name} id={item.id}/>);
    const messagesElements = state.messages.map(({id, message_sender, text}) => <Message key={id}  message_sender={message_sender}
                                                                                      text={text}/>);
    let messageText = React.createRef();

    const sendMessage = () => {
        props.addNewMessage('Me')

    }

    const updateMessageText = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }


    return (
        <div className={s.wrapper}>
            <p className={s.heading}>Dialogs</p>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.add_message_wrapper}>
                    <textarea
                        maxLength="200"
                        className={s.textarea}
                        ref={messageText}
                        value={state.newMessageText}
                        onChange={updateMessageText}
                    />
                <button className={s.add_message_button} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;