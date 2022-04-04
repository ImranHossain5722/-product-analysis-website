import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center mt-4'>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6 text-container'>
                    <h5>Welcome Our <br/><span className='dronShop'>Drone Shop</span></h5>
                    <h5>Buy Latest Drone</h5>
                    <p>Essentially, a drone is a flying robot that can be remotely controlled or fly autonomously using software-controlled flight plans in its embedded systems</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 m-2 dronImage">
                    <img src="images/img1.png" alt="" width={450} />
                </div>
            </div>
            
            <div className='review-container pt-4'>
             <p> Our Customer Review </p>   
        </div>
        </div>
        
    );
};

export default Home;