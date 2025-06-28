import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutTab from "./AboutTab";
import VenueTab from "./VenueTab";
import TimeTab from "./TimeTab";
import ContactTab from "./ContactTab";
import Button from "./Button";
import EventSlider from "./EventSlider";

// Import event descriptions
import TechnicalEvents from '../../constants/EventData/TechnicalEvents.json';
import ManagerialEvents from '../../constants/EventData/ManagerialEvents.json';
import RoboticsEvents from '../../constants/EventData/RoboticsEvents.json';
import OnlineEvents from '../../constants/EventData/OtherEvents.json';

const eventsData: { [key: string]: any } = {
  Technical: TechnicalEvents,
  Managerial: ManagerialEvents,
  Robotics: RoboticsEvents,
  Online: OnlineEvents,
};

const TabComponent: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const [activeTab, setActiveTab] = useState("about");
  const [eventDetails, setEventDetails] = useState<any>(null);

  useEffect(() => {
    if (category && id) {
      const eventData = eventsData[category]?.find((event: any) => event.id === parseInt(id, 10));
      setEventDetails(eventData);
      console.log(eventDetails);
    }
  }, [category, id]);

  const renderContent = () => {
    if (!eventDetails) {
      return <div>Loading...</div>;
    }

    switch (activeTab) {
      case "about":
        return <AboutTab about={eventDetails.about} />;
      case "venue":
        return <VenueTab venue={eventDetails.venue} />;
      case "time":
        return <TimeTab time={eventDetails.time} />;
      case "contact":
        return <ContactTab contacts={eventDetails.contact} />;
      default:
        return <AboutTab about={eventDetails.about} />;
    }
  };

  const tabs = [
    { id: "about", label: "ABOUT" },
    { id: "venue", label: "VENUE" },
    { id: "time", label: "TIME" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 bg-none">
      <EventSlider />
      <Button />
      
      <div className="relative box-border w-11/12 h-60 sm:w-4/5 lg:w-[900px] sm:h-72 lg:h-[350px] lg:rounded-[50px] urbanist-unique text-white flex flex-col justify-center items-center text-center px-4 sm:px-8 lg:px-16 py-2 bg-[rgba(168,167,248,0.51)] border-[6px] border-[#A8A7F8] shadow-[0px_20px_22px_#F2F0F0] rounded-[50px] overflow-hidden urbanist-unique font-extralight mb-10 sm:mb-16">
        <div className="absolute top-0 w-full flex justify-around space-x-0 sm:space-x-4 pt-3 sm:pt-8">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`cursor-pointer text-sm sm:text-lg ${activeTab === tab.id
                ? "font-bold underline underline-offset-2"
                : ""
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="my-auto">{renderContent()}</div>
      </div>
    </section>
  );
};

export default TabComponent;