import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './navBar';
import style from './assets/stles/show.module.css'


export const Show = () => {
  const [arr, setArr] = useState([8, 5, 3, 1, 9, 6, 0, 7, 4, 2]);

  const bubbleSort = async () => {
    const len = arr.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
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
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
    } while (swapped);
  };

  return (
    <div>
    <Navbar/>
    <div 
    className = {style.holeGraph}>
      {arr.map((card, index) => (
        <motion.div
          key={card}
          style={{
            height: `${25+card * 10}px`,
          }}
          animate={{ x: `${index * 100}px` }}
          transition={{ duration: 0.5 }}
          className={style.graph}
        >
          Card {card}
        </motion.div>
      ))}
      <button
        style={{ marginTop: '5rem', padding: '2rem' }}
        onClick={bubbleSort}
      >
        bubble
      </button>
    </div>
    </div>
  );
};

