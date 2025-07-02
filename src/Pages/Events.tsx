// import React from 'react'
// import ComingSoon from '../Components/ComingSoon'

import SideDock from "@/Components/Events/SideDock";
import MajorEvent from "../Components/Events/MajorEvent";
// import ParticlesBackground from "../Components/ParticlesBackground";



function Events() {
  return (
    <>
      <main className="font-pixelify text-[#FEFEFE] max-w-[1440px] mx-auto min-h-screen flex flex-col">
        {/* <ParticlesBackground /> */}
        <SideDock/>
        <section className="flex-1 flex items-start justify-center pt-20">
          <MajorEvent />
        </section>

      </main>
    </>
  );
}

export default Events;
