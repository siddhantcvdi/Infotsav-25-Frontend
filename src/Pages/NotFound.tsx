// import React from 'react'

// import ParticlesBackground from "../Components/ParticlesBackground"

function NotFound() {
    return (
        <div className="h-screen w-full">
            {/* <ParticlesBackground /> */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className='text-[#FEFEFE]  text-[70px] font-pixelify z-10'>
                    Page Not Found
                </h1>
                <a
                    href="/"
                    className='text-[#BEFF04] text-2xl font-pixelify z-10 mt-[40px] border-2 border-[#BEFF04] px-5 py-2 rounded-full hover:bg-[#BEFF04] hover:text-black'
                >
                    Go to Home Page
                </a>
            </div>
        </div>
    )
}

export default NotFound