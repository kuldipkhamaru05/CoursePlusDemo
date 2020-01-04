import React from "react";
import "./index.scss";
import FontAwesome from 'react-fontawesome'


const Footer = () => {
  return (
    <footer className="footer">
       <div className="inner-footer">
       		<p>© 2019 <strong>Dummy</strong>. All Rights Reserved.</p>
       		<ul className="foot-social">
       			<li><a href="#">
       			<FontAwesome name="fab fa-facebook-square"/>
       			</a></li>
       			<li><a href="#">
       			<FontAwesome name="fab fa-dribbble"/>

       			</a></li>
       			<li><a href="#">
       			<FontAwesome name="fab fa-youtube"/>
       			</a></li>
       			<li><a href="#">
       			<FontAwesome name="fab fa-twitter"/>
       			</a></li>
       		</ul>
       </div>
    </footer>
  );
};

export default Footer;
