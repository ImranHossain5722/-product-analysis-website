import React from 'react';
import'./Review.css'

const Review = (props) => {
const {img,name,Review,Rating}=props.review
    return (
        <div className='reviewCustomer'>
        
            <div className='card-body'>
             <p className='card-text'>{Review}</p>
             <h5 className='card-title'>Name: {name} </h5>
             <p className='card-text'>{Rating}</p>   

            <img src={img} alt="" />

            </div>
        
        
        
        
        </div>
    );
};

export default Review;