import React, {useEffect} from "react";
import User from "../User";
import axios from "axios";

import s from './Users.module.css'




const Users = (props) => {

    const {page,count,setUsers,totalCount, setTotalCount} = props;

    useEffect(()=>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
                .then(res => res.data)
                .then(data => {
                    setUsers(data["items"]);
                    if (totalCount === 0) setTotalCount(data["totalCount"]);
                });

    },[page,count,setUsers])

    let pagesCount = Math.ceil(totalCount/props.count);
    let pagePointer = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagePointer.push(i)
    }

    return(
        <div className={s.users_wrapper}>
            <div>
                {pagePointer.map(p=>{
                    return <span key={p} className={p===props.page ? s.current_page: undefined} onClick={()=>props.setPage(p)}>{` ${p} `}</span>
                })}
            </div>
        {props.state.map(user=>{
            return (
                <div key={user.id} >
                    <User size={'m'} user_image={user.photos.small} name={user.name}>
                        <button onClick={()=>props.toggleFollow(user.id)}>{user.followed ? 'unfollow': 'follow'}</button>
                    </User>
                </div>
            )
        })}
    </div>)
}

export default Users;