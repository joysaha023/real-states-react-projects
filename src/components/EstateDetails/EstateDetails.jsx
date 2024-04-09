import React from 'react';
import {useLoaderData, useParams} from 'react-router-dom';



const EstateDetails = () => {
    const {id} = useParams();
    const  estates = useLoaderData();
    const estate = estates.find(item => item.id == id)
    
    
    
    return (
        <div>
            <h1 className='text-6xl'>{estate.estate_title}</h1>
            <img src={estate.image} alt="" />
        </div>
    );
};

export default EstateDetails;