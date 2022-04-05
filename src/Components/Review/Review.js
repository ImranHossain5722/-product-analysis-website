import React from 'react';
import'./Review.css'

const Review = (props) => {
const {img,name,Review,Rating}=props.review
    return (
        <div className='single-reviewCustomer'>
        
            <div className='single-review-container'>
             <p className='single-review-text'>{Review}</p>
             <h5 className='customer-name'>Name: {name} </h5>
             <p className='customer-rating'><span className='rating-text' >Rating:</span> {Rating}</p>   

            <img className='customer-img' src={img} alt="" />

            </div>        
        
        
        </div>
    );
};

export default Review;