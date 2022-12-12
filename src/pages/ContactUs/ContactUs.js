import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contactus from '../../images/contactus.png';
import { toast } from 'react-hot-toast';
import emailImg from '../../images/email.png';
import phoneImg from '../../images/phone.png';
import locationImg from '../../images/location.png';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_0plwzna', form.current, 'RLXjZLUe26CX9a6Ml')
            .then((result) => {
                console.log(result);
                console.log(result.text);
            }, (error) => {
                //   console.log(error.text);
            });
    };

    const notify = () => toast.success('Your Info Send Successfully!');

    return (
        <div>
            <div>

                <div className="relative w-full rounded-lg">
                    <img src={contactus} className="w-full rounded-lg" alt='' />
                    <div className="absolute top-20 lg:top-1/2 left-16 lg:left-56">
                        <h1 className='lg:text-6xl text-white font-bold text-center'>
                            Welcome to customer support
                        </h1>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card w-96 bg-slate-100 shadow-xl transition duration-500 hover:scale-90 mb-5">
                            <div className="card-body">
                                <img src={emailImg} className='w-16' alt="" />
                                <h2 className="card-title">EMAIL</h2>
                                <p>shopxprivatelimit@gmail.com</p>
                                <p>shopxprivatelimit@gmail.com</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl transition duration-500 hover:scale-90 mb-5">
                            <div className="card-body">
                                <img src={phoneImg} className='w-16' alt="" />
                                <h2 className="card-title">PHONE IN</h2>
                                <p>9685347210</p>
                                <p>4817874815</p>
                            </div>
                        </div>
                        <div className="card w-96 bg-slate-100 shadow-xl transition duration-500 hover:scale-90 mb-5">
                        <div className="card-body">
                            <img src={locationImg} className='w-16' alt="" />
                            <h2 className="card-title">ADDRESS</h2>
                            <p>Kulur Ferry Rd, Kottara, Mangaluru, Karnataka 575006</p>
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full py-20 shadow-2xl bg-base-100">
                    <h1 className='text-2xl font-bold text-center'>Contact With Us</h1>
                    <div className="card-body">
                        <form className='mt-4 text-center w-[90%] mx-auto p-7' ref={form} onSubmit={sendEmail}>
                            <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='name' placeholder='Full Name' required /><br />
                            <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='email' placeholder='Email' required /><br />
                            <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='phone' placeholder='Phone' required /><br />
                            <textarea className='w-[90%] p-4 mb-4 border rounded-lg' name="message" id="" placeholder='Message' required></textarea><br />
                            <button onClick={notify} className='btn ' type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default ContactUs;