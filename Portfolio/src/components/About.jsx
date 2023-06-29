import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import {staggerContainer} from '../utils/motion';

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Bounce from 'react-reveal/Bounce';


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
    
     <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
    <Bounce left cascade>
   
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        I'm a software developer with experience in C++ and
        JavaScript, and some knowledge in frameworks like React, Node.js, and
        Three.js.  I have a passion for all things tech and consider myself a 
        curious and enthusiastic developer.
        
      </motion.p> 
      </Bounce>
      </div>

      <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once:true, amount:0.25
                }}
            >
      <div className=' relative mt-25 flex flex-wrap gap-10' style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </motion.section>
    </>
  );
};

export default About;