import { useState, useEffect } from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { DocumentData } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [userData, setUserData] = useState<DocumentData | null>(null);
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState<string>("");

    const navigate = useNavigate();

    async function getUserdata() {
        const uid = localStorage.getItem("userID");

        if (!uid) {
            console.log("No user ID found in localStorage");
            setLoading(false);
            return;
        }

        const docRef = doc(db, "users", uid);

        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setUserData(data);

                // Extract the first name
                if (data.name) {
                    const nameParts = data.name.split(" ");
                    setFirstName(nameParts[0]);
                }
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching document:", error);
        } finally {
            setLoading(false);
        }
    }

    if (!loading && !userData) {
        navigate("/");
    }

    useEffect(() => {
        getUserdata();
    }, []);

    const handleReferralClick = (): void => {
        const textToCopy =
            document.getElementById("referral-text-box")?.innerText;

        if (textToCopy) {
            navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                    alert("Referral ID copied to clipboard!");
                })
                .catch((err: any) => {
                    console.error("Failed to copy: ", err);
                });
        } else {
            console.error("No text found to copy.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userID");
        console.log("lpgegd out");
        window.location.reload();
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen text-white">
                Loading...
            </div>
        );
    }

    return (
        <main className="h-[85vh] flex flex-col mt-[80px] w-full text-white items-center px-4 sm:px-6 pb-16">
            <section className=" flex h-full flex-col w-full items-center mt-6 sm:mt-8">
                <div className=" relative z-[-1] w-full max-w-lg">
                    <ParticlesBackground />
                </div>
                <div className="w-full h-full bg-opacity-80 p-6 rounded-lg shadow-lg mt-4 sm:mt-6">
                    {userData ? (
                        <div className="h-full w-full text-center">
                            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-mono font-bold bg-clip-text bg-gradient-to-b text-transparent from-neutral-50 to-neutral-400 bg-opacity-50">
                                Welcome, {firstName}!
                            </h1>
                            <div className="flex justify-center py-12 overflow-clip">
                                <div className="flex justify-center items-center bg-gray-500/[0.24] rounded-3xl border-2 border-orange-700/[0.70] p-6 shadow-lg max-w-md w-full">
                                    <div className="text-left space-y-4 h-full w-full text-xl flex-col font-pixelhugger">
                                        <p className="flex items-center flex-initial ">
                                            <span className="text-left text-gray-300 mr-2">
                                                Email:
                                            </span>
                                            <span className="text-gray-400 text-left">
                                                {userData?.email || "N/A"}
                                            </span>
                                        </p>
                                        <p className="flex items-center">
                                            <span className="text-gray-300 mr-2 ">
                                                Contact:
                                            </span>
                                            <span className="text-gray-400 ">
                                                {userData?.contactNumber ||
                                                    "N/A"}
                                            </span>
                                        </p>
                                        <p className="flex items-center sm:flex-auto">
                                            <span className="text-gray-300 mr-2">
                                                College Name:
                                            </span>
                                            <span className="text-gray-400">
                                                {userData?.collegeName || "N/A"}
                                            </span>
                                        </p>
                                        <p className="flex items-center sm:flex-auto">
                                            <span className="text-gray-300 mr-2">
                                                Referral ID:
                                            </span>
                                            <span
                                                id="referral-text-box"
                                                className="text-gray-400">
                                                {userData?.refCode
                                                    ? userData?.refCode
                                                    : "NOT-AVALIABLE-REFERALCODE"}
                                            </span>
                                            <span
                                                onClick={handleReferralClick}
                                                className="cursor-pointer text-blue-500 hover:text-blue-700 ml-4"
                                                title="Copy Referral ID">
                                                ⎙
                                            </span>
                                        </p>
                                        <button
                                            onClick={handleLogout}
                                            className="bg-red-600/[0.90] hover:bg-red-600/[0.3] hover:text-gray-300 w-full py-2 text-white rounded-md">
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-red-400">
                            No user data available
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;
