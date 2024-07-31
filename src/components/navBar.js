
import { useState } from 'react';
import SideBar from './sideBar';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [showSideBar,setShowSideBar] = useState(false);
   const closeSideBar=()=>{
    setShowSideBar(false);
   }
   const location = useLocation();
    return ( 
        <>
        <div className="navbar">
           <a href='/' className='logo'>F<span>oo</span>diesHub</a>
            <div className='nav-links '>
                <Link to='/'className={location.pathname === '/'?"active":""}>Home</Link>
                <Link to='/RecipePage' className={location.pathname === '/RecipePage'?"active":""}>Recipes</Link>
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