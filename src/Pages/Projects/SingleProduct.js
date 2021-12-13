import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './SingleProduct.css'
const SingleProduct = () => {
    const { id } = useParams()
    const [Services, setServices] = useState([]);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    useEffect(() => {
        const productInfo = Services.find(pro => pro?.key == id);
        setDetails(productInfo)
    }, [Services])
    return (
        <div>
            <div className=" p-5 mr-3 w-100 d-flex justify-content-center align-items-center row row-cols-1 row-cols-md-4 my-0 g-5">


                <Card className="mx-3 my-4 servicescard ">
                    <Card.Img className="img" variant="top" src={details?.img} />
                    <Card.Body>
                        <Card.Title>{details?.Product_Name}</Card.Title>
                        <p>{details?.Product_description}</p>
                        <p className='language'>
                            <li><span className='html'>{details?.HTML}</span></li>
                            <li><span>{details?.CSS}</span></li>
                            <li><span>{details?.JavaScript}</span></li>
                            <li><span>{details?.bootstrap}</span></li>
                            <li><span>{details?.ReactJS}</span></li>
                            <li><span>{details?.Nodejs}</span></li>

                        </p>

                        <Link to="/projects"><button className="btn btn-warning">View All</button> </Link>

                    </Card.Body>
                </Card>
            </div >
        </div>
    );
};

export default SingleProduct;