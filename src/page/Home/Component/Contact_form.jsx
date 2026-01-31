import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';

export default function Contact_form() {
  return (
    <section className="md:py-20 pb-0 pt-10 px-4 bg-white">
      {/* Main Dark Container */}
      <div className="max-w-7xl mx-auto bg-[#07332F] rounded-[20px] p-8 md:p-16 text-white">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Info Content */}
          <div className="lg:w-2/5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Contact With Us
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-90">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4">
                <div className="text-xl">
                  {/* Rotating phone icon as seen in design */}
                  <FaPhoneAlt className="rotate-\[15deg\] text-gray-200" />
                </div>
                <span className="text-gray-200">+88 01750 14 14 14</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-xl text-gray-200">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-gray-200">Dhanmondi, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="w-full lg:w-3/5">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-[#13403C] text-white placeholder-gray-400 p-4 rounded-lg outline-none focus:ring-1 focus:ring-[#F7A582] transition-all"
              />
              
              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#13403C] text-white placeholder-gray-400 p-4 rounded-lg outline-none focus:ring-1 focus:ring-[#F7A582] transition-all"
              />
              
              {/* Mobile Input */}
              <input 
                type="text" 
                placeholder="Mobile Number" 
                className="w-full bg-[#13403C] text-white placeholder-gray-400 p-4 rounded-lg outline-none focus:ring-1 focus:ring-[#F7A582] transition-all"
              />
              
              {/* Doctor Name Input */}
              <input 
                type="text" 
                placeholder="Doctor Name" 
                className="w-full bg-[#13403C] text-white placeholder-gray-400 p-4 rounded-lg outline-none focus:ring-1 focus:ring-[#F7A582] transition-all"
              />
              
              {/* Date Input with Icon */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Date" 
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  className="w-full bg-[#13403C] text-white placeholder-gray-400 p-4 rounded-lg outline-none focus:ring-1 focus:ring-[#F7A582] transition-all appearance-none"
                />
                <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              
              {/* Time Selection with Icon */}
              <div className="relative">
                <select 
                  className="w-full bg-[#13403C] text-white p-4 rounded-lg outline-none focus:ring-1 focus:ring-[#F7A582] transition-all appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">Time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                </select>
                <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                className="md:col-span-2 mt-2 bg-[#F7A582] hover:bg-[#e89470] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg active:scale-[0.98]"
              >
                Book Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}