import React from 'react';
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <a href="/#" className={style.header__logo}/>
        </header>
    )
}

export default Header;