import React from "react";
import User from "../User";

import s from './Users.module.css'

const Users = (props) => {

    // let pagesCount = Math.ceil(props.totalCount / props.count);
    let pagePointer = [];


    for (let i = 1; i <= 10; i++) {
        pagePointer.push(i)
    }


    return (
        <div className={s.users_wrapper}>
            <div>
                {pagePointer.map(p => {
                    return <span key={p} className={p === props.page ? s.current_page : undefined}
                                 onClick={() => props.setPage(p)}>{` ${p} `}</span>
                })}
            </div>
            {props.state.map(user => {
                return (
                    <div key={user.id}>
                        <User size={'m'} user_image={user.photos.small} name={user.name}>
                            <button
                                onClick={() => props.toggleFollow(user.id)}>{user.followed ? 'unfollow' : 'follow'}</button>
                        </User>
                    </div>
                )
            })}
        </div>)
}

export default Users;