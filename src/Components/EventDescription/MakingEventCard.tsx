import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Import event descriptions
import TechnicalEvents from "../../constants/EventData/TechnicalEvents.json";
import ManagerialEvents from "../../constants/EventData/ManagerialEvents.json";
import RoboticsEvents from "../../constants/EventData/RoboticsEvents.json";
import OnlineEvents from "../../constants/EventData/OtherEvents.json";

const eventsData: { [key: string]: any } = {
    Technical: TechnicalEvents,
    Managerial: ManagerialEvents,
    Robotics: RoboticsEvents,
    Online: OnlineEvents,
};

interface Contact {
    name: string;
    phone: string;
    email: string;
}

const MakingEventCard: React.FC = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    const [eventDetails, setEventDetails] = useState<any>(null);

    useEffect(() => {
        if (category && id) {
            const eventData = eventsData[category]?.find(
                (event: any) => event.id === parseInt(id, 10)
            );
            setEventDetails(eventData);
        }
    }, [category, id]);

    // Load the Devfolio script if the event is Technical and id is 1
    useEffect(() => {
        if (category === "Technical" && id === "1") {
            const script = document.createElement("script");
            script.src = "https://apply.devfolio.co/v2/sdk.js";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }
    }, [category, id]);

    console.log("eventDetails :-", eventDetails);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10 bg-none">
            <div className="bg-[#0000004d] font-pixelhugger p-3 w-[90vw] min-h-40 flex my-[20px] mx-[5vw] text-[#f0f8ff] backdrop-blur rounded-[40px] shadow-[0px_0px_20px_#8f8f8f8f] items-center max-[768px]:flex-wrap max-[768px]:justify-center mt-40 sm:mt-10">
                <div className="relative overflow-hidden aspect-square w-full max-w-[25rem]">
                    <img
                        className="absolute inset-0 object-cover w-full h-full rounded-[40px] border-4 border-white border-opacity-30 "
                        src={eventDetails?.img || "/Card-Robo.png"}
                        alt="event"
                    />
                </div>
                <div className="w-3/5 lg:w-90 md:w-90 max-[768px]:w-[90%] self-start px-10">
                    <div className="font-retrog text-center md:text-left lg:text-3xl md:text-3xl sm:text-3xl text-4xl mt-0 max-[640px]:my-2 max-[640px]:flex justify-center bg-clip-text bg-gradient-to-b text-transparent from-neutral-50 to-neutral-400">
                        {eventDetails?.name || "Event Name"}
                    </div>

                    <div className="font-ticketing xl:text-xl sm:text-md max-[640px]:text-md text-gray-500">
                        {eventDetails?.description ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: eventDetails.about,
                                }}></div>
                        ) : null}
                    </div>
                    <div className="font-retrog mt-4 text-center md:text-left lg:text-3xl md:text-3xl sm:text-3xl text-4xl max-[640px]:my-2 max-[640px]:flex justify-center bg-clip-text bg-gradient-to-b text-transparent from-neutral-50 to-neutral-400">
                        Contact
                    </div>

                    {eventDetails?.contact?.map(
                        (contact: Contact, index: number) => (
                            <div key={index} className="mt-4 inline-block m-5">
                                <h4 className="text-blue-200 font-semibold">
                                    {contact?.name}
                                </h4>
                                <p className="text-gray-500">
                                    {contact?.phone || ""}
                                </p>
                                <p className="text-gray-500">
                                    {contact?.email}
                                </p>
                            </div>
                        )
                    )}

                    <br />
                    <div className="max-[768px]:flex justify-start max-[768px]:justify-between max-[768px]:w-[95%] gap-2 ">
                        <div className="flex ">
                            <div className="font-retrog text-lg sm:text-2xl ">
                                <div>
                                    <s className=" bg-clip-text bg-gradient-to-b text-transparent from-neutral-50 to-neutral-400">
                                        Prizes Worth :-{" "}
                                    </s>
                                    <s className=" bg-clip-text bg-gradient-to-b text-transparent from-yellow-50 to-yellow-400">
                                        INR{" "}
                                        {eventDetails?.prize
                                            ? eventDetails.prize
                                                  .toString()
                                                  .substring(0, 2) + "K"
                                            : "No Price"}
                                    </s>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/5 lg:w-90 md:w-100 max-[768px]:w-[100%] flex flex-col items-center gap-2 justify-center m-2.5">
                    {category === "Technical" && id === "1" ? (
                        <div
                            className="apply-button"
                            data-hackathon-slug="Hackatron24"
                            data-button-theme="dark-inverted"
                            style={{ height: "44px", width: "312px" }}></div>
                    ) : (
                        <Link
                            to={eventDetails?.url}
                            className="relative w-[150px] h-18 text-base p-[1px] bg-gradient-to-r from-[#e0e0e0] from-[0%] to-[#FFFFFF] 
                 hover:from-[#131313] hover:from-[61%] hover:to-[#5856D6] 
                 shadow-[0px_4px_4px_1px_rgba(168,167,248,0.51)] 
                 rounded-[30px] urbanist-unique font-extralight text-center 
                 text-black hover:text-white sm:text-lg sm:p-1 sm:w-48
                  md:w-[220px] md:h-15 md:text-xl md:p-2">
                            Register
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MakingEventCard;
