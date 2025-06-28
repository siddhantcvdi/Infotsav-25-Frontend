// import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import FlagshipEvents from "../../constants/EventData/FlagShipEvents.json";

export default function MajorEvent() {
  const navigate = useNavigate();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-9/12 mx-auto">
      <Slider {...settings}>
        {FlagshipEvents.map((event) => (
          <div
            key={event.id}
            className="object-top overflow-hidden relative hover:transition-all group w-9/12 rounded-lg max-h-auto h-[550px]   border-2 border-slate-500 mx-auto hue-rotate-60 backdrop-filter"

          >
            <div
              className="h-full p-6 group-hover:backdrop-blur-sm transition-all duration-500 ease-in-out bg-cover bg-center"
              style={{ backgroundImage: `url(${event.img || '../src/assets/EventsPage/majorEvent.jpeg'})` }}
            >


              <div className="h-full flex flex-col justify-between group-hover:h-1/2 transition-all duration-500 ease-in-out">

                <div className="text-slate-50 z-10 group-hover:lg:text-5xl lg:text-6xl md:text-4xl text-3xl transition-all duration-500 ease-in-out pt-4 pl-5">
                </div>
                <div className="group-hover:lg:text-5xl lg:text-6xl md:text-4xl text-3xl transition-all duration-500 ease-in-out pb-4 pl-5">
                  {event.name}
                </div>

              </div>

              <div className="h-1/2 py-2 px-5">
                <p className="line-clamp-5 py-4 text-xs lg:text-lg h-1/2">
                  {event.about}
                </p>
                <div className="h-1/2 flex flex-col justify-end mb-2">
                  <p className="w-full h-px my-2 bg-pink-500 border-0"></p>
                  <button
                    type="button"
                    className="w-fit bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 my-2 ring-1 ring-slate-50"
                    onClick={() => navigate(`/eventdetails/${event.category}/${event.id}`)}
                  >
                    View Details
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
