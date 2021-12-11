import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form } from 'react-bootstrap';
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
        <div id='contact' className='black'>
            <h1>Contact From</h1>
            <div className="container p-3 col-md-6  add-product-right">
                <Form ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="text" name="name" placeholder="Enter Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" name="email" placeholder="Enter email" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Write Something</Form.Label>
                        <Form.Control as="textarea"
                            placeholder="comment here"
                            name="message"
                            style={{ height: '100px' }} type="text" />
                    </Form.Group>

                    <Button variant="primary" type="submit" value="Add">
                        Submite Review
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default Contact;