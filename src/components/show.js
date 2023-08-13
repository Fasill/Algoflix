import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import {Bubble} from './algosComponents/searching/bubbleSort.js'
import {Selection} from './algosComponents/searching/selectionSort.js'

import style from './assets/stles/show.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import {ButtomNavbar} from './bottomNavbar'
import {SideDropdown} from './sideDropdown'

export const Show = () => {
  const imagePath = process.env.PUBLIC_URL ;
  const [typeOfalgo,setTypeOfalgo]= useState("")




  useEffect(() => {
    const storedAlgo = localStorage.getItem("algo");
    setTypeOfalgo(storedAlgo);
    console.log("Stored algo:", storedAlgo);
  }, []);
  useEffect(() => {
    const urlParts = window.location.pathname.split('/');
    const algoTypeFromUrl = urlParts[urlParts.length - 1];

    if (['bubble', 'selection'].includes(algoTypeFromUrl)) {
      setTypeOfalgo(algoTypeFromUrl);
      localStorage.setItem('algo', algoTypeFromUrl);
    }
  }, []);

  
  return (
    <div className={style.show}>

    <div className={style. hero}>

          <Bubble/>
          <Selection/>
      </div>
    </div>

    
  );
};

