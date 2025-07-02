// import React from 'react'
//import TabComponent from "../Components/EventDescription/TabComponent";
// import ParticlesBackground from "../Components/ParticlesBackground";

import { useParams } from "react-router-dom";



function EventDetails() {
    const { category, id } = useParams<{ category: string; id: string }>();
    

    return (
        <div>
            {/* <ParticlesBackground /> */}
            EventDetails {category} {id}
        </div>
    );
}

export default EventDetails;
