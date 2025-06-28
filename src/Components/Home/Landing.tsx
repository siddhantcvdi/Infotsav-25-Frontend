// import React from 'react';
import ParticlesBackground from '../ParticlesBackground';
import Mountains from '../../assets/far-mountains.png';

const Landing = () => {
    return (
        <div className='relative bg-black h-screen w-full overflow-hidden'>
            <ParticlesBackground />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className='text-[#FEFEFE] md:text-[12vw] text-[70px] font-pixelify z-10'>
                    Infotsav
                </h1>
                <h2 className='text-[#BEFF04] text-[6vw] font-pixelify z-10 md:mt-[-40px]'>
                    2024
                </h2>
            </div>

            <img
                className="absolute bottom-0 left-0 md:h-auto h-[800px] w-full object-cover"
                src={Mountains}
                alt=""
            />
        </div>
    );
}

export default Landing