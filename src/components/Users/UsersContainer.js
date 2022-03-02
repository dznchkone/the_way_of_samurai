import {connect} from "react-redux";
import Users from "./Users";

import {setPage, setTotalCount, setUsers, toggleFollow, setIsFetching} from "../../redux/users-reducer";
import {useEffect} from "react";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

const UsersContainer = (props) => {
    /*const {page, count, setUsers, totalCount, setTotalCount} = props;*/

    useEffect(() => {
        props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.page}&count=${props.count}`)
            .then(res => res.data)
            .then(data => {
                props.setIsFetching(false)
                props.setUsers(data["items"]);
                if (props.totalCount === 0) props.setTotalCount(data["totalCount"]);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.page, props.count, props.setUsers])

    return <>
        {props.isFetching ? <Preloader/>: null}
        <Users
        state={props.state}
        page={props.page}
        count={props.count}
        totalCount={props.totalCount}
        setPage={props.setPage}
        toggleFollow={props.toggleFollow}
    />
    </>
}

const mapStateToProps = (state) => {
    return {
        state: state.usersPage.users,
        page: state.usersPage.page,
        count: state.usersPage.count,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = {
        toggleFollow,
        setUsers,
        setPage,
        setTotalCount,
        setIsFetching
}

/*const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)*/

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);