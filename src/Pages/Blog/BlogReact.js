import React from 'react';
import { Link } from 'react-router-dom';

const BlogReact = () => {
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
                                    <h1>React JS</h1>
                                    <p>   State: State used to contain data or information about the component. It can change over time. The change can happen as a response to user action or system events . Somebody said that  State is the heart of the react component which determines the behavior of the component and how it will render. The state represents the component's information or local state. The state can only be modified or accessed inside the component or by the component directly.</p>


                                    <p>   Props: It is a read-only component. Props is an object which stores the value of attributes of a tag. Props work like HTML attributes. When we need to pass data from one component to other components we use Props. Props are similar to function arguments. It can be passed to the component the same way as arguments passed in a function. It is also immutable. we cannot modify the props from inside the component.</p>

                                    <p> Similarities About State and Props: State and Props Both plain JS objects and they are read-only when they are used by this.</p>

                                    Difference between State and Props:
                                    <p>   Props:
                                        1.
                                        It is read-only.
                                        2.
                                        It is immutable.
                                        3.
                                        It allows you to pass data from one component to other components as an argument.
                                        4.
                                        It can be accessed by the child component.
                                        5.
                                        It is used to communicate between components.
                                        6.
                                        It makes components reusable.
                                        7.
                                        Stateless components can have Props
                                        8.
                                        Props are external and controlled by whatever renders the component.</p>
                                    <p> State
                                        1.
                                        Its changes can be asynchronous.
                                        2.
                                        It is mutable.
                                        3.
                                        It holds information about the components.
                                        4.
                                        It cannot be accessed by child components.
                                        5.
                                        It can be used for rendering dynamic changes with the component.
                                        6.
                                        It  cannot make components reusable.
                                        7.
                                        Stateless components cannot have State.
                                        8.
                                        The State is internal and controlled by the React Component itself.

                                    </p>
                                    <b>
                                        Now you can Understand about State and Props.
                                        Happy Coding…</b>
                                    <br />

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

export default BlogReact;