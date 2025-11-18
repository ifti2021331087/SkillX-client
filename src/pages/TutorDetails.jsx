import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
const TutorDetails = () => {
    const { ID } = useParams();
    const [tutor, setTutor] = useState(null);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5001/tutors/id/${ID}`)
            .then((res) => res.json())
            .then((data) => setTutor(data[0]));
    }, [ID]);

    if (!tutor) return <div className="p-10 text-center">Loading...</div>;
    const { id, name, language, image, country, bio_short } = tutor;
    const handleAddTutor = () => {
        const newTutor = { id, name, language, image, country, bio_short };
        fetch('http://localhost:5001/myTutors', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newTutor)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your tutor has been booked",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row gap-6 items-start relative">

                {/* Image */}
                <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover"
                />

                {/* Name + Basic Info */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{tutor.name}</h1>

                    <p className="text-gray-600 mt-1">
                        {tutor.language} tutor · From {tutor.country?.name}{" "}
                        <img
                            src={tutor.country?.flag}
                            alt="flag"
                            className="inline w-6 ml-1 rounded"
                        />
                    </p>

                    {/* SHORT BIO */}
                    <p className="mt-3 text-gray-700">{tutor.bio_short}</p>

                    {/* Badges */}
                    <div className="mt-4 space-y-2">
                        {tutor.badges?.map((badge, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <span
                                    className="w-4 h-4 rounded-full mt-1"
                                    style={{ backgroundColor: badge.color }}
                                ></span>
                                <p className="text-gray-700">
                                    <span className="font-medium">{badge.label}</span> ·{" "}
                                    <span className="underline cursor-pointer">Learn more</span>
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Teaches Section */}
                    <div className="mt-4">
                        <p className="font-semibold">Teaches</p>
                        <p className="text-gray-700">{tutor.lesson_duration}</p>
                    </div>

                    {/* MOBILE BOOK ME BUTTON */}
                    <button
                        onClick={handleAddTutor}
                        className="md:hidden w-full bg-blue-600 text-white py-3 mt-6 rounded-xl font-semibold
                        cursor-pointer transition-all duration-300 ease-out
                         hover:bg-blue-700 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97]"
                    >
                        BOOK ME
                    </button>
                </div>

                {/* DESKTOP BOOK ME BUTTON */}
                <button onClick={handleAddTutor} className="hidden md:block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold absolute right-0 top-0
                        cursor-pointer transition-all duration-300 ease-out
                       hover:bg-blue-700 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97]"
                >
                    BOOK ME
                </button>
            </div>

            {/* ABOUT ME */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-2">About me</h2>

                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {showMore
                        ? tutor.bio_long
                        : tutor.bio_long.slice(0, 300) +
                        (tutor.bio_long.length > 300 ? "..." : "")}
                </p>

                {tutor.bio_long.length > 300 && (
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-blue-600 font-semibold mt-2"
                    >
                        {showMore ? "Show less" : "Show more"}
                    </button>
                )}
            </div>

            {/* LESSON RATING */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Lesson rating</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 border rounded-xl shadow-sm text-center">
                        <div>
                            <p className="text-2xl font-bold">{tutor.rating}</p>
                            <p className="text-gray-600 text-sm">Reassurance</p>
                        </div>
                    </div>

                    <div className="p-4 border rounded-xl shadow-sm text-center">
                        <p className="text-2xl font-bold">{tutor.rating}</p>
                        <p className="text-gray-600 text-sm">Clarity</p>
                    </div>

                    <div className="p-4 border rounded-xl shadow-sm text-center">
                        <p className="text-2xl font-bold">{tutor.rating}</p>
                        <p className="text-gray-600 text-sm">Progress</p>
                    </div>

                    <div className="p-4 border rounded-xl shadow-sm text-center">
                        <p className="text-2xl font-bold">{tutor.rating}</p>
                        <p className="text-gray-600 text-sm">Preparation</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TutorDetails;
