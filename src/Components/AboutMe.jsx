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
                    My name is Honcharuk Vadim. I am a third-year computer science student of National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute". Before studying at my Institute I had dreamed to connect my future with the IT-field, and more than a year ago I decided to be a Frontend developer. Why have I choose especially this? I like to come up with interesting designs, implement my ideas into life and see the result of my fruitful work. I have been studying front-end technologies and trying to improve my skills for a long time, however I have little commercial experience. I would like to find a job where I can improve myself, develop my skills and get pleasant and useful experience.
                </div>
                <div>
                    <img alt="sticker" src={sticker} />
                </div>
            </div>
        </div>
    )
};

export default AboutMe;