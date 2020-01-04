import React from "react";
import "./index.scss";
import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
const SideMenu = () => {
  return (

    <div className="sidemenu">
    	<a href="#" className="logo">logo</a>	
       <ul>
       		<li><a href="#">
       		<FontAwesome
		        name="far fa-play-circle"		        
		        
		      />
       		</a></li>
       		<li><a href="#">
       		<FontAwesome
		        name="far fa-book"	     
		    />
       		</a>
       		<ul className="submenu">
       			<li>
       				<a href="#">
       					<FontAwesome name="far fa-book"/>
       					lorem ipsum
       				</a>
       			</li>
       		</ul>
       		</li>
       		<li><a href="#">
       		<FontAwesome
		        name="far fa-play"	        
		        
		      />
       		</a></li>
       		<li><a href="#">
       		<FontAwesome name="far fa-sticky-note"/>
       		</a>
       		<span className="sidebar-tooltip">Book</span>
       		</li>
       		<li><a href="#">
       		<FontAwesome
		        name="far fa-play-circle"		        
		       
		      />
       		</a></li>
       		<li><a href="#">
       		<FontAwesome
		        name="far fa-play-circle"		        
		       
		      />
       		</a></li>
       		<li><a href="#">
       		<FontAwesome
		        name="far fa-play-circle"		        
		        
		      />
       		</a></li>
       </ul>
    </div>
  );
};

export default SideMenu;
