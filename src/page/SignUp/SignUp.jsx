import React, { useContext } from 'react';
import doctorImg from '.././../assets/signup.png';
import { AuthContext } from '../../Provider/AuthProviders';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const hendelSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const password = form.get("password");

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full font-sans pt-20">

            <div className="bg-[#07332F] lg:w-1/2 flex items-center justify-center p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 text-white text-6xl font-thin">+</div>
                    <div className="absolute top-40 right-20 text-white text-9xl font-thin opacity-20">+</div>
                    <div className="absolute bottom-20 left-1/4 text-white text-4xl font-thin">+</div>
                </div>

                <div className="relative z-10 max-w-sm lg:max-w-md">
                    <img
                        src={doctorImg}
                        alt="Doctor and Medicine"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>
            </div>

            <div className="bg-white lg:w-1/2 flex items-center justify-center p-6 lg:p-12 -mt-8 lg:mt-0 rounded-t-[40px] lg:rounded-none z-20">
                <div className="w-full max-w-md border border-gray-100 lg:border-none p-5 lg:p-0 rounded-2xl">

                    <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8">
                        Sign Up to Doc House
                    </h2>

                    <form onSubmit={hendelSignUp} className="space-y-5">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 bg-[#F3F3F3] rounded-lg border-none focus:ring-2 focus:ring-[#F2A383] outline-none transition-all"
                            />
                        </div>

                        {/* Username Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                name='userName'
                                placeholder="Enter your username"
                                className="w-full px-4 py-3 bg-[#F3F3F3] rounded-lg border-none focus:ring-2 focus:ring-[#F2A383] outline-none transition-all"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-[#F3F3F3] rounded-lg border-none focus:ring-2 focus:ring-[#F2A383] outline-none transition-all"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 bg-[#F3F3F3] rounded-lg border-none focus:ring-2 focus:ring-[#F2A383] outline-none transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#F2A383] hover:bg-[#e89472] text-white font-bold py-4 rounded-lg shadow-lg transition-colors mt-4"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Footer Link */}
                    <a href="/logIn">
                        <p className="text-center text-sm text-gray-500 mt-8">
                            Already registered? Go to <button className="text-[#F2A383] font-bold hover:underline ml-1">SIGN IN</button>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;