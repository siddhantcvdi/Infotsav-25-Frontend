// import React from 'react'
import Intro from "../Components/Home/Intro";
import PastSponsors from "../Components/Home/PastSponsors.js";
import EventCaraousel from "../Components/Home/EventCaraousel.tsx";
import Lannding from "../Components/Home/Landing.tsx";
// import FAQ from "../Components/Home/Faqs.tsx";

function Home() {
    return (
        <div>
            <Lannding />
            <Intro />
            <EventCaraousel />
            {/* <FAQ /> */}
            <PastSponsors />
        </div>
    );
}

export default Home;
