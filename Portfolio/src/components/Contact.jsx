import React from 'react'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {EarthCanvas} from './canvas';
import {slideIn} from '../utils/motion';
import {staggerContainer} from '../utils/motion';

//template_faknxur
//service_ndq8d0j
//J-PPuQ2diDGvzWEgm
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ndq8d0j',
        'template_faknxur',
        {
          from_name: form.name,
          to_name: "Sovan",
          from_email: form.email,
          to_email: "sovankumardas03@gmail.com",
          message: form.message,
        },
        'J-PPuQ2diDGvzWEgm'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you..! ");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Opps, something went wrong.");
        }
      );
  };

  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{
        once:true, amount:0.25
    }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >

    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left' , 'between' , 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'></span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter Your Name.'
              className='bg-tertiary py-4 px-6 placeholder:text-[#915EFF] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'></span>
            <input 
              type='email'
              name='emal'
              value={form.emal}
              onChange={handleChange}
              placeholder='Enter Your Email Address'
              className='bg-tertiary py-4 px-6 placeholder:text-[#915EFF] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'></span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Enter Your Message'
              className='bg-tertiary py-4 px-6 placeholder:text-[#915EFF] text-white rounded-lg outlined-none border-none font-medium'/>
          </label>

          <button
            type='submit'
            className='bg-[#DD58D6] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    
    </motion.section>
  )
}

export default Contact;