import React from "react";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
        <div className="breadcums">
        	<ul>
        		<li><a href="#">Dashboard</a></li>
        		<li><a href="#">Courses</a></li>
        		<li className="current-menu-item"><a href="#">Browse Web Development</a></li>
        	</ul>  
        </div>
    </header>
  );
};

export default Header;
