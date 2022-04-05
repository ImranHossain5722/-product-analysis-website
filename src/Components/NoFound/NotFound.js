import React from 'react';
import './NotFound.css'
import {useNavigate} from 'react-router-dom'
const NotFound = () => {
const navigate= useNavigate() 

    return (
        <div className='notFound-containers'>
                   <div className='text-align-center col-12 col-md-12 col-lg-12 col-xl-12 m-4 notFound-container '>
                       <h1 className='text-align-center notFound'> Oops! Sorry not Found </h1>
                    <img src="images/img404.png" alt="" width={350} />

                </div> 
                <button className=' btn-lg show-review-btn' onClick={()=>navigate("/")}> Back to Home  </button>


        </div>
    );
};

export default NotFound;