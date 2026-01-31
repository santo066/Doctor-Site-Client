import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaStar } from 'react-icons/fa';
import doctor1 from '../../../assets/doctor1.png'
import doctor2 from '../../../assets/doctor2.png'
import doctor3 from '../../../assets/doctor3.png'

// Sample data for doctors
const doctorsData = [
    {
        id: 1,
        name: "Karyen Anderson",
        title: "BTP - Senior Physiotherapist",
        location: "Dhanmondi, Dhaka, Bangladesh",
        availability: "Available On Mon, 22 December",
        price: "$15",
        image: doctor1, // Replace with your local asset paths
    },
    {
        id: 2,
        name: "Karyen Anderson",
        title: "BTP - Senior Physiotherapist",
        location: "Dhanmondi, Dhaka, Bangladesh",
        availability: "Available On Mon, 22 December",
        price: "$15",
        image: doctor2,
        featured: true, // This one will have the colored button
    },
    {
        id: 3,
        name: "Karyen Anderson",
        title: "BTP - Senior Physiotherapist",
        location: "Dhanmondi, Dhaka, Bangladesh",
        availability: "Available On Mon, 22 December",
        price: "$15",
        image: doctor3,
    }
];

export default function Doctors_Card() {
    return (
        <section className="md:py-16 pt-0 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Expert Doctors
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctorsData.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Image Container */}
                            <div className="h-64 w-full bg-gray-100 overflow-hidden p-4">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Content Container */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                                <p className="text-gray-500 text-sm mb-3">{doctor.title}</p>

                                {/* Rating */}
                                <div className="flex text-orange-400 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={16} />
                                    ))}
                                </div>

                                <hr className="border-gray-100 mb-5" />

                                {/* Details */}
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <FaMapMarkerAlt className="mr-3 text-gray-400" />
                                        <span>{doctor.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <FaCalendarAlt className="mr-3 text-gray-400" />
                                        <span>{doctor.availability}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <FaDollarSign className="mr-3 text-gray-400" />
                                        <span>{doctor.price}</span>
                                    </div>
                                </div>

                                {/* Button */}
                                <button
                                    className="w-full py-3 px-6 rounded-lg font-semibold duration-500 text-[20px] border-2 border-[#F7A582] text-[#F7A582] pointer hover:bg-[#F7A582] hover:text-white">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}