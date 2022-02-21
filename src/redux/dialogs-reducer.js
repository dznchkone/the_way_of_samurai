const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
            const newMessage = {
                id: state.messages.length,
                message_sender: action.user_id,
                text: state.newMessageText
            };
            return {
                ...state,
                messages:[
                    ...state.messages,
                    newMessage
                ],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
        default:
            return state;
    }


}

const addNewMessageActionCreator = (user_id) => ({type: ADD_NEW_MESSAGE, user_id})
const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text})

export default dialogsReducer;

export {
    addNewMessageActionCreator,
    updateNewMessageTextActionCreator
}