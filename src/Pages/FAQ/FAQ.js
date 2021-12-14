import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div>
            <Container>
                <h1>FAQ</h1>
                <Accordion className='m-5 p-5'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Where can I see your professional work?</Accordion.Header>
                        <Accordion.Body>
                            Thank you for asking! When you clicked my projects option you will find my work
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How long will the work take from start to finish?</Accordion.Header>
                        <Accordion.Body>
                            <p>It will depend on the scope of the project.</p>
                            <p>A single landing page may take 1-3 weeks, depending on the amount of copy.</p>
                            <p>A full website with 5-10 pages may take 6-8 weeks.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

        </div>
    );
};

export default FAQ;