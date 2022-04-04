import React from 'react';
import {useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Home.css';


const Home = () => {
//data load

const [reviews,setReviews] = useState ([])
  useEffect(()=>{
    fetch('rating.json')
    .then(res=>res.json())
    .then(data=>(setReviews(data)))

  },[])

    return (
        <div>
             {/* top section  */}
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

                {/* Second Section customer review*/}
            <div className='review-container pt-4'>
             <p className='review-text'> Our Customer Review {reviews.length}</p>   

                <div className='reviewCustomer' >
                    {
                     reviews.map(review=><Review key= {review.id} review={review} ></Review> )
                    }
                </div>
        </div>
        </div>
        
    );
};

export default Home;