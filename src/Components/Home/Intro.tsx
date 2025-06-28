import stars from "../../assets/stars.png";
import splash from "../../assets/splash.png";
import IntroNavBar from "./IntroNavBar";
// import HomePageVideo from "../../assets/HomePageVideo/HomePageVideo.mp4";

const Intro = () => {
    return (
        <div className="relative md:h-screen sm:h-[70vh] h-[50vh] bg-[#3a1119] w-full">
            <div className="absolute w-full flex flex-col items-center gap-5">
                <IntroNavBar />
                <div
                    className="relative w-full md:h-full h-[50vh] sm:h-[70vh] flex justify-center items-center
        ">
                    <div
                        className="relative mx-auto flex jusitfy-center items-center bg-[#FFFFFF] z-[29] w-[80vw] max-w-[1200px] rounded-3xl border-4 border-black overflow-hidden bgIntro max-h-[80vh] max-md:-mt-36"
                        style={{
                            boxShadow:
                                "1px 1px 0px #000000, 2px 2px 0px #000000, 3px 3px 0px #000000, 4px 4px 0px #000000, 5px 5px 0px #000000, 6px 6px 0px #000000",
                        }}>
                        <div className="relative w-full h-full flex justify-center items-center">
                            <div className="relative mx-auto z-[29] w-[70vw] aspect-video overflow-hidden flex justify-center items-center max-w-[1000px]">
                                <video
                                    src={`https://res.cloudinary.com/dah8h7uld/video/upload/v1726293179/UpdatedHomePAgeVideo.mp4`}
                                    className="relative mx-auto aspect-video"
                                    controls={true}
                                    autoPlay={true}
                                    loop={true}></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bg-grid h-full w-full"></div>
            <img className="absolute lg:h-32 md:h-24 h-16 mt-5" src={stars} />
            <img
                className="absolute bottom-0 right-0 lg:h-32 md:h-24 h-16 mb-5 rotate-180 transform scale-y-[-1]"
                src={stars}
            />
            <img
                src={splash}
                className="absolute bottom-0 left-0 lg:h-32 md:h-24 h-16"
            />
        </div>
    );
};

export default Intro;
