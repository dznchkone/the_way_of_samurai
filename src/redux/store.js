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
    addPost()  {
        let newPost = {
            id: this._state.profilePage.posts.length,
            likesCount: 0,
            text: this._state.profilePage.newPostText
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._subscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._subscriber(this._state);
    },
    addNewMessage(messageSender)  {
        let newMessage = {
            id: this._state.dialogsPage.messages.length,
            message_sender: messageSender,
            text: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._subscriber(this._state);
    },
    updateNewMessageText(newText)  {
        this._state.dialogsPage.newMessageText = newText;
        this._subscriber(this._state);
    }
}