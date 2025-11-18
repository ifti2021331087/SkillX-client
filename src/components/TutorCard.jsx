import React from "react";
import { NavLink } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  const {
    id,
    image,
    name,
    country,
    verified,
    badges,
    language,
    proficiency,
    price,
    lesson_duration,
    rating,
    reviews,
    students,
    lessons,
    bio_short,
  } = tutor;

  return (
    <div className="border rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition">

      {/* MAIN FLEX CONTAINER */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">

        {/* LEFT — IMAGE */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={image}
            alt={name}
            className="w-28 h-28 md:w-32 md:h-32 rounded-lg object-cover"
          />
        </div>

        {/* MIDDLE — INFO */}
        <div className="flex-1">

          {/* NAME + VERIFIED + FLAG */}
          <div className="flex items-center gap-2">
            <h2 className="text-lg md:text-xl font-bold">{name}</h2>
            {verified && <span>✔️</span>}
            <img src={country.flag} alt="" className="w-5 h-5 rounded" />
          </div>

          {/* BADGES */}
          <div className="flex gap-2 mt-2 flex-wrap">
            {badges.map((b, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs md:text-sm rounded-md"
                style={{ backgroundColor: b.color }}
              >
                {b.label}
              </span>
            ))}
          </div>

          {/* LANGUAGE + STATS */}
          <div className="mt-3 text-gray-700 space-y-1 text-sm">
            <p className="flex items-center gap-2">
              🎓 {language}
            </p>

            <p className="flex items-center gap-2">
              👤 {students} active students • {lessons} lessons
            </p>

            <p className="flex items-center gap-2">
              🌐 {proficiency}
            </p>
          </div>

          {/* BIO */}
          <p className="mt-3 text-sm font-medium leading-5">
            {bio_short}
          </p>

          <NavLink to={`/tutorDetails/id/${id}`} className="text-primary underline text-sm mt-1">
            Learn more
          </NavLink>
        </div>

        {/* RIGHT — DESKTOP ONLY (Rating + Price + Buttons) */}
        <div className="hidden md:flex flex-col justify-between items-end min-w-[180px]">

          {/* PRICE */}
          <div className="text-right">
            <p className="text-2xl font-bold">${price}</p>
            <p className="text-gray-500 text-sm">{lesson_duration}</p>
          </div>

          {/* STATS */}
          <div className="text-right mt-2 mb-4">
            <p className="font-bold">{rating} ⭐</p>
            <p className="text-gray-500 text-sm">{reviews} reviews</p>
          </div>

          {/* BUTTONS — DESKTOP */}
          <button className="btn bg-pink-400 text-black font-semibold hover:bg-pink-500 border-black w-full">
            Book trial lesson
          </button>

          <button className="btn border border-gray-400 bg-white hover:bg-gray-100 w-full mt-2">
            Send message
          </button>
        </div>
      </div>

      {/* ⭐ MOBILE BUTTON + MOBILE PRICE/RATING */}
      <div className="md:hidden mt-5">

        {/* RATING + PRICE SIDE BY SIDE */}
        <div className="flex justify-between text-center mb-4">
          <div>
            <p className="font-bold text-lg">{rating} ⭐</p>
            <p className="text-gray-500 text-sm">{reviews} reviews</p>
          </div>

          <div>
            <p className="text-xl font-bold">${price}</p>
            <p className="text-gray-500 text-sm">{lesson_duration}</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3">
          <button className="btn bg-pink-400 text-black font-semibold hover:bg-pink-500 border-black w-full">
            Book trial lesson
          </button>

          <button className="btn border border-gray-400 bg-white hover:bg-gray-100 w-full">
            Send message
          </button>
        </div>

      </div>

    </div>
  );
};

export default TutorCard;
