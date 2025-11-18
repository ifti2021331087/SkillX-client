import React from 'react';
import icon from '../assets/icons8-chevron-right-50.png'
const CategoryCard = () => {
    return (
        <div className="card w-96 bg-base-100 card-sm shadow-lg border border-neutral-200">
            <div className="flex justify-evenly gap-4 my-8 mx-4 items-center">
                <div className='flex items-center gap-4'>
                    <div>
                        <img className="w-15 h-10 object-cover" src="https://flagpedia.net/data/flags/w580/gb.png" alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">English tutors</h2>
                        <h2 className="stat-title">32,000 teachers</h2>
                    </div>
                </div>

                <div className=''>
                    <img src={icon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;