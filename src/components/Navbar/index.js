import React, { useState } from 'react'
import './style.css';
import {NavLink} from 'react-router-dom';
import search32 from '../../assets/icons/search.png';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [ search, setSearch ] = useState(false);

 
    const submitSearch =(e) => {
        e.preventDefault();
        alert('Searched');
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active':'searchInput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-me">About Me</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
       </ul>
       <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search"/>
          <img onClick={openSearch} className="searchIcon" src={search32} alt="Search" />

        </form>
       </div>
    </div>
   )

 }

export default Navbar