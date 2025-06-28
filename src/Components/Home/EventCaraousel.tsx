import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mosacibg from "../../assets/mosiacbg.png";
import FlagshipEvent from "../../constants/EventData/FlagShipEvents.json";
import ParticlesBackground from "../ParticlesBackground";

const defaultImg =
    "https://api.warrobots.com/storage/robot/77/regular_detail_picture-c8d48a4ea098c973e1e9874bf7030187.jpg";

function EventCarousel() {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (prevSlide) => (prevSlide + 1) % FlagshipEvent.length
            );
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="z-40 h-full flex justify-center items-center my-[100px] font-pixelhugger flex-col">
            <ParticlesBackground />
            <div
                style={{
                    zIndex: 999,
                    backgroundImage: `url(${mosacibg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    opacity: 0.8,
                }}
                className="flex flex-wrap md:flex-nowrap justify-between items-center z-30 w-[80%] bg-slate-600 p-10 gap-7 rounded-2xl">
                <div className="text-white z-30">
                    <h2 className="text-4xl font-bold mb-6">Flagship Events</h2>
                    <p>
                        Discover our flagship events that showcase talent,
                        creativity, and innovation across various domains.
                    </p>
                </div>

                <button
                    className="bg-white w-[200px] text-black px-5 py-2 rounded-3xl z-30 border-4 border-black font-semibold"
                    style={{
                        boxShadow:
                            "1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 5px 5px 0px #ff4910, 6px 6px 0px #ff4910",
                        whiteSpace: "nowrap",
                    }}
                    onClick={() => {
                        navigate("/events");
                    }}>
                    Explore More
                </button>
            </div>

            <div className="mt-10 z-30 w-[80%] bg-white p-5 text-center md:p-10 md:text-left rounded-2xl">
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10">
                    <img
                        className="w-[80%] md:w-[50%] rounded-xl"
                        src={FlagshipEvent[currentSlide].img || defaultImg} // Fallback to a placeholder image if img is empty
                        alt={FlagshipEvent[currentSlide].name}
                    />
                    <div>
                        <div className="text-black z-30">
                            <h2 className="text-4xl font-bold mb-6">
                                {FlagshipEvent[currentSlide].name}
                            </h2>
                            <p className="font-semibold">
                                {FlagshipEvent[currentSlide].about}
                            </p>
                        </div>
                        <div className="dots flex justify-center items-center mt-6">
                            {FlagshipEvent.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot w-3 h-3 rounded-full mx-1 cursor-pointer ${
                                        index === currentSlide
                                            ? "bg-black"
                                            : "bg-slate-500"
                                    }`}
                                    onClick={() => goToSlide(index)}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCarousel;
