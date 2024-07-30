
import { useState } from 'react';
import '../styles/navBar.css'
import SideBar from './sideBar';

const NavBar = () => {
    const [showSideBar,setShowSideBar] = useState(false);
   const closeSideBar=()=>{
    setShowSideBar(false);
   }
    return ( 
        <>
        <div className="navbar">
           <a href='#!' className='logo'>F<span>oo</span>diesHub</a>
            <div className='nav-links'>
                <a href='#!'>Home</a>
                <a href='#!'>Recipes</a>
            </div>
            <div onClick={()=>setShowSideBar(!showSideBar)} className={showSideBar ? 'sideBar-icon active' : 'sideBar-icon'} >
                <div className='bar'></div>
                <div className='bar '></div>
                <div className='bar'></div>
            </div>
        </div>
        {showSideBar && <SideBar close={closeSideBar}/>}
        
        </>
     );
}
 
export default NavBar;