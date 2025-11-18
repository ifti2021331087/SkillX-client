import React from 'react';
import banner from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-8">
                <img
                    src={banner}
                    className=" max-w-xsm lg:max-w-xl rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className=" text-2xl lg:text-6xl font-bold">
                        Learn Faster With your best Language tutor
                    </h1>
                    
                    <button className="btn btn-primary mt-10">Find your tutor</button>
                </div>
            </div>
        </div>
    );
}



export default Banner;