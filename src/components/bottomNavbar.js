import style from './assets/stles/ButtomNavbar.module.css'
import React, { useState,useEffect } from 'react';
import {motion} from 'framer-motion';

export const ButtomNavbar = ()=>{
  const imagePath = process.env.PUBLIC_URL ;
  const [val,setVal] = useState("")
  const [showMenu, setShowMenu] = useState(false);
  // const []
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(()=>{
    setVal (localStorage.getItem("val"))
    console.log(val)
  },[])
  

  // ======================
  const [numberInputs, setNumberInputs] = useState(new Array(10).fill(''));

  const handleInputChange = (event, index) => {
    const newInputs = [...numberInputs];
    newInputs[index] = event.target.value;
    setNumberInputs(newInputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('numberInputs', JSON.stringify(numberInputs));
  };
  // =======================

  return (
    <div className={style.hole}>
      <div className={style.left}>
        
        
     
      </div>
      <div className={style.middle}>
        {/* Drop-down menu */}
        <form onSubmit={handleSubmit}
          className={style.form}>
        <input
          type="number"
          value={numberInputs[1]}
          onChange={(event) => handleInputChange(event, 1)}
        />
        <input
          type="number"
          value={numberInputs[2]}
          onChange={(event) => handleInputChange(event, 2)}
        />
                <input
          type="number"
          value={numberInputs[3]}
          onChange={(event) => handleInputChange(event, 3)}
        />
        <input
          type="number"
          value={numberInputs[4]}
          onChange={(event) => handleInputChange(event, 4)}
        />
                <input
          type="number"
          value={numberInputs[5]}
          onChange={(event) => handleInputChange(event, 5)}
        />
        <input
          type="number"
          value={numberInputs[6]}
          onChange={(event) => handleInputChange(event, 6)}
        />
                <input
          type="number"
          value={numberInputs[7]}
          onChange={(event) => handleInputChange(event,7)}
        />
        <input
          type="number"
          value={numberInputs[8]}
          onChange={(event) => handleInputChange(event, 8)}
        />
                <input
          type="number"
          value={numberInputs[9]}
          onChange={(event) => handleInputChange(event, 9)}
        />
        <input
          type="number"
          value={numberInputs[10]}
          onChange={(event) => handleInputChange(event, 10)}
        />
        {/* Add 8 more input fields in a similar way */}
        <input className={style.submitbtn}type="submit"/>
      </form>
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
         <li><input/></li>
          <li><input/></li>
          <li><input/></li>
          <li><input/></li>
          <li><input/></li>
          <li><input/></li>
          <li><input/></li>
          <li><input/></li>
          <li><input/></li>
          <li><input/></li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
}