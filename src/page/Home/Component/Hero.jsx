import React from 'react';

import bg_img from "../../../assets/hero bg image.png"
import hero_img from "../../../assets/Group 34991.png"

export default function Hero() {
    return (
        <section
            className="md:pt-28 pt-28 pb-25 flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bg_img})`,
            }}
        >
            <div className="container mx-auto px-4 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-[48px] lg:text-[58px] font-bold text-white leading-tight mb-6">
                            Your Best Medical Help Center
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                            Lorem Ipsum is simply dummy text they are printing typesetting
                            has been the industry's standard.
                        </p>
                        <button className="btn bg-[#F7A582] hover:bg-[#e89472] border-none text-white px-10 h-14 rounded-lg text-lg capitalize font-semibold transition-all">
                            All Service
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/5 rounded-full blur-3xl"></div>

                            <img
                                src={hero_img}
                                alt="Medical Team"
                                className="w-full object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}