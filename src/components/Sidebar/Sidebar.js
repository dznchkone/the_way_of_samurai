import React from 'react';
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";
import User from "../User";

const Sidebar = ({state}) => {
    const friends = state ? state.friends.map(friend => {
        return (<div key={friend.id}>
            <User name={friend.name} size={'s'}/>
        </div>)
    }): (<></>);

    return (
        <nav className={s.nav}>
            <div className={s.wrapper}>
                <div className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink>
                </div>
                <div className={`${s.item} ${s.blank_item}`}>a</div>
                <div className={s.item}>
                    <NavLink className={s.link} activeClassName={s.active} to="/settings">Settings</NavLink>
                </div>
                <div className={s.friendsWrapper}>
                    {friends}
                </div>
            </div>

        </nav>
    )
}

export default Sidebar;