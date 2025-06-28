// import React from 'react'

import ParticlesBackground from '../Components/ParticlesBackground';

function NotFound() {
    return (
        <div className="h-screen w-full">
            <ParticlesBackground />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-[#FEFEFE]  text-[70px] font-pixelify z-10">
                    Coming Soon
                </h1>
                <span className=" text-2xl font-pixelify z-10 mt-[40px] border-2 border-[#BEFF04] px-5 py-2 rounded-full bg-[#BEFF04] text-black">
                    Stay Tuned
                </span>
            </div>
        </div>
    );
}

export default NotFound;
