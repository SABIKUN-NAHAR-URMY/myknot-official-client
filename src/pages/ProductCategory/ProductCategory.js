import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({ category }) => {
    const { category_id, name, picture} = category;
    return (
        <div className="card w-96 h-40 image-full">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <Link to={`/categoryData/${category_id}`}>
                    <h2 className="text-4xl font-bold flex items-center justify-center pt-11">{name}</h2>
                </Link>
            </div>
        </div>
    );
};

export default ProductCategory;