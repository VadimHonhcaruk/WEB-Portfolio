import React from "react";
import classes from './Photo.module.css';
import photo from '../images/Vadim.png';
import { useInView } from "react-intersection-observer";

const Photo = () => {

    const { ref, inView } = useInView({
        threshold: 0.1,
    })

    return (
        <div ref={ref} className={`${classes.photoCont} ${inView ? classes.photoContANIMATION : ''}`}>
            <div>
                <img className={classes.photo} alt="MyPhoto" src={photo} />
            </div>
        </div>
    )
};

export default Photo;