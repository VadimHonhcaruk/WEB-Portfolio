import React from "react";
import classes from './Skill.module.css';

const Skill = (props) => {
    return (
        <div className={classes.skill}>
            <div><img alt={props.name} src={props.image} /> </div>
            <div>{props.name}</div>
            <div>{props.exp}</div>
        </div>
    )
};

export default Skill;