import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1>VH</h1>
            <div className={classes.navbar}>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#about">About</a></div>
            </div>
        </header>
    )
};

export default Header;