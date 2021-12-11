import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams()
    console.log('bal', id);
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
                        <h2>Prices: {id} TK</h2>
                        <p>{details?.Description}</p>

                        <Link to="/projects"><button className="btn btn-warning">View All</button> </Link>

                    </Card.Body>
                </Card>
            </div >
        </div>
    );
};

export default SingleProduct;