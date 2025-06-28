// import React from "react";
import Slider from "react-infinite-logo-slider";
import { pastSponsors1, pastSponsors2 } from "../../constants/PastSponsors";
import PastSponsorCard from "./PastSponsorCard";

const PastSponsors = () => {
    return (
        <>
            <div className="relative h-fit pb-10 bg-[#070707] w-full">
                <div className="h-full w-full bg-grid absolute"></div>
                <div className="border-[#8BABBF] md:border-x-[12px] border-x-[10px] p-6 mx-auto w-fit">
                    <h2 className="font-pixelify text-white z-2 lg:text-6xl sm:text-4xl text-2xl">
                        PAST SPONSORS
                    </h2>
                </div>
                <div className="border-[#8BABBF] md:border-[12px] border-[10px] py-6 mx-auto bg-[#181818] grid md:grid-rows-2 grid-rows-3 md:w-[80vw] w-[90vw] overflow-hidden gap-6">
                    <Slider
                        className="slider"
                        duration={15}
                        pauseOnHover={true}
                        reverse={false}
                        gap={100}
                        unit="px">
                        {pastSponsors1.map(({ name, src }, index) => (
                            <Slider.Slide
                                key={index}
                                className="sponsorCardContainer">
                                <PastSponsorCard src={src} name={name} />
                            </Slider.Slide>
                        ))}
                    </Slider>
                    <Slider
                        className="slider"
                        duration={10}
                        pauseOnHover={true}
                        reverse={true}
                        gap={100}
                        unit="px">
                        {pastSponsors2.map(({ name, src }, index) => (
                            <Slider.Slide
                                key={index}
                                className="sponsorCardContainer">
                                <PastSponsorCard src={src} name={name} />
                            </Slider.Slide>
                        ))}
                    </Slider>
                    <div className="md:hidden">
                        <Slider
                            className="slider"
                            duration={7}
                            pauseOnHover={true}
                            reverse={false}
                            gap={100}
                            unit="px">
                            {pastSponsors1.map(({ name, src }, index) => (
                                <Slider.Slide
                                    key={index}
                                    className="sponsorCardContainer">
                                    <PastSponsorCard src={src} name={name} />
                                </Slider.Slide>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PastSponsors;
