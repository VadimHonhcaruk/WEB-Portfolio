import React from "react";
import classes from './Footer.module.css';
import telegram from '../images/telegram.png';
import instagram from '../images/instagram.png';
import gmail from '../images/gmail.png';
import git from '../images/git.png';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.socials}>
                <a target="_blank" rel="noreferrer" href="https://t.me/unicornv"><img alt="telegram" src={telegram} /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/unic._.orn/"><img alt="instagram" src={instagram} /></a>
                <a target="_blank" rel="noreferrer" href="mailto:vadimhonc@gmail.com"><img alt="gmail" src={gmail} /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/VadimHonhcaruk"><img alt="git" src={git} /></a>
            </div>
        </div>
    )
};

export default Footer;