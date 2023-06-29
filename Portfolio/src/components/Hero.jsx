import { motion } from "framer-motion";
import {React} from "react";
import styled from "styled-components";
import { styles } from "../styles";
import Typical from "react-typical";


import moon from '../Image/moon.png';

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Section = styled.div`
  height : 100vh; 
  scroll-snap-align: center;
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: space-between;

  
  @media only screen and (max-width: 768px) {
    height: 130vh;
  }

`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  width: 1400px;
  display : flex;
  justify-content : space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex:3;
  position:relative;

  @media only screen and (max-width: 768px) {
    gap: 20px;
    flex: 1;
    width: 60%;
  }
`;

const Img = styled.img`
  width:1200px;
  height: 900px;
  object-fit: contain;
  position: absolute;
  top:0;
  bottom: 0;
  left : 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate{
    to{
      transform : translateY(40px);
    }
  }
`;

const Hero = () => {
  return (
   
    <Section>
     <Container>

        {/*Name and Title*/}
        <Left >
          <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>

           <div>
             <h1 className={`${styles.heroHeadText} heading `}>
              Hi I'm <span className="text-[#915EFF]">Sovan </span>
              <br />
              <span className="text-[#DD58D6]">
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      'Developer',
                      2000,
                      'Engineer',
                      2000,
                      'Learner',
                      2000,
                      'Student',
                      2000,
                      'Marvel Fan',
                      2000,
                    ]}
                  />
              </span>
              </h1>
             <p className={`${styles.heroSubtext} mt-2 text-white-100`}>
               A computer science student passionate <br className="sm:block hidden" />
               about programming and new cutting edge technology.
              </p>
            </div>     
        </div>
        </Left>


        <Right> 
          <Img src={moon} /> 
         </Right>
     </Container>

     <div className="relative xs:bottom-10 bottom-100  flex justify-centre items-center" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '10vh',
    }}>
        <span className="hash-span" id="about">
          <a href = "#about">
              <div className = "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.dev 
                  animate={{
                    y: [0,24,0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType : 'loop'
                  }}
                  className = "w-3 h-3 rounded-full bg-[#DD58D6] mb-1"
                />  
              </div>
          </a>
          </span>
    </div>
                 
      
    </Section>
  );
};
export default Hero;

