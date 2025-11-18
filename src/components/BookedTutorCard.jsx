import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';
const BookedTutorCard = ({ tutor,tutorList,setTutorList }) => {
    const { id, name, language, image, country, bio_short } = tutor;
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/myTutors/${id}`,{
                    method:'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        const remainningTutors=tutorList.filter(tutor=>tutor.id!==id);
                        setTutorList(remainningTutors);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }
    return (
        <div className="flex items-center gap-4 p-5 border rounded-xl shadow-sm bg-white hover:shadow-md transition">

            {/* IMAGE */}
            <img
                src={image}
                alt={name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover"
            />

            {/* TEXT INFO */}
            <div className="flex-1">
                {/* NAME */}
                <h2 className="text-xl font-bold">{name}</h2>

                {/* LANGUAGE + COUNTRY */}
                <p className="text-gray-600 mt-1 flex items-center gap-2">
                    {language} tutor · From {country?.name}
                    <img
                        src={country?.flag}
                        alt="flag"
                        className="inline-block w-5 h-5 rounded-sm"
                    />
                </p>

                {/* SHORT BIO */}
                <p className="text-gray-700 mt-2 leading-relaxed">
                    {bio_short}
                </p>
            </div>
            <div
                onClick={() => handleDelete(id)}
                className="text-2xl cursor-pointer text-gray-600
               hover:text-red-500 
               transition-all duration-300 ease-out 
               hover:scale-110 hover:rotate-12"
            >
                <RiDeleteBin6Line />
            </div>

        </div>
    );
};

export default BookedTutorCard;
