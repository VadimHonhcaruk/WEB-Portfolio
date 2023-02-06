import React from "react";
import { useInView } from "react-intersection-observer";
import Skill from "./Skill";
import classes from './Skills.module.css';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png';
import computer from '../images/computer.png';

const Skills = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    return (
        <div ref={ref} className={`${classes.skillsSection} ${inView ? classes.skillsSectionANIMATION : ''}`}>
            <a name="skills"><h1>Skills</h1></a>
            <div className={classes.skillsCONT}>
                <div className={classes.skills}>
                    <Skill image={html} name='HTML' exp='1+ year' />
                    <Skill image={css} name='CSS' exp='1+ year' />
                    <Skill image={js} name='JS' exp='1+ year' />
                    <Skill image={react} name='REACT' exp='6 months' />
                </div>
                <div className={classes.computer}>
                    <img alt="computer" src={computer} />
                </div>
            </div>
        </div>
    )
};

export default Skills;