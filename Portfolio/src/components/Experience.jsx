import {React} from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import {OrbitControls,MeshDistortMaterial, Sphere, } from "@react-three/drei";
import styled from "styled-components";
import { Canvas} from "react-three-fiber";
import {staggerContainer} from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles';
import {experiences} from '../constants';
import {textVariant} from '../utils/motion';
import Slide from 'react-reveal/Slide';
import Logo from './Logo';


const Right = styled.div`
  flex:3;
  position:relative;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-[#DD58D6] text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <p
          className='text-[#915EFF] text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.board_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
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
    <Slide left cascade>
    <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once:true, amount:0.25
                }}
                className={`${styles.padding} max-w-7xl mx-auto mt-60 relative z-0 sm: flex-1 justify-end`}
            >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Here my Educational journey so far..</p>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
              {experiences.map((experience , index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </VerticalTimeline>
        </div>

      </motion.section>
      </Slide>

      <Slide right cascade>
      <Right>
          <Canvas>
             
             <OrbitControls enableZoom={false}/>
              <ambientLight intensity={1}/>
              <directionalLight position={[3,2,1]} />

              <Sphere args={[1,100,200]} scale={1}>
              <MeshDistortMaterial
                  color="#915EFF"
                  attach="material"
                  distort={0.5}
                  speed={2}
                /> 
               
              </Sphere>
              <Logo />
        </Canvas>

      
        </Right>

        </Slide>
        </motion.section>
        
    </>
  )
}

export default Experience