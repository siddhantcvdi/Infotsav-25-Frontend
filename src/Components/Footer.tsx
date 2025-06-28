// import React from 'react'

import {
    ArrowUpRight,
    CircleArrowUp,
    Instagram,
    Linkedin,
    Mail,
    SquareArrowOutUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="w-screen bg-black px-5 md:px-10 text-[#ccc] z-40 absolute">
            <div className="flex flex-col md:flex-row md:justify-around gap-10 md:gap-0 items-center font-mono my-5 md:my-10">
                <div className="flex flex-col items-center md:w-1/2">
                    <span className="font-bold text-2xl mb-2">
                        Join Us Now!
                    </span>
                    <Link
                        to="/register"
                        className="border border-[#ccc] hover:border-white py-1 px-3 rounded-full flex items-center hover:text-white">
                        Register Now
                        <SquareArrowOutUpRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
                <div className="flex flex-row justify-between md:justify-around w-full items-center">
                    <div className="flex flex-col ">
                        <span className="font-bold text-2xl mb-2">
                            Get in touch
                        </span>
                        <div className="flex justify-around">
                            <Link
                                to="https://www.linkedin.com/company/infotsav-iiitm/"
                                className="hover:text-white">
                                <Linkedin />
                            </Link>
                            <Link
                                to="https://www.instagram.com/infotsav_iiitm/"
                                className="hover:text-white">
                                <Instagram />
                            </Link>
                            <Link to="" className="hover:text-white">
                                <svg
                                    x="0px"
                                    y="0px"
                                    className="h-6 w-6 stroke-[#ccc] fill-[#ccc] hover:stroke-white hover:fill-white"
                                    viewBox="0 0 50 50">
                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                </svg>
                            </Link>
                            <Link to="/contact" className="hover:text-white">
                                <Mail />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <Link
                            to="/events"
                            className="hover:text-white text-2xl flex items-center">
                            Events
                            <ArrowUpRight className="w-7 h-7 ml-1" />
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-white text-2xl flex items-center">
                            Contact
                            <ArrowUpRight className="w-7 h-7 ml-1" />
                        </Link>
                        <Link
                            to="/register"
                            className="hover:text-white text-2xl flex items-center">
                            Ambassador
                            <ArrowUpRight className="w-7 h-7 ml-1" />
                        </Link>
                        <Link
                            to="/"
                            className="hover:text-white text-2xl flex items-center">
                            Home
                            <ArrowUpRight className="w-7 h-7 ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center ">
                <h1
                    className="uppercase text-[#ccc] text-[16vw] md:text-[16vw] tracking-tight font-pixelify"
                    style={{ lineHeight: 0 }}>
                    infotsav
                </h1>
                <button
                    onClick={() => {
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                    }}>
                    <CircleArrowUp className="w-[14vw] h-[14vw] text-[#ccc]" />
                </button>
            </div>
        </div>
    );
}

export default Footer;
