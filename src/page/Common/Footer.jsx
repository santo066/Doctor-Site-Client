import React from 'react';
import logo from '../../../src/assets/logo.png'


const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] pt-20 pb-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-[#07332F] p-2 rounded-2xl">
              <img src={logo} alt="" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been since the printer took.
            </p>
            <button className="border-2 border-[#F7A582] text-[#F7A582] font-bold py-3 px-8 rounded-lg hover:bg-[#F7A582] hover:text-white transition-all duration-300">
              Appointment
            </button>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#07332F] mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Doctors</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Departments</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Online Payment</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">My Account</a></li>
            </ul>
          </div>

          {/* Column 3: Doc House Services */}
          <div>
            <h3 className="text-xl font-bold text-[#07332F] mb-6">Doc House Services</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Pediatric Clinic</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Diagnosis Clinic</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Cardiac Clinic</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Laboratory Analysis</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Gynecological Clinic</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Personal Counseling</a></li>
              <li><a href="#" className="hover:text-[#F7A582] transition-colors">Dental Clinic</a></li>
            </ul>
          </div>

          {/* Column 4: Working Hours */}
          <div>
            <h3 className="text-xl font-bold text-[#07332F] mb-6">Working Hours</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex justify-between"><span>Monday - 10 am to 7 pm</span></li>
              <li className="flex justify-between"><span>Tuesday - 10 am to 7 pm</span></li>
              <li className="flex justify-between"><span>Wednesday - 10 am to 7 pm</span></li>
              <li className="flex justify-between"><span>Thursday - 10 am to 7 pm</span></li>
              <li className="flex justify-between"><span>Friday - 10 am to 7 pm</span></li>
              <li className="flex justify-between"><span>Saturday - 10 am to 7 pm</span></li>
              <li className="flex justify-between"><span>Sunday - 10 am to 7 pm</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2022 - All right reserved by Doc House Ltd
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;