import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store = {
    _subscriber() {
        console.log('no subscribers (observers')
    },
    _state: {
        profilePage: {
            posts: [
                {id: 0, text: 'It\'s my first message', likesCount: 3},
                {id: 1, text: 'It\'s my second message', likesCount: 22},
                {id: 2, text: 'It\'s my third message', likesCount: 15},
                {id: 3, text: 'It\'s my fours message', likesCount: 15},
                {id: 4, text: 'Hi, how are you?', likesCount: 10}
            ],
            newPostText: ""
        },
        dialogsPage: {
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
        },
        navbar: {
            friends: [
                {id: 0, name: 'Andrew'},
                {id: 1, name: 'Victor'},
                {id: 2, name: 'Svetlana'},
                {id: 3, name: 'Petr'},
                {id: 4, name: 'Ivan'},
                {id: 5, name: 'Nastya'},
                {id: 6, name: 'Garik'}
            ]
        }
    },
    getState()  {
        return this._state
    },
    subscribe(observer)  {
        this._subscriber = observer;
    },
    dispatch (action){
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.navbar=sidebarReducer(this._state.navbar,action);
        this._subscriber(this._state);
    }
}






