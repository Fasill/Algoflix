import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import style from '../../assets/stles/show.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtomNavbar} from '../../bottomNavbar'
import {SideDropdown} from '../../sideDropdown'

export const Bubble = () => {
  const imagePath = process.env.PUBLIC_URL ;
  const [clicked ,setClicked] = useState(false)
  const [sliderValue, setSliderValue] = useState(3);

  const valueMappings = {
    1: 2000,
    2: 1550,
    3: 1100,
    4: 650,
    5: 200,
  };
  const [arr, setArr] = useState([]);
  
  useEffect(()=>{
    const defaultArr = ["",8, 5, 3, 1, 9, 6, 0, 7, 4, 2];

  // Get the object from local storage and convert it to an array or use the default array if not available
  
  const obj = JSON.parse(localStorage.getItem('numberInputs'));
  
  const localArr = obj ? (Object.keys(obj).map((key) => obj[key])): defaultArr;
  localArr.shift()
  setArr(localArr)
  },[])
  
  const bubbleSort = async () => {

    setClicked(true)
    const len = arr.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        arr[i] = Number(arr[i])
        arr[i+1] = Number(arr[i+1])
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;

          // Indicate that a swap occurred
          swapped = true;

          // Update state to re-render the array with the new order
          setArr([...arr]);

          // Add a 2-second delay between each move
          await new Promise((resolve) => setTimeout(resolve, valueMappings[sliderValue]));
        }
      }
    } while (swapped);
  };
  const imgarr =  Array.from({ length: 15 }, (_, index) => index + 1);

  const getRandomDirection = () => {
    const directions = ['top', 'bottom', 'left', 'right'];
    return directions[Math.floor(Math.random() * directions.length)];
  };
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className={style.show}>
    <div className={style. hero}>
    <SideDropdown/>

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
    <div 
    className = {style.holeGraph}>
      
     
      {arr.map((card, index) => (
        <motion.div
          key={card}
          style={{
            height: `${50+card * 15}px`,
          }}
          animate={{ x: `${index * 90}px` }}
          transition={{ duration: 0.5 }}
          className={style.graph}
        >
          <p>{card}</p> 
        </motion.div>
      ))}

    </div>
    </div>
    <div 
    className = {style.buttom}
    >
    <input
        className={style.bttn}
        onClick={!clicked?bubbleSort:null}
        type = "submit"
        value  = "Sort"
      />
      <div 
      className = {style.buttomNav}
      >
       
      <input
      className={style.slider}
        type="range"
        min="2"
        max="5"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      </div>
      <ButtomNavbar/>

      </div>
    </div>
    
  );
};

