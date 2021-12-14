import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('client_sms', 'template_kfdfhwn', form.current, 'user_YC3yW6FVU4j8m4XEcmf3r')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div>
            <section id='contact' className='contacts'>
                <div className="content">
                    <h2>Contact Me</h2>
                </div>
                <div className="contact-container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i className="fas fa-map-signs"></i></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>585/1 Modhubag Moghbazar Dhaka</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fas fa-phone-square-alt"></i></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+880 1725-885591</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fas fa-envelope-open-text"></i></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>noorerabbishagor@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form ref={form} onSubmit={sendEmail}>
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="name" placeholder="" required />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="email" placeholder="" required />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea name="message" id="" cols="10" rows="3" required placeholder="">
                                </textarea>
                                <span>Type your message...</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" name="" value="send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Contact;