import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import flagshipEvents from "../../constants/EventData/FlagShipEvents.json";

// Define the event type
interface FlagshipEvent {
  id: number;
  name: string;
  category: string;
  about: string;
  img?: string;
  [key: string]: any;
}

// Extract images from flagship events, filtering out any undefined images
const imgs = (flagshipEvents as FlagshipEvent[])
  .map((event) => event.img)
  .filter((img): img is string => img !== undefined);

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const SPRING_OPTIONS = {
  type: "spring" as const,
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const FeaturedCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (!isHovered) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [isHovered]);

  return (
    <div 
      className="relative overflow-hidden pb-4 pt-8 h-[50vh] flex flex-col justify-start items-center max-w-7xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <motion.div
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          className="flex w-full h-full"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
      </div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full h-full shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-2 flex w-full justify-center gap-1">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === imgIndex ? "bg-red-400" : "bg-red-800/50"
            }`}
          />
        );
      })}
    </div>
  );
};

