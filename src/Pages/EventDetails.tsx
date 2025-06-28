// import React from 'react'
//import TabComponent from "../Components/EventDescription/TabComponent";
import ParticlesBackground from "../Components/ParticlesBackground";
import MakingEventCard from "../Components/EventDescription/MakingEventCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import ComingSoon from '../Components/ComingSoon'

import TechnicalEvents from "../constants/EventData/TechnicalEvents.json";
import ManagerialEvents from "../constants/EventData/ManagerialEvents.json";
import RoboticsEvents from "../constants/EventData/RoboticsEvents.json";
import OnlineEvents from "../constants/EventData/OtherEvents.json";

const eventsData: { [key: string]: any } = {
    Technical: TechnicalEvents,
    Managerial: ManagerialEvents,
    Robotics: RoboticsEvents,
    Online: OnlineEvents,
};

function EventDetails() {
    const { category, id } = useParams<{ category: string; id: string }>();
    //   const [activeTab, setActiveTab] = useState("about");
    const [eventDetails, setEventDetails] = useState<any>(null);

    useEffect(() => {
        if (category && id) {
            const eventData = eventsData[category]?.find(
                (event: any) => event.id === parseInt(id, 10)
            );
            setEventDetails(eventData);
        }
    }, [category, id]);

    console.log("EventDetails :- ", eventDetails);

    return (
        <div>
            {/* <ComingSoon /> */}
            <ParticlesBackground />
            {/* <TabComponent /> */}
            <div className="mt-10 sm:mt-30">
                <MakingEventCard />
            </div>
        </div>
    );
}

export default EventDetails;
