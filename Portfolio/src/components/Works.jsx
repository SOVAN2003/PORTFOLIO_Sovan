import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, internet } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {staggerContainer} from '../utils/motion';

const ProjectCard = ({index , name , description, tags , image ,source_code_link , source_link}) => {
  return(
    <motion.div variants={fadeIn("up" , "spring" , index*0.5 , 0.75)}>
       <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
       >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open(source_code_link,"_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src = {github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div 
              onClick={() => window.open(source_link,"_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-3"
            >
              <img 
                src = {internet}
                alt="internet"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            
          </div>
        </div>
        <div className="mt-5">
            <h3 className="text-[#915EFF] font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>

          ))}
        </div>

       </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
        <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once:true, amount:0.25
                }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Here some of my Work.</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("","",0.1,1)}
            className="mt-3 text-secondary text-[17px] mx-w-3xl leading-[30px]"
          >
         Here are a few examples of my real-world projects which show my skills and experience. The projects are briefly described with links to the code repositories
          </motion.p>
        </div>
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`}
                           index={index}
                           {...project} />
          ))}
       </div>  
       </motion.section>
    </>
  )
}

export default Works