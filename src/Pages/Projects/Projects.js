import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css'
const Projects = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    console.log(Products);
    return (
        <div >
            <section id="projects">
                <div className="projects-container">
                    <h2 className="section-heading " data-outline="Projects">My Projects</h2>
                    <div className="all-items">
                        {Products.map(product => <div className="projects-item">
                            <div className="projects-left">
                                <div className="projects-img">
                                    <img className='project-img' src={product.img} alt="" />
                                </div>
                            </div>
                            <div className="projects-right">
                                <h2 className="project-title">{product.Product_Name}</h2>

                                <div className="buttons">
                                    <Link to={`/project/${product.key}`}><button className="btn btn-warning">Read More</button></Link>

                                    <a href={product.link} target="_blank" className="primary-btn outline external-link"> <span>View</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
            {/* <div className="mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    Products.map(product => <Card className="mx-3" key={product.key} >
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.Product_Name}</Card.Title>
                            <Link to={`/project/${product.key}`}><button className="btn btn-warning">Read More</button></Link>
                        </Card.Body>
                    </Card>)
                }


            </div > */}
        </div>
    );
};

export default Projects;