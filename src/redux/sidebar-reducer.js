

const initialState = {
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

// noinspection JSUnusedLocalSymbols
const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReducer;