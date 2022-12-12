import React from 'react';
import aboutUs from '../../images/aboutus.png';
import profile from '../../images/profile.jpg';

const AboutUs = () => {
    return (
        <div>
            <div>

                <div className="relative w-full rounded-lg">
                    <img src={aboutUs} className="w-full rounded-lg" alt='' />
                </div>

                <div className='mt-5'>
                    <h1 className='text-6xl text-center font-bold'>Who we are</h1>
                    <p className='text-center m-10 text-xl animate-pulse'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iure voluptates accusamus dolorum repellat laborum magnam rem quibusdam, praesentium ducimus consequatur omnis nam fugit distinctio pariatur minima porro illo enim odit hic recusandae. Ullam sequi, nemo quis cumque accusamus molestiae quidem quo unde quibusdam rem obcaecati esse molestias beatae illum eos voluptas ea minima. Eaque libero ducimus asperiores commodi fuga provident ipsam assumenda, quod sit incidunt totam dolorem distinctio! Laborum vitae aliquid amet, possimus debitis quisquam doloribus, a unde dolorum molestiae deserunt quasi, placeat vel. Eum consequatur repellat eos in, nulla, labore vitae eveniet sit quibusdam ipsa impedit sequi sunt?</p>
                </div>

                <div className='mt-10 text-center'>
                    <div className="stats shadow">

                        <div className="stat place-items-center">
                            <div className="stat-title">EMPLOYEES</div>
                            <div className="stat-value">24+</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">OFFICES</div>
                            <div className="stat-value text-gray-500">2+</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title">CITIES</div>
                            <div className="stat-value">23+</div>
                        </div>

                    </div>
                </div>

                <div className='mt-10 text-center'>
                    <h1 className='text-6xl text-center font-bold'>Our founding brains</h1>

                    <div className="card lg:card-side shadow-xl mt-20 bg-gradient-to-r from-slate-300 to-slate-900 text-white">
                        <div className="avatar">
                            <div className="w-40 rounded-full m-10">
                                <img src={profile} alt=''/>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold text-center">Lorem ipsum.</h2>
                            <p className='font-thin'>Cofounder and CEO</p>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos doloribus nam facere voluptas ratione sit saepe officia voluptates enim animi ipsam dolorem error quisquam doloremque aperiam labore repellendus officiis praesentium libero, quia fugit esse. mmodi asperiores voluptates tempore rerum dolor suscipit architecto quae optio quis ipsum officiis delectus!</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 text-center'>

                    <div className="card lg:card-side shadow-xl mt-20 bg-gradient-to-r from-slate-300 to-slate-900 text-white">
                        
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold text-center">Lorem ipsum.</h2>
                            <p className='font-thin'>Cofounder and CEO</p>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eos doloribus nam facere voluptas ratione sit saepe officia voluptates enim animi ipsam dolorem error quisquam doloremque aperiam labore repellendus officiis praesentium libero, quia fugit esse. mmodi asperiores voluptates tempore rerum dolor suscipit architecto quae optio quis ipsum officiis delectus!</p>
                        </div>

                        <div className="avatar">
                            <div className="w-40 rounded-full m-10">
                                <img src={profile} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;