import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import technicalEvents from "../../constants/EventData/TechnicalEvents.json";
import managerialEvents from "../../constants/EventData/ManagerialEvents.json";
import roboticsEvents from "../../constants/EventData/RoboticsEvents.json";
import culturalEvents from "../../constants/EventData/CulturalEvents.json";
import { MinorEventCard } from "./EventCard";

// Define the event type
interface Event {
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
}

const VISIBLE_ITEMS = 3; // Number of items visible at once

// Map each section to its corresponding events dataset – hoisted outside the component so
// it has a stable reference and doesn't need to be included in React Hook deps.
const sectionEventsMap: Record<string, Event[]> = {
  technical: technicalEvents as Event[],
  managerial: managerialEvents as Event[],
  robotics: roboticsEvents as Event[],
  cultural: culturalEvents as Event[],
};

export const AllEventsCarousel = ({currentSection}: {currentSection: string}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [events,setEvents] = useState<Event[]>([]);
  useEffect(() => {
    setEvents((sectionEventsMap[currentSection] ?? technicalEvents) as Event[]);
  }, [currentSection]);
  
  
  // Create extended array with duplicates for infinite effect
  const extendedEvents = [...events, ...events, ...events];
  const startIndex = events.length; // Start from the middle set

  const moveToNext = useCallback(async () => {
    const nextIndex = currentIndex + 1;
    
    // Animate to the next position
    await controls.start({
      x: `-${nextIndex * (100 / VISIBLE_ITEMS)}%`,
    }, {
      type: "tween",
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    
    // Check if we need to reset position seamlessly
    if (nextIndex >= startIndex + events.length) {
      // Reset to the start of the middle set without animation
      setIsTransitionEnabled(false);
      controls.set({
        x: `-${startIndex * (100 / VISIBLE_ITEMS)}%`,
      });
      setCurrentIndex(startIndex);
      setTimeout(() => setIsTransitionEnabled(true), 50);
    } else {
      setCurrentIndex(nextIndex);
    }
  }, [controls, currentIndex, events.length, startIndex]);

  const moveToPrevious = useCallback(async () => {
    const prevIndex = currentIndex - 1;
    
    // Animate to the previous position
    await controls.start({
      x: `-${prevIndex * (100 / VISIBLE_ITEMS)}%`,
    }, {
      type: "tween",
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    
    // Check if we need to reset position seamlessly
    if (prevIndex < startIndex) {
      // Reset to the end of the middle set without animation
      setIsTransitionEnabled(false);
      const newIndex = startIndex + events.length - 1;
      controls.set({
        x: `-${newIndex * (100 / VISIBLE_ITEMS)}%`,
      });
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitionEnabled(true), 50);
    } else {
      setCurrentIndex(prevIndex);
    }
  }, [controls, currentIndex, events.length, startIndex]);

  // Handle mouse wheel scrolling
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (!isTransitionEnabled) return;
    
    if (e.deltaY > 0) {
      moveToNext();
    } else {
      moveToPrevious();
    }
  }, [moveToNext, moveToPrevious, isTransitionEnabled]);

  // Initialize position
  useEffect(() => {
    const initializeCarousel = async () => {
      await controls.set({
        x: `-${startIndex * (100 / VISIBLE_ITEMS)}%`,
      });
      setCurrentIndex(startIndex);
    };
    
    initializeCarousel();
  }, [controls, startIndex]);

  // Add wheel event listener
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  return (
    <div className="max-w-[76rem] mx-auto">
      {/* Heading */}
      <div className="px-4">
        <h2 className="text-3xl font-bold text-white">
          {`${currentSection.charAt(0).toUpperCase() + currentSection.slice(1)} Events`}
        </h2>
      </div>
      
      <div 
        ref={containerRef}
        className="relative overflow-hidden py-8 h-[50vh] flex flex-col justify-center items-center cursor-grab active:cursor-grabbing"
      >
      <div className="relative w-full h-full">
        <motion.div
          animate={controls}
          className="flex w-full h-full"
          style={{
            transition: !isTransitionEnabled ? "none" : undefined,
          }}
        >
          {extendedEvents.map((event, idx) => (
            <div 
              key={`${event.id}-${Math.floor(idx / events.length)}`} 
              className="shrink-0 px-3"
              style={{ width: `${100 / VISIBLE_ITEMS}%` }}
            >
              <MinorEventCard event={event} />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll hint */}
      <div className="mt-4 text-center text-sm text-gray-400 font-pixelify">
        Scroll to browse events
      </div>
    </div>
    </div>
  );
};
