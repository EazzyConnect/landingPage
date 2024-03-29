import React from 'react';
import LinkBar from './LinkBar';
import HeaderCSS from './Header.module.css';
import Login from './Login';
import { Link } from 'react-router-dom';


const Header = () => {


 return (
  <>
   <div id={HeaderCSS.container}>

    <div id={HeaderCSS.container1}>
     <h1>Logo</h1>
    </div>

    <div>

     <div id={HeaderCSS.container2}>
      <Link to={"/login"}>
       <button id={HeaderCSS.logBtn}>Login</button>
      </Link>
      <Link to={"/"}>
       <button id={HeaderCSS.logBtn}>Logout</button>
      </Link>
     </div>

     <div id={HeaderCSS.container3}>
      <LinkBar to={"/"} text={"Home"} />
      <LinkBar to={"/about"} text={"About"} />
      <LinkBar to={"/contact"} text={"Contact"} />
      <LinkBar to={"/settings"} text={"Settings"} />
     </div>

    </div>

   </div>

  </>
 )
};

export default Header;
