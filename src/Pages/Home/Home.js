import React from 'react';
import './Home.css'
import pic01 from '../../Images/pic01.jpg'
import { Typewriter } from 'react-simple-typewriter'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contacts/Contact';
import FAQ from '../FAQ/FAQ';
import { Link } from 'react-router-dom';
import mycv from './nrshagor.pdf';
const Home = () => {
    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count)
    // }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div >
            <div class="start flex justify center ">
                <div class="left center ">

                    <p>"<strong>Hello World</strong>"</p>
                    <p>Myself N R SHAGOR</p>
                    <p>   I'm  a {' '}
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}

                            <Typewriter
                                words={['Web Developer...', 'Freelancer...', 'Designer...']}
                                loop={Infinity}
                                cursor
                                cursorStyle=''
                                typeSpeed={80}
                                deleteSpeed={60}
                                delaySpeed={2000}
                                onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </p>
                    <br />
                    <div className='btn-group'>
                        <Link to={mycv} target="_blank"><button class="btn btn-cv" >View Resume</button></Link>
                        <a href="#contact" smooth={true} duration={1000}><button class="btn btn-start">Hire Me</button></a>
                    </div>
                </div>
                <div class="right center">
                    <img src={pic01} alt="" />
                </div>
            </div>

            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;