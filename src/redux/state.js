const state = {
    profilePage: {
        posts: [
            {id: 5, text: 'Hi, how are you?', likesCount: 10},
            {id: 4, text: 'It\'s my fours message', likesCount: 15},
            {id: 3, text: 'It\'s my third message', likesCount: 15},
            {id: 2, text: 'It\'s my second message', likesCount: 22},
            {id: 1, text: 'It\'s my first message', likesCount: 3},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Victor'},
            {id: 3, name: 'Svetlana'},
            {id: 4, name: 'Petr'}
        ],
        messages: [
            {id: 4, message_sender: 'User', text: 'I\'m fine! And you?'},
            {id: 3, message_sender: 'Me', text: 'How are you?'},
            {id: 2, message_sender: 'User', text: 'Hello'},
            {id: 1, message_sender: 'Me', text: 'Hello'},
        ]
    },
    navbar: {
        friends: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Garik'}
        ]
    }
};

export default state;