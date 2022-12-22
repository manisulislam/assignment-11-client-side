import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


  const menuItems = <>
  
  
    <Link className='pr-5' to='/' >HOME</Link>
    <Link className='pr-5' to='/login'>LOGIN</Link>
    <Link  className='pr-5' to='/register'>REGISTER</Link>
    <Link  className='pr-5' to='/blog'>BLOG</Link>
    
    
  
  
  
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
          menuItems
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">GOOD CHOICE</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {menuItems}
    </ul>
  </div>
 
</div>
    );
};

export default Header;