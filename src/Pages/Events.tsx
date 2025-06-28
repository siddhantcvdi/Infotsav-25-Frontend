// import React from 'react'
// import ComingSoon from '../Components/ComingSoon'
import ParticlesBackground from "../Components/ParticlesBackground";
import MajorEvent from "../Components/Events/MajorEvent";
import Tabs from "../Components/Events/Tabs";

function Events() {
  return (
    <>
      <main className="font-pixelify text-[#FEFEFE] max-w-[1440px] mx-auto">
        <ParticlesBackground />

        <div className="relative  text-center mt-60 mb-40 text-slate-50  z-10 lg:text-[7vw] md:text-4xl  text-4xl">
          Events
        </div>
        <section className="my-20">
          <MajorEvent />
        </section>
        <section className="relative font-pixelify ">
          <Tabs />
        </section>
      </main>
    </>
  );
}

export default Events;
