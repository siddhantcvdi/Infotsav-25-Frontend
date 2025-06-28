import React from "react";
import { useNavigate } from "react-router-dom";

const CampusAmbassador: React.FC = () => {
    const navigator = useNavigate();

    return (
        <div className="max-w-7xl mx-auto mt-[100px] px-5">
            <h1 className="text-[#FEFEFE] text-[10vw] md:text-[6vw] tracking-normal text-center font-pixelify mb-10 font-bold bg-clip-text bg-gradient-to-b text-transparent from-neutral-50 to-neutral-400 bg-opacity-50">
                Campus Ambassador Program
            </h1>
            <div className="justify-start text-left">
                <section className="mb-10">
                    <h2 className="text-[#FEFEFE] text-4xl md:text-3xl font-mono tracking-normal text-center mb-5 uppercase">
                        Join the Infotsav Campus Ambassador Program
                    </h2>
                    <p className="text-white text-xl md:text-2xl font-mono text-center leading-7">
                        Promote Infotsav within your campus and network to earn
                        exclusive rewards!
                    </p>
                </section>

                <section className=" mb-10">
                    <h3 className="text-[#FEFEFE] text-center text-3xl tracking-wide md:text-5xl font-pixelify mb-5 uppercase">
                        Why Become a Campus Ambassador?
                    </h3>
                    <ul className="list-disc list-inside text-white font-mono text-xl pl-20 md:text-2xl space-y-6">
                        <li>
                            <strong>Exclusive Rewards:</strong> Earn discounts,
                            merchandise, and vouchers.
                        </li>
                        <li>
                            <strong>Leadership Experience:</strong> Enhance your
                            leadership and promotional skills.
                        </li>
                        <li>
                            <strong>National Recognition:</strong> Gain exposure
                            and build your resume.
                        </li>
                        <li>
                            <strong>Networking Opportunities:</strong> Connect
                            with peers and industry leaders.
                        </li>
                    </ul>
                </section>

                <section className="text-center mb-10">
                    <h3 className="text-[#FEFEFE] text-3xl md:text-4xl font-pixelify tracking-tight mb-5 uppercase">
                        Sign Up Now!
                    </h3>
                    <button
                        className="bg-[#FEFEFE] text-black w-40 font-pixelify text-2xl px-8 py-3 rounded-md hover:bg-gray-300 transition m-5"
                        onClick={() =>

                            (window.location.href =
                                "https://rightful-lock-b42.notion.site/Infotsav-24-Campus-Ambassador-Program-738b0f78578349c0b12946f92ffca139")
                        }>
                        Docs
                    </button>
                    <button
                        className="bg-[#FEFEFE] text-black w-40 font-pixelify text-2xl px-8 py-3 rounded-md hover:bg-gray-300 transition"
                        onClick={() => navigator("/register")}>
                        Sign Up
                    </button>
                </section>

                <section className="mb-10">
                    <h3 className="text-[#FEFEFE] text-3xl md:text-4xl font-pixelify tracking-tight mb-5 uppercase">
                        FAQs
                    </h3>
                    <div className="text-white font-mono text-xl md:text-2xl space-y-6">
                        <div>
                            <strong>Q:</strong> When will I receive my rewards?{" "}
                            <br />
                            <strong>A:</strong> Rewards are distributed after
                            the registration deadline and verification.
                        </div>
                        <div>
                            <strong>Q:</strong> Can I join if I’m not from a
                            technical background? <br />
                            <strong>A:</strong> Yes, the program is open to all
                            students, regardless of their field of study.
                        </div>
                        <div>
                            <strong>Q:</strong> Is there any registration fee
                            for participation? <br />
                            <strong>A:</strong> Registration for Round 1 is free,
                            while Round 2 requires a small registration fee,
                            which can be reimbursed by your respective
                            institute.
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CampusAmbassador;
