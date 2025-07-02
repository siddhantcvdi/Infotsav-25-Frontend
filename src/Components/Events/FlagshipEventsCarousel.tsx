import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import flagshipEvents from "../../constants/EventData/FlagShipEvents.json";
import { FlagshipEventCard } from "./FlagshipEventCard";

// Define the event type
interface FlagshipEvent {
  id: number;
  name: string;
  category: string;
  about: string;
  img?: string;
  prize?: string;
  date?: string;
  fee?: number;
  contact?: Array<{
    name: string;
    phone: string;
    email: string;
  }>;
  description?: {
    overview: string;
    rules: Record<string, unknown>;
  };
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const SPRING_OPTIONS = {
  type: "spring" as const,
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const FlagshipEventsCarousel = () => {
  const [eventIndex, setEventIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const events = flagshipEvents as FlagshipEvent[];

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (!isHovered) {
        setEventIndex((pv) => {
          if (pv === events.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [isHovered, events.length]);

  return (
    <div 
      className="relative overflow-hidden pb-4 pt-8 h-[50vh] flex flex-col justify-start items-center max-w-7xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <motion.div
          animate={{
            translateX: `-${eventIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          className="flex w-full h-full"
        >
          <EventCards eventIndex={eventIndex} events={events} />
        </motion.div>
      </div>

      <Dots eventIndex={eventIndex} setEventIndex={setEventIndex} events={events} />
    </div>
  );
};

const EventCards = ({ eventIndex, events }: { eventIndex: number; events: FlagshipEvent[] }) => {
  return (
    <>
      {events.map((event, idx) => {
        return (
          <div key={event.id} className="w-full h-full shrink-0">
            <FlagshipEventCard 
              event={event} 
              isActive={eventIndex === idx}
            />
          </div>
        );
      })}
    </>
  );
};

const Dots = ({
  eventIndex,
  setEventIndex,
  events,
}: {
  eventIndex: number;
  setEventIndex: Dispatch<SetStateAction<number>>;
  events: FlagshipEvent[];
}) => {
  return (
    <div className="mt-2 flex w-full justify-center gap-1">
      {events.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setEventIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === eventIndex ? "bg-red-400" : "bg-red-800/50"
            }`}
          />
        );
      })}
    </div>
  );
};
