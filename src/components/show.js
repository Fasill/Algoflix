import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {Bubble} from './algosComponents/searching/bubbleSort.js'
import style from './assets/stles/show.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {ButtomNavbar} from './bottomNavbar'
import {SideDropdown} from './sideDropdown'

export const Show = () => {
  const imagePath = process.env.PUBLIC_URL ;



  
  const imgarr =  Array.from({ length: 15 }, (_, index) => index + 1);

  const getRandomDirection = () => {
    const directions = ['top', 'bottom', 'left', 'right'];
    return directions[Math.floor(Math.random() * directions.length)];
  };


  return (
    <div className={style.show}>

    <div className={style. hero}>

    <div className={style.backgroundimg}>
      {imgarr.map((index) => (
        <motion.img
          key={index}
          className={`${style.img} ${style[`img${index}`]}`}
          src={`${imagePath}/bubble3.png`}
          whileHover={{ scale: 1.2 }}
          animate={{
            x: getRandomDirection() === 'left' ? -100 : getRandomDirection() === 'right' ? 100 : 0,
            y: getRandomDirection() === 'top' ? -100 : getRandomDirection() === 'bottom' ? 100 : 0,
            transition: { duration: Math.random() * 4 + 1, repeat: Infinity, repeatType: 'reverse' },
          }}
        />
      ))}
    </div>
      <div >
          <Bubble/>
      </div>
    </div>
    </div>
    
  );
};

