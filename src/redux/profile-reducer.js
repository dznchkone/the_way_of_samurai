const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
    isFetching: true,
    profile: null,
    posts: [
        {id: 0, text: 'It\'s my first message', likesCount: 3},
        {id: 1, text: 'It\'s my second message', likesCount: 22},
        {id: 2, text: 'It\'s my third message', likesCount: 15},
        {id: 3, text: 'It\'s my fours message', likesCount: 15},
        {id: 4, text: 'Hi, how are you?', likesCount: 10}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length,
                likesCount: 0,
                text: state.newPostText
            };
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.payload}
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }


}
export default profileReducer;

const addPostActionCreator = () => ({type: ADD_POST});
const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text});
const setProfileAC = (data)=> ({type: SET_USER_PROFILE, payload: data})
const setIsFetchingAC = (isFetching)=>({type: SET_IS_FETCHING, payload:isFetching})

export {
    addPostActionCreator,
    updateNewPostTextActionCreator,
    setProfileAC,
    setIsFetchingAC
}
