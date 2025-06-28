import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Hamburger from "../assets/hamburger-icon.png";
import { ArrowUpRight } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuClick, setMenuClick] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const handleClickOutside = (event: any) => {
        if (menuClick && !event.target.closest(".menu-container")) {
            setMenuClick(false);
        }
    };

    const toggleDialog = () => {
        setShowDialog(!showDialog);
        navigate("/dashboard");
    };

    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
    }, []);

    useEffect(() => {
        setMenuClick(false);
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [location]);

    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center absolute top-0 left-0 pt-[30px]">
            <div
                className="bg-[#FFFFFF] h-[60px] z-30 w-[80vw] rounded-3xl border-4 border-black flex justify-between items-center px-20px menu-container"
                style={{
                    boxShadow:
                        "1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 3px 3px 0px #ff4910, 4px 4px 0px #ff4910, 5px 5px 0px #ff4910, 6px 6px 0px #ff4910",
                }}>
                <div
                    onClick={() => navigate("/")}
                    className="hidden sm:flex mx-2 justify-center items-center gap-3 cursor-pointer">
                    <img src="/logo.png" alt="hell" className="h-[35px]" />
                    <h1 className="mr-[20px] font-pixelify font-black text-xl">
                        Infotsav
                    </h1>
                </div>

                <div>
                    <button
                        className="ml-[20px]"
                        onClick={() => setMenuClick(!menuClick)}>
                        <img
                            src={Hamburger}
                            alt=""
                            className="mr-[20px] h-[25px] pt-1"
                        />
                    </button>
                </div>

                <div>
                    {token ? (
                        <div
                            onClick={toggleDialog}
                            className="cursor-pointer h-[50px] w-[50px] rounded-full flex justify-center items-center bg-gray-200">
                            <FaUserCircle size={40} />
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/register")}
                            className="bg-black mx-3 px-4 py-1 text-white font-pixelify rounded-3xl">
                            Register
                        </button>
                    )}
                </div>
            </div>

            {/* pop-down menu */}
            <div
                className={`bg-[#FFFFFF] h-[350px] z-30 w-[80vw] rounded-3xl border-4 border-black flex flex-col justify-between items-center px-20px font-pixelify-semibold text-xl font-semibold transition-all duration-300 ease-in-out ${
                    menuClick
                        ? "opacity-100 max-h-full"
                        : "opacity-0 max-h-0 overflow-hidden"
                }`}
                style={{
                    padding: "20px",
                    boxShadow:
                        "1px 1px 0px #ff4910, 2px 2px 0px #ff4910, 3px 3px 0px #ff4910, 4px 4px 0px #ff4910, 5px 5px 0px #ff4910, 6px 6px 0px #ff4910",
                }}>
                <div className="w-full px-5">
                    <button
                        onClick={() => navigate("/about")}
                        className="rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center">
                        About
                        <ArrowUpRight className=" arrowIcon w-7 h-7 ml-1" />
                    </button>
                </div>

                <div className="w-full px-5">
                    <button
                        onClick={() => navigate("/events")}
                        className="rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center">
                        Events
                        <ArrowUpRight className="arrowIcon w-7 h-7 ml-1" />
                    </button>
                </div>

                <div className="w-full px-5">
                    <button
                        onClick={() => navigate("/sponsors")}
                        className="rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center">
                        Sponsors
                        <ArrowUpRight className=" w-7 h-7 ml-1" />
                    </button>
                </div>

                <div className="w-full px-5">
                    <button
                        onClick={() => navigate("/contact")}
                        className="rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center">
                        Contact Us
                        <ArrowUpRight className="arrowIcon w-7 h-7 ml-1" />
                    </button>
                </div>

                <div className="w-full px-5 hidden">
                    <button
                        onClick={() => navigate("/meet-the-team")}
                        className="rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center">
                        Meet The Team
                        <ArrowUpRight className="arrowIcon w-7 h-7 ml-1" />
                    </button>
                </div>

                <div className="w-full px-5">
                    <button
                        onClick={() => navigate("/campus-ambassador")}
                        className="rounded-3xl border-4 h-[50px] border-black w-full text-left px-5 flex justify-between items-center">
                        Campus Ambassador
                        <ArrowUpRight className="arrowIcon w-7 h-7 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
