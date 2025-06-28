// import React from 'react'
import { useNavigate } from "react-router-dom"

const IntroNavBar = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="w-full flex flex-col gap-4 justify-center items-center relative top-0 left-0 pt-[30px]">
                <div
                    className="bg-[#FFFFFF] h-[60px] z-30 w-[80vw] rounded-3xl border-4 border-black flex justify-between items-center px-20px menu-container"
                    style={{
                        boxShadow: '1px 1px 0px #000000, 2px 2px 0px #000000, 3px 3px 0px #000000, 4px 4px 0px #000000, 5px 5px 0px #000000, 6px 6px 0px #000000'
                    }}
                >
                    <div
                        onClick={() => navigate('/')}
                        className="flex mx-2 justify-center items-center gap-3 cursor-pointer pl-2"
                    >
                        <h1 className="mr-[20px] font-pixelify font-black text-2xl">
                            INTRO
                        </h1>
                    </div>




                </div>


            </div>
        </>
    )
}

export default IntroNavBar