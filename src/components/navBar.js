import style from './assets/stles/navbar.module.css'
import React, { useState,useEffect } from 'react';
import {motion} from 'framer-motion';

export const Navbar = ()=>{
  const imagePath = process.env.PUBLIC_URL ;
  const [val,setVal] = useState("")
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(()=>{
    setVal (localStorage.getItem("val"))
    console.log(val)
  },[])
  

  return (
    <div className={style.hole}>
      <div className={style.left}>
        
        
      <motion.h1
        animate={{
          scale: 1.5,
          color: '#ff0000',
          margin: 0,
        
          // Add any other CSS properties you want to animate
        }}>          ALGOFLIX
          </motion.h1>
      </div>
      <div className={style.middle}>
        {/* Drop-down menu */}
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/products">COURSES</a></li>
          <li><a href="/">ABOUT</a></li>
          <li><a href="/">LOGIN</a></li>
        </ul>
      </div>
      <div className={style.right}>
        {/* Hamburger menu icon */}
        <div className={`${style.menuIcon} ${showMenu ? style.active : ''}`} onClick={toggleMenu}>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={style.bar}></div>
          <div className={style.middle}>
        {/* Drop-down menu */}
      
      </div>
      <div> 
         <ul className={showMenu?style.drop_down:style.hide_drop_down}>
          <li><a href="/">HOME</a></li>
          <li><a href="/products">COURSES</a></li>
          <li><a href="/">ABOUT</a></li>
          <li><a href="/">LOGIN</a></li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
}