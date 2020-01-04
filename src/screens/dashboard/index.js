import React from "react";
import "./index.scss";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sliderImg from '../../assets/images/1.png';
import clockImg from '../../assets/images/clock.svg';
import angularIc from '../../assets/images/angularic.png';
import angularIc1 from '../../assets/images/4.png';
import angularIc2 from '../../assets/images/2.png';
import angularIc3 from '../../assets/images/3.png';

import FontAwesome from 'react-fontawesome'
const Dashboard = () => {
  return (
    <div className="container">
      <div className="progrss-course">
        <div className="inner-heading">
          <h3>Progress Courses</h3>
          <a href="#">View All</a>
        </div>
        <OwlCarousel className="owl-theme" loop margin={30} nav dots={false} items={5}>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc1} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc2} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc3} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc3} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="popular-topic">
      	<div className="inner-heading">
          <h3>Popular <a href="#">Topics</a></h3>
          <a href="#">View All</a>
        </div>
        <div className="popular-topicwrap">
        	<div className="popular-item">
        		<div className="inner-popular-item">
        			<figure><img src={angularIc} alt=""/></figure>
        			<div className="coursename-details">
        				<h3>Angular Courses</h3>
        				<ul>
        					<li>5 courses</li>
        					<li>3 bundles</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="popular-item">
        		<div className="inner-popular-item">
        			<figure><img src={angularIc} alt=""/></figure>
        			<div className="coursename-details">
        				<h3>Angular Courses</h3>
        				<ul>
        					<li>5 courses</li>
        					<li>3 bundles</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="popular-item">
        		<div className="inner-popular-item">
        			<figure><img src={angularIc} alt=""/></figure>
        			<div className="coursename-details">
        				<h3>Angular Courses</h3>
        				<ul>
        					<li>5 courses</li>
        					<li>3 bundles</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="popular-item">
        		<div className="inner-popular-item">
        			<figure><img src={angularIc} alt=""/></figure>
        			<div className="coursename-details">
        				<h3>Angular Courses</h3>
        				<ul>
        					<li>5 courses</li>
        					<li>3 bundles</li>
        				</ul>
        			</div>
        		</div>
        	</div>

        </div>
      </div>

      

      <div className="progrss-course">
        <div className="inner-heading">
          <h3>Browse Web Development <span className="makeColor">Episodes</span></h3>
          <a href="#">View All</a>
        </div>
        <OwlCarousel className="owl-theme" loop margin={30} nav dots={false} items={4}>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc3} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc2} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc1} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont">
                <h5>Learn The Complete Ruby on Rails Developer</h5>
                <h6>3/20</h6>
                <div class="course-progressbar">
                  <div class="course-progressbar-filler" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      <div className="progrss-course">
        <div className="inner-heading">
          <h3>Browse Web Development <span className="makeColor">Courses</span></h3>
          <a href="#">View All</a>
        </div>
        <OwlCarousel className="owl-theme" loop margin={30} nav dots={false} items={4}>

          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc3} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc2} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={angularIc1} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div><div class="item">
            <div className="inner-items">
              <figure>
                <img src={sliderImg} alt="" />
              </figure>
              <div className="course-cont browser-web-dev">
                <div className="course-card-info">
                	<h4>Angular</h4>
                	<i><FontAwesome name="far fa-bookmark"/></i>                	
                </div>
                <h5>Learn Angular Fundamentals</h5>
                <p>Learn how to build and launch React web applications using React, Redux</p>
                <div class="course-card-footer">
                     <p><i><FontAwesome name="fas fa-film"/></i> 12 Lectures </p>
                     <p><i><img src={clockImg} alt=""/></i> 64 Hours </p>
                 </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>

      
    </div>
  );
};

export default Dashboard;