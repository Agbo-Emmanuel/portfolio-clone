import React from 'react';
import Card from "./Card"
import cardimg1 from "./img/cardimg1.png";
import cardimg2 from "./img/cardimg2.svg";
import cardimg3 from "./img/cardimg3.svg";
import cardimg4 from "./img/cardimg4.svg";
import javascripticon from "./img/javascripticon.svg";
import htmlicon from "./img/htmlicon.svg";
import cssicon from "./img/cssicon.svg";
import twitter from "./img/twittericon.svg";
import linkedin from "./img/linkedinicon.svg";
import Micon from "./img/Micon.svg";
import github from "./img/githubicon.svg";
import hand from "./img/handicon.svg";
import forwardarrow from "./img/forwardarrow.png";
import downarrow from "./img/downwardarrow.png";





const Section = ()=>{
    return(
        <>
            <div className="Section">
                <div className='section1'>
                    <div className='section1content'>
                        <h1>I’m Agbo Emmanuel<br/>Glad to see you!</h1>
                        <p>I’m a software developer! I can help you build a product , feature or website Look through some of my work and<br/>experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
                        <span>LET'S CONNECT</span>
                        <div className='section1contenticons'>
                            <div className='contenticon'>
                                <img src={twitter} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={linkedin} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={Micon} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={github} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={hand} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='section2'>
                    <Card
                        img={cardimg1}
                        h1="Awsome Books"
                        media="Library"
                        year="2022"
                        text="Is an online library application that enables users to keep track of books in their library by adding to and removing books from a list. Built with JavaScript ES6 syntax, HTML, and CSS."
                        stack="Full Stack Dev"
                    />
                    <Card
                        img={cardimg2}
                        h1="Multi-Post Stories"
                        media="Facebook"
                        year="2015"
                        text="Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends."
                        stack="Full Stack Dev"
                        direction="row-reverse"
                    />
                    <Card
                        img={cardimg3}
                        h1="Facebook 360"
                        media="Facebook"
                        year="2015"
                        text="Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR."
                        stack="Full Stack Dev"
                    />
                    <Card
                        img={cardimg4}
                        h1="Uber Navigation"
                        media="Uber"
                        year="2018"
                        text="A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.."
                        stack="Lead Developer"
                        direction="row-reverse"
                    />
                </div>


                <div className='section3'>
                    <div className='section3left'>
                        <h1>About<br/>Myself</h1>
                        <p>Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
                        <span>LET'S CONNECT</span>
                        <div className='section3contenticons'>
                            <div className='contenticon'>
                                <img src={github} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={linkedin} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={hand} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={twitter} alt="" />
                            </div>
                            <div className='contenticon'>
                                <img src={Micon} alt="" />
                            </div>
                        </div>
                        <button>Get my resume</button>
                    </div>
                    <div className='section3right'>
                        <div className='lang'>
                            <h3>Languages</h3>
                            <div className='downarrow'>
                                <img src={downarrow} alt="" />
                            </div>
                        </div>
                        <div className='languageicons'>
                            <div className='icons'>
                                <div className='icon'>
                                    <img src={javascripticon} alt="" />
                                </div>
                                <p>JavaScript</p>
                            </div>
                            <div className='icons'>
                                <div className='icon'>
                                    <img src={htmlicon} alt="" />
                                </div>
                                <p>HTML</p>
                            </div>
                            <div className='icons'>
                                <div className='icon'>
                                    <img src={cssicon} alt="" />
                                </div>
                                <p>CSS</p>
                            </div>
                        </div>
                        <div className='lang1'>
                            <h3>Frameworks</h3>
                            <div className='downarrow'>
                                <img src={forwardarrow} alt="" />
                            </div>
                        </div>
                            <div className='line'></div>
                        <div className='lang2'>
                            <h3>Skills</h3>
                            <div className='downarrow'>
                                <img src={forwardarrow} alt="" />
                            </div>
                        </div>
                            <div className='line'></div>
                    </div>
                </div>


                <div className='section4'>
                    <div className='section4content'>
                        <h1>Contact me</h1>
                        <p>If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it</p>
                        <input type="text"  placeholder='Name'/>
                        <input type="email"  placeholder='example@gmail.com'/>
                        <input  className="message" type="text"  placeholder='Write your message here...'/>
                        <button>Get in Touch</button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Section