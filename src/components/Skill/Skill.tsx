import React from 'react';
import './Skill.css';
import { skills } from '../../portfolio';
import SkillCard from '../SkillCard/SkillCard';

function Skill() {
    const Fade: any = require("react-reveal/Fade");
    const subTitleList = skills.skillStack.map((subTit, i) => {
        return subTit.subTitle;
    });
    const skillCardList = skills.skillStack.map((list, i) => {
        return list.lists;
    });
    return(
        <section className="section--skill" id="skills">
            <div className="inner">
                <Fade left duration={800}>
                {/*
                <div className="wrapper">
                    <div className="skill-title">
                        <p>{skills.title}</p>
                    </div>
                    <div className="skill-subtitle">
                        <p>{skills.subTitle}</p>
                    </div>
                    <div className="skill-cards">
                        {skills.lists.map((list, i) => (
                            <SkillCard skill={list} key={i} />
                        ))}
                    </div>
                    {
                    <div className="skill-desc">
                        {skills.describeSkills.map((desc, i) => <p key={i}>{desc}</p>)}
                        </div>
                </div>*/}
                <div className="wrapper">
                    <div className="skill-title">
                        <p>{skills.title}</p>
                    </div>
                    <div>
                        {subTitleList.map((text, i) => (
                            <div>
                                <p className="subtitle-p" key={i}>{text}</p>
                                <div className="skill-cards">
                                    {skillCardList[i].map((li, idx) => (
                                    <SkillCard skill={li} key={idx} />
                                ))}
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
                </Fade>

                <Fade right duration={800}>
                <div className="skill-image">
                    <i className="fas fa-code"></i>
                </div>
                </Fade>
            </div>
        </section>
    );
}
export default Skill;