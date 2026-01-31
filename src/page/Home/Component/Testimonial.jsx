import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import your assets (replace these with your actual paths)
// import quoteIcon from '../../assets/quote.png'; 

const testimonials = [
    {
        id: 1,
        name: "Awlad Hossain",
        role: "Product Designer",
        image: "https://i.ibb.co/5GzXkwq/user1.png",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not only five centuries."
    },
    {
        id: 2,
        name: "Farhana Hossain",
        role: "Brand Designer",
        image: "https://i.ibb.co/5GzXkwq/user1.png",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not only five centuries."
    },
    {
        id: 3,
        name: "Awlad Hossain",
        role: "Product Designer",
        image: "https://i.ibb.co/5GzXkwq/user1.png",
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make type specimen book has survived not only five centuries."
    }
];

export default function Testimonial() {
    return (
        <section className="py-20 px-4 md:px-0">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Says</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                {/* Swiper Slider */}
                <div className="relative testimonial-slider">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        className="mySwiper"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="border border-gray-200 rounded-lg p-8 h-full bg-white">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-4">
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-16 h-16 rounded-full border-2 border-[#F7A582] object-cover" 
                                            />
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                                                <p className="text-gray-500">{item.role}</p>
                                            </div>
                                        </div>
                                        {/* Quote Icon */}
                                        <div className="text-[#F7A582]">
                                            <svg width="40" height="40" viewBox="0 0 46 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                                                <path d="M11.5 0C5.16667 0 0 5.16667 0 11.5C0 17.8333 5.16667 23 11.5 23H15.3333C15.3333 28.1667 11.5 32.3333 6.33333 32.3333V34C13.8333 34 20 27.8333 20 20.3333V3.83333C20 1.66667 18.3333 0 16.1667 0H11.5ZM37.5 0C31.1667 0 26 5.16667 26 11.5C26 17.8333 31.1667 23 37.5 23H41.3333C41.3333 28.1667 37.5 32.3333 32.3333 32.3333V34C39.8333 34 46 27.8333 46 20.3333V3.83333C46 1.66667 44.3333 0 42.1667 0H37.5Z" fill="currentColor"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed italic">
                                        "{item.text}"
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}