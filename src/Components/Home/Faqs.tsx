// import React from 'react';
import ParticlesBackground from "../ParticlesBackground";

const Landing = () => {
    return (
        <div className="relative bg-black h-screen w-full overflow-hidden">
            <ParticlesBackground />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h3 className="text-[#FEFEFE] text-3xl md:text-4xl font-pixelify tracking-tight mb-5 uppercase">
                    FAQs
                </h3>
                <div className="justify-start text-left text-white font-mono text-xl md:text-2xl space-y-6">
                    <div>
                        <strong>Q:</strong> When will I receive my rewards?{" "}
                        <br />
                        <strong>A:</strong> Rewards are distributed after the
                        registration deadline and verification.
                    </div>
                    <div>
                        <strong>Q:</strong> Can I join if I’m not from a
                        technical background? <br />
                        <strong>A:</strong> Yes, the program is open to all
                        students, regardless of their field of study.
                    </div>
                    <div>
                        <strong>Q:</strong> Is there any registration fee for
                        participation? <br />
                        <strong>A:</strong>Registration for Round 1 is free,
                        while Round 2 requires a small registration fee, which
                        can be reimbursed by your respective institute.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
