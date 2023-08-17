
import {Bubble} from './algosComponents/searching/bubbleSort.js'
import {Selection} from './algosComponents/searching/selectionSort.js'

import style from './assets/stles/show.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Show = ({ scrollTo }) => {
  const location = useLocation();

  useEffect(() => {
    if (scrollTo) {
      const targetElement = document.getElementById(scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, scrollTo]);

  return (
    <div className={style.show}>
      <div className={style.hero}>
        <div id="bubble">
          <Bubble />
        </div>
        <div id="selection">
          <Selection />
        </div>
      </div>
    </div>
  );
};