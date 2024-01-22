import React from "react";
import "./Aside.css";
import photo from "../Component/img/pexels-nout-gons-378570.jpg";

const email = 'masksymwsd@gmail.com'
const subject = 'Subject of the email';
const body = 'Body of the email';
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Aside() {
  return (
    <aside>
      <div className="imgBlock">
        <img src={photo} />
      </div>

      <div className="Information">
        <div className="Content">
          <div className="tittle">
            <h2>Content</h2>
                <hr />
          </div>

          <div className="info">
            <div className="phone infoDate">
              <h3>Phone</h3>
                <a href="tel:+312 647 0146">+312 647 0146</a>
                
            </div>
            {/* - */}
            <div className="Email infoDate">
                <h3>Email</h3>
                <a href={mailtoLink}>{email}</a>
            </div>
            {/* -  */}
            <div className="Address infoDate">
                <h3>Address</h3>
                <a>4944 W. Belmont Ave.</a> 
                 
            </div>

          </div>
        </div>

        <div className="Education">
                  <div>
                      <h2>Education</h2>
                      <hr/>
                  </div>
                <div className="Block_1 BlockEducation">
                  <p>2023</p>
                  <h3>Ukrainian High School</h3>
                  <p>Computer Science</p>
                </div>
                <div className="Block_2 BlockEducation">
                  <p>2022 - 2023</p>
                  <h3>Front-End Development <span>Course</span> </h3>
                  <p>HTML CSS JS</p>
                </div>     
        </div>
              
        <div className="Expertise">
            <div className="tittle">
                <h2>Expertise</h2>
                <hr/>
            </div>
                  
            <div className="BLockList">
                <ul>
                     <li>JavaScript</li>     
                     <li>HTML</li>     
                     <li>CSS</li>     
                     <li>CSCC</li>     
                     <li>React.js</li>     
                </ul>
            </div>
        </div>
        <div className="Launguage">
            <div className="tittle">
                <h2>Launguage</h2> 
               <hr/>       
            </div>
            <div className="LaunguageList">
                <p>English</p>
                <p>Ukrainian</p>
            </div> 
        </div>
      </div>
    </aside>
  );
}

export default Aside;
