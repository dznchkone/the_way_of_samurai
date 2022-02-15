const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 0, name: 'Andrew'},
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Svetlana'},
        {id: 3, name: 'Petr'}
    ],
    messages: [
        {id: 0, message_sender: 'Me', text: 'Hello'},
        {id: 1, message_sender: 'User', text: 'Hello'},
        {id: 2, message_sender: 'Me', text: 'How are you?'},
        {id: 3, message_sender: 'User', text: 'I\'m fine! And you?'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message_sender: action.id,
                text: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            break;
        default:
            break;
    }

    return state;
}

const addNewMessageActionCreator = (id) => ({type: ADD_NEW_MESSAGE, id})
const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text})

export default dialogsReducer;

export {
    addNewMessageActionCreator,
    updateNewMessageTextActionCreator
}