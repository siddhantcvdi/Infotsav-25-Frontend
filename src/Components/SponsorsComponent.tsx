import { sponsorPage, currentSponsers } from '../constants/PastSponsors';

export const SponsorsComponent = () => {
    return (
        <div className="relative inset-0 flex flex-col items-center justify-center text-center z-10 my-32">
            <h1 className="text-[#FEFEFE] text-4xl md:text-6xl lg:text-7xl font-pixelify-bold">
                SPONSORS
            </h1>
            <div className="w-full mt-20 items-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-12 justify-center w-full">
                    {currentSponsers.map((sponsor: any, index: any) => (
                        <div
                            key={index}
                            className="flex justify-center items-center">
                            <img
                                src={sponsor.src}
                                alt={sponsor.alt}
                                className="h-24 w-24 sm:h-56 sm:w-56 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-[#FEFEFE] text-xl md:text-2xl lg:text-3xl font-pixelify-bold mt-6 md:mt-8 lg:mt-14">
                PAST SPONSORS
            </p>

            <div className="w-full mt-20 items-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-12 justify-center w-full">
                    {sponsorPage.map((sponsor: any, index: any) => (
                        <div
                            key={index}
                            className="flex justify-center items-center">
                            <img
                                src={sponsor.src}
                                alt={`Sponsor ${index + 1}`}
                                className="h-24 w-24 sm:h-56 sm:w-56 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
