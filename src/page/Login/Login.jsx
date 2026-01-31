import React, { useContext } from 'react';
import doctorImg from '.././../assets/signup.png';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);

    const hendelSignIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full font-sans">

            {/* Left/Top Section: Illustration */}
            <div className="bg-[#07332F] lg:w-1/2 flex items-center justify-center p-10 relative overflow-hidden h-[45vh] lg:h-auto">
                {/* Background Decorative Plus Signs */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 text-white text-6xl font-thin">+</div>
                    <div className="absolute top-40 right-20 text-white text-9xl font-thin opacity-20">+</div>
                    <div className="absolute bottom-20 left-1/4 text-white text-4xl font-thin">+</div>
                </div>

                {/* Main Illustration */}
                <div className="relative z-10 max-w-70 md:max-w-sm lg:max-w-md">
                    <img
                        src={doctorImg}
                        alt="Doctor and Medicine"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Right/Bottom Section: Form */}
            <div className="bg-white lg:w-1/2 flex items-center justify-center p-6 lg:p-12 -mt-10 lg:mt-0 rounded-t-[40px] lg:rounded-none z-20">
                <div className="w-full max-w-md border border-gray-100 lg:border-none p-8 lg:p-0 rounded-2xl bg-white shadow-xl lg:shadow-none">

                    <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-10">
                        Sign in to Doc House
                    </h2>

                    <form className="space-y-6" onSubmit={hendelSignIn}>
                        {/* Username/Email Field */}
                        <div>
                            <label className="block text-sm font-bold text-gray-800 mb-2">
                                Username or Email Address
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your username or address"
                                className="w-full px-4 py-4 bg-[#F3F3F3] rounded-lg border-none focus:ring-2 focus:ring-[#F2A383] outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-bold text-gray-800">Password</label>
                                <button type="button" className="text-xs font-semibold text-[#F2A383] hover:underline">
                                    Forgot password?
                                </button>
                            </div>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-4 bg-[#F3F3F3] rounded-lg border-none focus:ring-2 focus:ring-[#F2A383] outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {/* Submit Button (Design shows "Create Account", but it's a Login form) */}
                        <button
                            type="submit"
                            className="w-full bg-[#F2A383] hover:bg-[#e89472] text-white font-bold py-4 rounded-lg shadow-md transition-colors mt-2"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer Link */}
                    <p className="text-center text-sm text-gray-500 mt-10">
                        Please register at first. Go to
                        <button className="text-[#F2A383] font-bold hover:underline ml-1">
                            SIGN UP
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;