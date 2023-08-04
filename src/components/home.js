import {Navbar} from "./navBar.js"
import style from './assets/stles/home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import  './assets/stles/home.css'
import {Algos} from './algos.js'
import { useEffect } from "react";
export const Home=()=>{
  const imagePath = process.env.PUBLIC_URL ;
  useEffect(()=>{
    localStorage.setItem("val","")
  },[])
  return (
    <div className={style.main}>

      <div>
        <Navbar/>
      </div>
      <div className={style.hero}>
        <h1>Visualize, Analyze, and Succeed</h1>
        <div className= {`input-group ${style.input}`}>
      <div className={`form-outline ${style.searchcard}`}>
        <input placeholder="search" type="search" id="form1" className="form-control" />
      </div>
      <button type="button" className={`btn btn-primary `}>
        <i className={`fas fa-search ${style.bttn}`}><img src={`${imagePath}/search.svg`}/></i>
      </button>
    </div>

      </div>
      <div className={style.container}>
        <div className={style.algos}>
          <Algos />
        </div>
        <div className={style.algobackgroundContainer}>
          <img className={style.algobackground} src={`${imagePath}/algoBoard.png`} />
        </div>
      </div>

    </div>
  )
} 