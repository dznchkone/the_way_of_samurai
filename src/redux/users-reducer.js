const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';
const SET_USERS = 'SET_USERS';

const initialState = {
    users:[]
}

const usersReducer = (state = initialState,action) => {

    switch (action.type) {
      case TOGGLE_FOLLOW_USER:
          return {
              ...state,
              users: state.users.map(user=>{
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
                users: [...state.users, ...action.payload]
            }
      default:
          return state;
  }
}

export default usersReducer;

const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW_USER,payload:userId});
const setUsersAC = (users) => ({type:SET_USERS,payload: users});

export {
    toggleFollowAC,
    setUsersAC
}
