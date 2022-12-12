import React from 'react';
import img1 from '../../images/img9.jpg';
import img2 from '../../images/img11.jpg';
import img3 from '../../images/img3.jpg';
import Slider from './Slider/Slider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    const { data: productsCategory = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            return data;
        }
    })

    const sliderItem = [
        {
            image: img1,
            id: 1,
            prev: 3,
            next: 2
        },
        {
            image: img2,
            id: 2,
            prev: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            prev: 2,
            next: 1
        }

    ]

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {/* slider section  */}
            <div className="carousel w-full rounded-lg">
                {
                    sliderItem.map(slider => <Slider
                        key={slider.id}
                        slider={slider}></Slider>)
                }
            </div>


            {/* category section  */}
            <div className='mt-10'>
                <h1 className='text-4xl font-bold text-center'>OUR CATEGORIES</h1>
                <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        productsCategory.map(category => <ProductCategory
                            key={category._id}
                            category={category}
                        ></ProductCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;