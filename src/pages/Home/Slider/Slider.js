import React from 'react';

const Slider = ({slider}) => {
    const { id, prev, next, image } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <img src={image} className="w-full" alt='' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute top-10 lg:top-1/4 left-5 lg:left-56">
                <h1 className='lg:text-6xl text-white font-bold text-center'>
                Your dream websites and <br /> instant apps awaits !
                </h1>
                <p className='invisible lg:visible lg:text-2xl lg:mt-10 text-white lg:text-center font-bold'>Welcome to our fresh collection of themes.<br /> Hope you find your dream website and instant apps here.<br /> Start your journey with our themes.</p>
            </div>
        </div>

    );
};

export default Slider;