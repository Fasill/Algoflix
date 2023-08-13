import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import style from '../../assets/stles/slection.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtomNavbar} from '../../bottomNavbar'
import {SideDropdown} from '../../sideDropdown'

export const Selection = () => {
  const imagePath = process.env.PUBLIC_URL ;
  const [clicked ,setClicked] = useState(false)
  const [sliderValue, setSliderValue] = useState(3);





  



  // =================
  const valueMappings = {
    1: 3000,
    2: 2500,
    3: 2000,
    4: 1550,
    5: 1100,
  };
  const [arr, setArr] = useState([]);
  
  useEffect(()=>{
    const defaultArr =["",3.8, 2.9, 0.5, 1.4, 0.8, 4.4, -0.1, 1.7, 2.6, 4.1, 3.2, 2.0, -1.0, 4.7, 0.2, -0.7, 2.3, 1.1, -0.4, 3.5];

  // Get the object from local storage and convert it to an array or use the default array if not available
  
  const obj = JSON.parse(localStorage.getItem('numberInputs'));
  
  const localArr = obj ? (Object.keys(obj).map((key) => obj[key])): defaultArr;
  localArr.shift()
  setArr(localArr)
  },[])
  const temp = 3
  
  const selectionSort = async () => {
    setClicked(true);
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        arr[i] = Number(arr[i]);
        arr[j] = Number(arr[j]);
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
  
        // Update state to re-render the array with the new order
        setArr([...arr]);
  
        // Add a delay between each move
        await new Promise((resolve) => setTimeout(resolve, valueMappings[sliderValue]));
      }
    }
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
    <div>


    <div className={style.show}>
      <img
        className={style.shelfImg}
      src = {`${imagePath}/shelf.jpg`}
      />
      
    <div className={style. hero}>

    
    <div 
    className = {style.holeGraph}>
      
     
      {arr.map((card, index) => (
        <motion.div
          key={card}
          style={{
            height: `${50+card * 15}px`,
          }}
          animate={{ x: `${index * 33}px` }}
          transition={{ duration: 0.5 }}
          className={style.graph}
        >
          <div className = {style.book}>{" "}</div>
          <p>{card}</p> 
         
        </motion.div>

      ))}
         
        {/* <div className={style.graph} >{temp}</div> */}


    </div>
    </div>
    <div 
    className = {style.buttom}
    >
    <input
        className={style.bttn}
        onClick={!clicked?selectionSort:null}
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
    </div>
    
  );
};

