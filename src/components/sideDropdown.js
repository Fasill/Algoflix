import style from './assets/stles/SideDropdown.module.css'
import React, { useEffect,useState } from 'react';
import { motion } from 'framer-motion';

export const SideDropdown= ()=>{
    const imagePath = process.env.PUBLIC_URL;
    const arrow1 =`${imagePath}/arrow.svg` 
    const arrow2 =`${imagePath}/arrow2.svg` 

    const [drop,setDrop] = useState(false)
    const DropdownClicked = ()=>{
      console.log('Image clicked!');

      setDrop(!drop)
    }
    // const clicked=(algo)=>{
    //   console.log(algo)
    //   localStorage.setItem("algo",algo)

    // }
  return (
    <div className = {style.allsideDropdown}>
    <motion.div

    initial={{ y: 20 }}
    animate={{
      y: drop?100:-300,
      transition: { duration: 1 }, // Move down in 1 second
    }}
    transition={{ yoyo: Infinity }} // Yoyo loop for moving up and down continuously
     className={style.sideDropdown}>
      <div className = {style.lists}>
      <ul>
          <li><a 
          //  onClick={()=>clicked("bubble")}
          className={style.bubble} href="bubble">Bubble Sort</a></li>
          <li><a className={style.insertion} href="/Insertion">Insertion Sort</a></li>
          <li><a  className={style.selection} href="/Selection">Selection Sort</a></li>
          <li><a className={style.merge} href="/Merge">Merge Sort</a></li>
          <li><a className={style.quick} href="/Quick">Quick Sort</a></li>

        </ul>
      </div>

      <motion.img
                onClick={DropdownClicked}
                initial={{ rotate: 0, y: 0 }} // Set initial rotate and y position
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 1 , delay: 1  }, // Rotation takes 1 second
                }}
        className={style.arrow}
        src={drop?arrow2:arrow1}
        alt="Arrow"
      />
    </motion.div>

    </div>
  );
};