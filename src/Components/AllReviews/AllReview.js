import React from 'react';
import {useEffect, useState } from 'react';
import Review from '../Review/Review';

const AllReview = () => {
    const [reviews,setReviews] = useState ([])

    useEffect(()=>{
      fetch('rating.json')
      .then(res=>res.json())
      .then(data=>(setReviews(data)))
  
    },[])
  

    return (
        <div className='review-container pt-4'>
             <p className='review-text'> Our Customer Reviews </p>   

                <div className='reviewCustomer' >
                
                    <div className='reviewCustomer' >
                    {
                        reviews.map(review=><Review key= {review.id} review={review} ></Review> )
                    }
                    </div>
                </div>
        </div>       

    );
};

export default AllReview;