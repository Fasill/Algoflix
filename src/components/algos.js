import style from './assets/stles/algos.module.css'
import {useNavigate} from 'react-router-dom'

export const Algos = ()=>{
  const navigate = useNavigate()
  const imagePath = process.env.PUBLIC_URL ;
  const clicked = (val) =>{ 
    navigate(`/${val}`)
    localStorage.setItem("val",val)
    console.log("clicked")
  }
  return (
    <div className={style.all}>
      <div className = {style.titles}>
        <h1 className = {style.title}>Algorithms</h1>
        <img className = {style.underline}src ={`${imagePath}/underline.svg`}/>
      </div>
  <div className={style.algo}>
    
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div>  
       
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div>    
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div>    
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div>    
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div>    
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div>    
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div>    
    <div className = {style.card} onClick={()=>{clicked("search")}}>
      <h1>searching</h1>
    </div> 
    </div>
  </div>
)
}


