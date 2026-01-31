import doctor_img from "../../../assets/doctor.png"
import tab1_img from "../../../assets/tab_image1.png"
import tab2_img from "../../../assets/tab_image2.jpeg"
import tab3_img from "../../../assets/tab_image3.jpeg"

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            tabTitle: "Cavity Protection",
            contentTitle: "Electro Gastrology Therapy",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error.",
            img: tab1_img
        },
        {
            id: 2,
            tabTitle: "Cosmetic Dentistry",
            contentTitle: "Cosmetic Dentistry Solutions",
            description: "Our cosmetic dentistry services focus on improving the appearance of your mouth, teeth, and smile. From teeth whitening to veneers, we help you achieve the perfect smile you've always wanted.",
            img: tab2_img
        },
        {
            id: 3,
            tabTitle: "Oral Surgery",
            contentTitle: "Advanced Oral Surgery",
            description: "We provide professional oral surgery services including extractions, dental implants, and corrective jaw surgery in a safe and comfortable environment using the latest technology.",
            img: tab3_img
        }
    ];

    return (
        <section className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Left Side: Large Doctor Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={doctor_img} 
                        alt="Doctor"
                        className="w-full rounded-2xl object-cover shadow-sm"
                    />
                </div>

                {/* Right Side: Services & Tabs */}
                <div className="w-full lg:w-1/2">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-gray-600 leading-relaxed max-w-xl">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    <Tabs selectedTabClassName="bg-[#F7A582] text-white border-none outline-none">
                        <TabList className="flex flex-wrap gap-2 border-none mb-10 p-1 bg-white">
                            {servicesData.map((service) => (
                                <Tab
                                    key={service.id}
                                    className="md:px-6 px-4 py-2.5 md:py-3 cursor-pointer rounded-lg border border-gray-200 text-gray-700 font-semibold transition-all duration-300 hover:bg-gray-50 focus:outline-none"
                                >
                                    {service.tabTitle}
                                </Tab>
                            ))}
                        </TabList>

                        {servicesData.map((service) => (
                            <TabPanel key={service.id} className="animate-fadeIn">
                                <div className="space-y-6">
                                    <div className="overflow-hidden rounded-xl">
                                        <img
                                            src={service.img}
                                            alt={service.contentTitle}
                                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        {service.contentTitle}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <button className="px-8 py-3 border-2 border-[#F7A582] text-[#F7A582] font-bold rounded-lg hover:bg-[#F7A582] hover:text-white transition-all duration-300">
                                        More Details
                                    </button>
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Services;