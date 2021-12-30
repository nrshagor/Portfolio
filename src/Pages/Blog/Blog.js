import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <section>
                <div className="products">
                    <h1>Blog</h1>
                    <div className="card-body">
                        <div className="card">
                            {/* <div className="products-img">
                                <img src="" alt="" />
                            </div> */}
                            <div className="products-info">
                                <h1>CSS</h1>
                                <p>If you are a web developer or become a web developer you must have heard the name of CSS. CSS is a programming language we used for designing our web page. CSS stands for Cascading Style Sheets and describes how HTML elements are to be displayed on screen, paper, or in other media.
                                    I will just talk about some Contents of CSS.
                                </p>
                                <Link to="/css"><button className="btn btn-warning">Read More</button></Link>
                            </div>
                        </div>
                        <div className="card">
                            {/* <div className="products-img">
                                <img src="" alt="" />
                            </div> */}
                            <div className="products-info">
                                <h1>React</h1>
                                <p>State: State used to contain data or information about the component.
                                    It can change over time. The change can happen as a response to user
                                    action or system events .
                                    Somebody said that  State is the heart of the react
                                    component which determines the behavior of the component
                                    and how it will render. The state represents the component's i
                                    nformation or local state.

                                </p>
                                <Link to="/react"><button className="btn btn-warning">Read More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;