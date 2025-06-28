// import React from "react"
import CampusAmbassador from "../Components/CampusAmbassador/CampusAmbassador";
import ParticlesBackground from "../Components/ParticlesBackground";
function CampusAmba() {
    return (
        <div className="max-w-7xl mt-[100px] mx-auto">
            <div className="absolute -z-10">
                <ParticlesBackground />
            </div>
            <div>
                <CampusAmbassador />
            </div>
        </div>
    );
}

export default CampusAmba;
