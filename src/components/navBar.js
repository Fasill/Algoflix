import style from './assets/stles/navbar.module.css'


export const Navbar = ()=>{
    return(
      <div className = {style.hole}>
        <div className= {style.left}>
            <h1>ALGOFLIX</h1>
        </div>
        <div className= {style.middle}>
          
          </div>
          <div className= {style.right}>
            <ul>
            <li><a href="/" >HOME</a></li>          
            <li><a href="/products">COURSES</a></li>          
            <li><a href="/">ABOUT</a></li>          
            <li><a href="/">LOGIN</a></li>  
            </ul>

          </div>
      </div>
    )
}