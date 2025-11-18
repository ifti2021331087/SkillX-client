// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorCard from '../components/TutorCard';

const Tutors = () => {

    const tutors = useLoaderData();
    console.log(tutors);
    return (
        <div className='max-w-29/30 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                {
                    tutors.map(tutor => {
                        return <TutorCard tutor={tutor}></TutorCard>
                    })
                }
            </div>
        </div>
    );
};

export default Tutors;