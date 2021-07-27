import React,{useState} from 'react'


import '../Footer/footer.css'
export const Footer=()=> {

    const curDate= new Date().getFullYear();

    return (
      <div className="footer">
        <div className="prefooter">
            <div className="elevate">
                <div>                
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/58/Jadavpur_University_Logo.svg"
                        className="logo"
                        alt=""/>
                    <h3>College-Memories</h3>
                    <h4>Jadavpur University</h4>
                    <p>A Platform Where You Can Share Your All College Memories.</p>
                    <ul className="submenu">
                        <li>
                            <a href="mailto:contact2debsankar@gmail.com" className="mail"> contact2debsankar@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="menu-section">
                <div className="menu">
                    <h3 className="menu-head">
                        Some Information
                    </h3>
                    <ul className="submenu">
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Our Department
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Club Activities
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Our Campus Life
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Achievements
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                R&D 
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Cultural-Fest
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <h3 className="menu-head">
                        Actions
                    </h3>
                    <ul className="submenu">
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Work with Us
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Suggestions
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Discussion Forum
                            </a>
                        </li>
                        <li className="links">
                            <a href="#">
                                <img src="https://img.icons8.com/metro/12/000000/chevron-right.png"/>
                                Contact Us
                            </a>
                        </li>
                        <li className="links">
                            <div className="socialIcons">
                                <a href="https://en-gb.facebook.com/" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/facebook-new.png"/>
                                </a>
                                <a href="#" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/whatsapp.png"/>
                                </a>
                                <a href="https://github.com/Debsankar1" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/github.png"/>
                                </a>
                                <a href="https://www.linkedin.com/in/debsankar-mandal-0a7385168/" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/linkedin-circled.png"/>
                                </a>
                                <a href="https://www.youtube.com/" className="socialIcon">
                                    <img src="https://img.icons8.com/fluent/40/000000/youtube-play.png"/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>
                &copy; Copyright {curDate} <a href="#">College-Memories | Developed by Debsankar Mandal</a> | Trial-Version 
            </p>
        </div>
    </div>
    );
  }
  
 
  