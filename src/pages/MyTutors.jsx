import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookedTutorCard from '../components/BookedTutorCard';
import Navbar from '../components/Navbar';

const MyTutors = () => {
    const tutors = useLoaderData();
    const [tutorList, setTutorList] = useState(tutors);
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-3/5 mx-auto mt-5'>
                <div className='grid grid-cols-1 gap-2'>
                    {
                        tutorList.map(tutor => <BookedTutorCard
                            tutor={tutor}
                            tutorList={tutorList}
                            setTutorList={setTutorList}
                        ></BookedTutorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyTutors;