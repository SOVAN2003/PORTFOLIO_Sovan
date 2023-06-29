import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    car,
    aroma,
    drone,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
 
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Programmer",
      icon: mobile,
    },
    {
      title: "Forntend Developer",
      icon: backend,
    },
    {
      title: "UI/UX",
      icon: creator,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Class 10th ",
      company_name: "HOWRAH ZILLA SCHOOL",
      board_name: "West Bengal Board of Secondary Education",
      icon: starbucks,
      iconBg: "#ffffff",
      date: "January 2017 - March 2018",
      points: [
        "I have successfully qualified Madhyamik exam demonstrating my strong base in subjects.",
        "Furthermore, I am proud to have achieved an exceptional 88.85 percentile in my 10th Boards Examinations.",
       
      ],
    },
    {
      title: "Class 11-12th ",
      company_name: "HOWRAH ZILLA SCHOOL",
      board_name: "West Bengal Council of Higher Secondary Education",
      icon: shopify,
      iconBg: "#ffffff",
      date: "May 2018 - May 2020",
      points: [
        "I have successfully qualified with 82.5 percentile in Higher Secondary exam in science subjects.",
        "I learned Physics , Chemistry , Mathhematics .",
       
      ],
    },
    {
      title: "B.Tech in CSE",
      company_name: "INSTITUTE OF ENGINEERING AND MANAGEMENT, KOLKATA",
      board_name: "MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, WEST BENGAL",
      icon: tesla,
      iconBg: "#ffffff",
      date: "August 2020 - Present",
      points: [
        "Till 5Th Sem i secured CGPA of 9.57.",
        "I studied DBMS, DAA, DSA, OOPs , Data Science , Computer Networks and Operating System. ",
       
      ],
    },
  ];
    
  const projects = [
    {
      name: "Dann",
      description:
        "Using a web-based Web3 platform, we can create campaigns and users can create specific campaigns, which people around the globe can donate to, and 100% of the donations go directly to the creator.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/SOVAN2003/Dann.git",
      source_link: "https://dannsovan.netlify.app/"
    },
    {
      name: "ENDER",
      description:
        "Ender is a web-based application that allows users to generate any type of picture or artwork by typing it in. Additionally, users can upload images to the community section, where anyone around the world can view them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "dall-e api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/SOVAN2003/ENDER.git",
      source_link: "https://endersovan.netlify.app/"
    },
    {
      name: "Aroma",
      description:
        "Aroma is a web application that provides music recommendations. There is an option here to search for a specific  genre. As well as music recommendations, if you search a particular style or artist, it will recommend similar songs as well.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: aroma,
      source_code_link: "https://github.com/SOVAN2003/Aroma.git",
      source_link: "https://github.com/SOVAN2003/Aroma.git"
    },
    {
      name: "Fire alarm Car",
      description:
        "This fire alarm car is a Node MCU car that can be controlled via a mobile app and connected to the internet using WiFi. As well as being used for post-fire situations, it is also capable of detecting small fires that are potentially dangerous for humans to interact with.",
      tags: [
        {
          name: "Node MCU",
          color: "blue-text-gradient",
        },
        {
          name: "Wifi Controlled",
          color: "green-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/SOVAN2003/Fire-Alarm-Car.git",
      source_link: "https://github.com/SOVAN2003/Fire-Alarm-Car.git"
    },
    {
      name: "Drone (on going..)",
      description:
        "With two friends, I started a project to add extra functionality to a drone, such as sensing. Our controlling Python could not connect properly with drone because of some difficulties with the node MCU. We have to start over from scratch on our project. As we build the hardware, I'm attaching a picture.",
      tags: [
        {
          name: "Node MCU",
          color: "blue-text-gradient",
        },
        {
          name: "Wifi Controlled",
          color: "green-text-gradient",
        },
      ],
      image: drone,
      source_code_link: "https://github.com/SOVAN2003/",
      source_link: "https://github.com/SOVAN2003/"
    },
    {
      name: "Summary",
      description:
        "An NLP project called Summary aims to compress a specific portion of text into smaller portions in order to summarize it.  Spacy was used here to tokenize the text and compress it.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Spacy",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/SOVAN2003/Summary.git",
      source_link: "https://github.com/SOVAN2003/Summary.git"
    },
  ];
  
  export { services, technologies, experiences,projects };