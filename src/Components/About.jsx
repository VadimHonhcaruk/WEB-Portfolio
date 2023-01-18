import React from "react";
import classes from './About.module.css';
import Photo from './Photo';

const About = () => {
    return (
        <div className={classes.about}>
            <div className={classes.aboutMe}>
                <div className={classes.aboutMeHello}>Hello, world!</div>
                <div className={classes.aboutMeName}>I'm <span className={classes.Vadim}>Vadim</span> Honcharuk</div>
                <div className={classes.aboutMeDescription}>I am a frontend developer from Ukraine!<br /> I am 19 years old and I am ready for new achievements!<br />Contact me.</div>
            </div>
            <Photo />
        </div>
    )
};

export default About;