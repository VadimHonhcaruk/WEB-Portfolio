import React from "react";
import classes from './AboutMe.module.css';
import sticker from '../images/sticker.png';
import sticker2 from '../images/sticker2.png';
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    })

    return (
        <div ref={ref} className={`${classes.about} ${inView ? classes.aboutANIMATION : ''}`}>
            <a name="about"><h1>About</h1></a>
            <div className={classes.descCont}>
                <div>
                    <img alt="sticker2" src={sticker2} />
                </div>
                <div className={classes.myDescription}>
                    My name is Honcharuk Vadim. I am a third-year computer science student of National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute". Before studying at my Institute I had dreamed to connect my future with the IT-field, and more than a year ago I decided to be a Frontend developer. Why have I choose especially this? I like to come up with interesting designs, implement my ideas into life and see the result of my fruitful work. I have been studying front-end technologies and trying to improve my skills for a long time. I already have commercial experience. I have worked on several small projects and am currently participating in them as well. I would like to find a full-time job where I can improve, develop my skills and gain a pleasant and rewarding experience working in a team with other developers who will pass on their experience to me!
                </div>
                <div>
                    <img alt="sticker" src={sticker} />
                </div>
            </div>
        </div>
    )
};

export default AboutMe;