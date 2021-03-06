import React from 'react'
import EducationCard from '../EducationCard'
import educationData from '../../json/education.json'
import languageSkillData from '../../json/languageSkill.json'
import techSkill from '../../json/techsSkill.json'
import industrySkill from '../../json/otherSkills.json'
import Bar from '../Bar';
import { motion } from 'framer-motion';
import './resume.css'


const Resume = () => {
    const educationDataCard = educationData.map((education, index) => {
        return <EducationCard key={index} value={education}></EducationCard>
    })

    const languageSkillCard = languageSkillData.map((language, index) => {
        return <Bar key={index} value={language}></Bar>
    })

    const techSkillCard = techSkill.map((tech,index) => {
        return <Bar key={index} value={tech}></Bar>
    })

    const industrySkillCard = industrySkill.map((skills,index) => {
        return <Bar key={index} value={skills}></Bar>
    })

    const resumeVarient = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delay:0.2,duration:0.6,
            }
        },
        exit: {
            opacity:0,
            transition:{
                ease:'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container resumeContainer"
            variants={resumeVarient}
            initial='hidden'
            animate="visible"
            exit="exit"
        >
            <div className="educationSection">
                <h3 className="text-center">Education</h3>
                <div className="row resumeRow">
                    {educationDataCard}
                </div>
            </div>
            <div className="skillSection">
                <div className="row progressRow">
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="text-center progressHeader">Language & frameworks</h3>
                        <br/>
                        {languageSkillCard}
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="text-center progressHeader">Tools & Technology</h3>
                        <br/>
                        {techSkillCard}
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3 className="text-center progressHeader">Industry Knowledge</h3>
                        <br/>
                        {industrySkillCard}
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default Resume;
