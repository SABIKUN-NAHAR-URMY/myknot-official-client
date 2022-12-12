import React from 'react';

const DataDisplay = ({item}) => {
    const {category_id, picture, Name, rating, mobileNumber, description} = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title pb-5">{Name}</h2>
                <div className='text-lg'>
                   

                    <div className='flex justify-between font-thin pb-5'>
                        <p>Phone: {mobileNumber}</p>
                        <p>Rating:{rating}</p>
                    </div>
                   
                 

                    <p><strong>Description:</strong> <span className='font-thin'>{description}</span></p>
                </div>
            </div>
        </div>
    );
};

export default DataDisplay;