const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_IS_FETCHING= 'SET_IS_FETCHING';

const initialState = {
    users: [],
    page: 1,
    count: 10,
    totalCount: 0,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) return {
                        ...user,
                        followed: !user.followed
                    }
                    return user
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload]
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
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

export default usersReducer;

const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW_USER, payload: userId});
const setUsers = (users) => ({type: SET_USERS, payload: users});
const setPage = (page) => ({type: SET_PAGE, payload: page});
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, payload: totalCount});
const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, payload: isFetching})

export {
    toggleFollow,
    setUsers,
    setPage,
    setTotalCount,
    setIsFetching
}
