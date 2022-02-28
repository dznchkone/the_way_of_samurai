import {connect} from "react-redux";
import Users from "./Users";

import {setPageAC, setTotalCountAC, setUsersAC, toggleFollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
      state: state.usersPage.users,
      page: state.usersPage.page,
      count: state.usersPage.count,
      totalCount: state.usersPage.totalCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      toggleFollow: (userId) => {
          dispatch(toggleFollowAC(userId))
      },
      setUsers: (users) => {
          dispatch(setUsersAC(users))
      },
      setPage: (page)=>{
          dispatch(setPageAC(page))
      },
      setTotalCount: (totalCount)=>{
          dispatch(setTotalCountAC(totalCount))
      }
  }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;