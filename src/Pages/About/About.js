import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../Images/me1.jpg'
import mycv from '../Home/nrshagor.pdf';
import './About.css'
const About = () => {
    return (
        <div id='about'>

            <section >
                <h1><span class="red">About</span> me</h1>
                <div class="about flex justify center ">
                    <div class="right center">
                        <img src={me} alt="" />
                    </div>
                    <div class="left center ">
                        <h1>I'm <span> N R SHAGOR</span></h1>
                        <p>Basically I am a programmer but I love to make Cartoon Animation, logo design, Video editing for
                            advertising, makeing Websites in programming language or wordpress. I have completed my engineering
                            graduation in computer science. I am always willing to find out new skills.</p>
                        <Link to={mycv} target="_blank"><button class="btn btn-cv" >View Resume</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;