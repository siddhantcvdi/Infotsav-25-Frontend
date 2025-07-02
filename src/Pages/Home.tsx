// import React from 'react'
import Intro from "../Components/Home/Intro";
import PastSponsors from "../Components/Home/PastSponsors";

// import Landing from "../Components/Home/Landing";
import Hero from "../Components/Home/Hero";
import EventCaraousel from "../Components/Home/EventCaraousel";
// import FAQ from "../Components/Home/Faqs.tsx";

function Home() {
    return (
        <div>
            <Hero />
            <Intro />
            <EventCaraousel />
            {/* <FAQ /> */}
            <PastSponsors />
        </div>
    );
}

export default Home;
