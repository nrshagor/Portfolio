import React from 'react';
import { Link } from 'react-router-dom';

const BlogCss = () => {
    return (
        <div className="">

            <div className="container p-5">
                <div className="purchase-box">
                    <div className="row">
                        <div className=" col-md-12">
                            <div className="card">
                                {/* <div className="products-img">
                                    <img src="" alt="" />
                                </div> */}
                                <div className="products-info" style={{ textAlign: " justify" }}>
                                    <h1>CSS</h1>
                                    <p>If you are a web developer or become a web developer you must have heard the name of CSS. CSS is a programming language we used for designing our web page. CSS stands for Cascading Style Sheets and describes how HTML elements are to be displayed on screen, paper, or in other media.
                                        I will just talk about some Contents of CSS.
                                    </p>
                                    <p> Flexbox: Flexbox is one of the most useful CSS layout features. It’s tempting to add display: flex to a wrapper and have the child items ordered next to each other. </p>
                                    <b>
                                        display: flex;
                                    </b>
                                    <br />

                                    If you have less space, horizontal scrolling will occur. That should be expected and isn’t actually a big problem. To fix that, just use flex wrapping.
                                    <br />
                                    <b>

                                        display: flex;
                                        flex-wrap: wrap;
                                    </b>
                                    <br />
                                    <p>
                                        Background-Repeat:
                                        When we use a large image as a background  That background will repeat by default. To solve this problem we used this code.
                                    </p>
                                    <br />
                                    <b>


                                        background-image: url('..');
                                        background-repeat: no-repeat;
                                    </b>
                                    <p>
                                        Auto Fit Vs Auto Fill
                                        It's important to decide between using the auto-fit or auto-fill keywords When using the CSS grid minmax() function. If we use it incorrectly, it can lead to unexpected results.
                                        When using minmax() function, the auto-fit keyword will expand the grid items to fill the available space. While auto-fill will keep the available space reserved without altering the grid items width.
                                    </p>

                                    Auto-fit:
                                    <br />
                                    <b>                  display: grid;
                                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                                        grid-gap: 1rem;
                                    </b>


                                    <br />
                                    Auto-fill:

                                    <b>
                                        display: grid;
                                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                                        grid-gap: 1rem;
                                    </b>


                                    <p>
                                        Most of the time, using auto-fill is better ….
                                        Happy Coding….
                                    </p>

                                    <Link to="/blog"><button className="btn btn-warning">Back</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCss;