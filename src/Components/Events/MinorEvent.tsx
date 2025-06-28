import { useNavigate } from "react-router-dom";
import TechnicalEvents from "../../constants/EventData/TechnicalEvents.json";
import ManagerialEvents from "../../constants/EventData/ManagerialEvents.json";
import RoboticsEvents from "../../constants/EventData/RoboticsEvents.json";
import OnlineEvents from "../../constants/EventData/OtherEvents.json";

type EventType = {
    name: string;
    url: string;
    about: string;
    category: string;
    id: number;
    img: string;
    prize: string;
};

interface MinorEventProps {
    category: string;
}

export default function MinorEvent({ category }: MinorEventProps) {
    // Choose the event data based on the category
    let eventsJson: EventType[] = [];
    switch (category) {
        case "Technical":
            eventsJson = TechnicalEvents;
            break;
        case "Managerial":
            eventsJson = ManagerialEvents;
            break;
        case "Robotics":
            eventsJson = RoboticsEvents;
            break;
        case "Online":
            eventsJson = OnlineEvents;
            break;
        default:
            eventsJson = TechnicalEvents;
    }

    return (
        <div className="mx-auto w-9/12 mt-10">
            <div className="h-px p-px bg-gray-500 border-0"></div>
            <div className="my-6">
                <p className="inline-flex text-4xl my-3">{category}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
                    {eventsJson.map((event: EventType, index: number) => (
                        <EventBox
                            key={index}
                            name={event.name}
                            id={event.id}
                            about={event.about}
                            category={category}
                            img={event.img}
                            prize={event.prize}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface EventBoxProps {
    name: string;
    id: number;
    about: string;
    category?: string;
    img: string;
    prize: string;
}

export function EventBox({
    name,
    id,
    about,
    category,
    img,
    prize,
}: EventBoxProps) {
    const navigate = useNavigate();
    return (
        <div
            className={`overflow-hidden aspect-square relative hover:transition-all group rounded-lg max-h-auto border border-slate-500 mx-auto bg-cover bg-center  backdrop-filter`}
            style={{ backgroundImage: `url(${img})` }}>
            <div className="h-full lg:p-6 p-2 group-hover:backdrop-blur-sm transition-all duration-500 ease-in-out bg-black bg-opacity-30">
                <div className="h-full flex flex-col justify-between group-hover:h-1/3 transition-all duration-500 ease-in-out">
                    <div className="text-slate-50 font-pixelhugger transition-all duration-500 ease-in-out z-10 group-hover:lg:text-2xl lg:text-3xl md:text-3xl group-hover:md:text-2xl text-3xl group-hover:text-2xl">
                        Prizes worth {prize}
                    </div>
                    <div className="group-hover:lg:text-2xl lg:text-3xl md:text-4xl group-hover:md:text-3xl text-3xl group-hover:text-2xl transition-all duration-500 ease-in-out">
                        {name}
                    </div>
                </div>

                <div className="h-2/3 py-2">
                    <p className="line-clamp-5 py-4 text-xs">{about}</p>
                    <div className="h-1/3 flex flex-col justify-end mb-2">
                        <p className="w-full h-px my-2 bg-pink-500 border-0"></p>
                        <button
                            type="button"
                            className="w-fit bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 my-2 ring-1 ring-slate-50"
                            onClick={() =>
                                navigate(`/eventdetails/${category}/${id}`)
                            }>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
