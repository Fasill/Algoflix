import {Navbar} from "./navBar.js"
import style from './assets/stles/home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import  './assets/stles/home.css'

export const Home=()=>{
  const imagePath = process.env.PUBLIC_URL ;

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
    </div>
  )
} 