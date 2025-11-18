import React from 'react';
import Banner from '../components/Banner';
import CategoryCard from '../components/CategoryCard';
import icon from '../assets/icons8-chevron-right-50.png'
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* Stats Section */}
            <div className="max-w-10/11 mx-auto">
                <div className="my-12 grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Total tutors</div>
                            <div className="stat-value">65,400</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Total reviews</div>
                            <div className="stat-value">89,400</div>
                            <div className="stat-desc">40% more than last month</div>
                        </div>
                    </div>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Total language</div>
                            <div className="stat-value">35</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                    </div>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-title">Total active learners</div>
                            <div className="stat-value">20,40,400</div>
                            <div className="stat-desc">18% more than last month</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-10/12 mx-auto my-12'>
                <div className=' my-12 text-4xl font-bold text-center'>
                    Progress Starts with the right tutors
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 m-4'>
                    <Link to="/tutors/english">
                        <div className="card  bg-base-100 card-sm shadow-lg border border-neutral-200 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl">
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

                                <div className='w-8 h-8 object-cover'>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/tutors/spanish">
                        <div className="card  bg-base-100 card-sm shadow-lg border border-neutral-200 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl">
                            <div className="flex justify-evenly gap-4 my-8 mx-4 items-center">
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <img className="w-15 h-10 object-cover" src="https://flagpedia.net/data/flags/w580/es.png" alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Spanish tutors</h2>
                                        <h2 className="stat-title">10,000 teachers</h2>
                                    </div>
                                </div>

                                <div className='w-8 h-8 object-cover'>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/tutors/french">
                        <div className="card  bg-base-100 card-sm shadow-lg border border-neutral-200 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl">
                            <div className="flex justify-evenly gap-4 my-8 mx-4 items-center">
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <img className="w-15 h-10 object-cover" src="https://flagpedia.net/data/flags/w580/fr.png" alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">French tutors</h2>
                                        <h2 className="stat-title">5,000 teachers</h2>
                                    </div>
                                </div>

                                <div className='w-8 h-8 object-cover'>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/tutors/german">
                        <div className="card  bg-base-100 card-sm shadow-lg border border-neutral-200 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl">
                            <div className="flex justify-evenly gap-4 my-8 mx-4 items-center">
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <img className="w-15 h-10 object-cover" src="https://flagpedia.net/data/flags/w580/de.png" alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">German tutors</h2>
                                        <h2 className="stat-title">2000 teachers</h2>
                                    </div>
                                </div>

                                <div className='w-8 h-8 object-cover'>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/tutors/chinese">
                        <div className="card  bg-base-100 card-sm shadow-lg border border-neutral-200 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl">
                            <div className="flex justify-evenly gap-4 my-8 mx-4 items-center">
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <img className="w-15 h-10 object-cover" src="https://flagpedia.net/data/flags/w580/cn.png" alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Chinese tutors</h2>
                                        <h2 className="stat-title">12,000 teachers</h2>
                                    </div>
                                </div>

                                <div className='w-8 h-8 object-cover'>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/tutors/bangla">
                        <div className="card  bg-base-100 card-sm shadow-lg border border-neutral-200 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl">
                            <div className="flex justify-evenly gap-4 my-8 mx-4 items-center">
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <img className="w-15 h-10 object-cover" src="https://flagpedia.net/data/flags/w580/bd.png" alt="" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Bangla tutors</h2>
                                        <h2 className="stat-title">5,000 teachers</h2>
                                    </div>
                                </div>

                                <div className='w-8 h-8 object-cover'>
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Home;