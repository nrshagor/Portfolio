import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    console.log(Products);
    return (
        <div id='projects'>
            <div>
                <h1>My Project

                </h1>
            </div>
            <div className="mr-3 w-100  d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-3 g-5">


                {
                    Products.map(product => <Card className="mx-3" key={product.key} >
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title>{product.Product_Name}</Card.Title>
                            <h3>Product Price:{product.Product_Price}</h3>
                            <h4>Product Duration: {product.Product_duration}</h4>
                            <Link to={`/project/${product.key}`}><button className="btn btn-warning">Read More</button></Link>
                        </Card.Body>
                    </Card>)
                }


            </div >
        </div>
    );
};

export default Projects;