import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='first-q'>
                <h3>What is Context Api</h3>
                <p>Context provider a way to pass data through the components tree without having to pass props down manually at every level.Context is designed to share data that can be considered "global" for a tree of react components,such as the current authenticated user,theme or preferred language.for example in the code below we manually thread through a "theme" prop in order to style the button component</p>
            </div>
                <div className='second-q'>
                <h3>What is Semantic elements</h3>
                <p>A semantic elements we can understand clearly describe its to both the browser and developer html5 semantic elements help structure the code we create making it more readable and easier to maintain. they help us think about structure of our dynamic dta and to choose titles such like that  </p>
                    <p>
                     1/ article
                     2/ aside
                    3/ details
                    4/header
                    5/footer
                    6/main
                    7nav
                    </p>
                </div>

        </div>
    );
};

export default Blogs;