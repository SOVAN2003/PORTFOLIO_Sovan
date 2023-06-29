import React from 'react'
import {BallCanvas} from './canvas';
import {technologies} from '../constants';
import {styles} from '../styles';
import HeadShake from 'react-reveal/HeadShake';



const Tech = () => {
  return (
    <HeadShake>
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`} >
      <div className='flex flex-row flex-wrap justify-centre gap-10'>
        {technologies.map((technology) =>(
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))} 
      </div>
    </div>
    </HeadShake>
  )
}

export default Tech;