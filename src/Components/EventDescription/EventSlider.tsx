import React from "react";

const EventSlider: React.FC = () => {
  // const images = [
  //   {
  //     id: 1,
  //     url: "https://media.istockphoto.com/id/1001928116/photo/empty-vintage-seat-in-auditorium-or-theater-with-lights-on-stage.jpg?s=612x612&w=0&k=20&c=5qtW-A1L37HdntlimgE00xTaRZt_K12bb8JO0LCek8U=",
  //   },
  //   {
  //     id: 2,
  //     url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 3,
  //     url: "https://img.freepik.com/premium-photo/there-are-two-glasses-wine-sitting-table-with-bubbles-generative-ai_561855-25141.jpg",
  //   },
  // ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  return (
    <div className="relative w-full h-[400px]">
      <div className="relative flex flex-col items-center justify-center w-full h-full bg-cover bg-center">
        {/* <img
          src={images[currentIndex].url}
          alt={`Event-${images[currentIndex].id}`}
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        {/* <div className="absolute top-1/2 left-0 right-0 flex items-center justify-between w-full transform -translate-y-1/2 px-4">
          <button
            onClick={handlePrev}
            className="bg-transparent border-none p-4 cursor-pointer z-20 rounded-full w-14 h-14 md:w-16 md:h-16 mx-4 flex items-center justify-center ring-2 ring-white"
          >
            <svg
              className="h-10 w-10 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="8" y1="12" x2="16" y2="12" />
              <line x1="8" y1="12" x2="12" y2="16" />
              <line x1="8" y1="12" x2="12" y2="8" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-transparent border-none p-4 cursor-pointer z-20 rounded-full w-14 h-14 md:w-16 md:h-16 mx-4 flex items-center justify-center ring-2 ring-white"
          >
            <svg
              className="h-10 w-10 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="16" y1="12" x2="8" y2="12" />
              <line x1="16" y1="12" x2="12" y2="16" />
              <line x1="16" y1="12" x2="12" y2="8" />
            </svg>
          </button>
        </div> */}

        <div className="absolute top-1/2 left-0 right-0 text-center z-20">
          <h2
            className="text-white text-[8vh] font-pixelify uppercase"
            style={{ textOrientation: "mixed", writingMode: "horizontal-tb" }}
          >
            {/* EVENT-{images[currentIndex].id} */}
            Event Name 
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EventSlider;
