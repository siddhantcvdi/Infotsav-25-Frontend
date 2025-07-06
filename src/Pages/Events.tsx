// import React from 'react'
// import ComingSoon from '../Components/ComingSoon'

import { AllEventsCarousel } from "@/Components/Events/AllEventsCarousel";
import { FlagshipEventsCarousel } from "@/Components/Events/FlagshipEventsCarousel";
import SideDock from "@/Components/Events/SideDock";
import { useState } from "react";
// import MajorEvent from "../Components/Events/MajorEvent";
// import ParticlesBackground from "../Components/ParticlesBackground";



function Events() {
  const [currentSection, setCurrentSection] = useState("technical")
  return (
    <>
      <main className="font-pixelify text-[#FEFEFE] max-w-[1440px] mx-auto min-h-screen flex flex-col">
        {/* <ParticlesBackground /> */}
        <SideDock setCurrentSection={setCurrentSection}/>
        
        {/* Flagship Events Section */}
        <section className="flex-1 flex items-start justify-center pt-20">
          <div className="w-full">
            <FlagshipEventsCarousel currentSection={currentSection}/>
          </div>
        </section>

        {/* Minor Events Section */}
        <section className="flex-1 flex items-center justify-center py-10">
          <div className="w-full">
            <AllEventsCarousel currentSection={currentSection}/>
          </div>
        </section>

      </main>
    </>
  );
}

export default Events;
