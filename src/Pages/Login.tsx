import { useEffect, useState } from "react";
import ParticlesBackground from "../Components/ParticlesBackground";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
    doc,
    setDoc,
    query,
    where,
    getDocs,
    collection,
} from "firebase/firestore";
import {
    signInWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function referralGenerate(name: string, contactNumber: string): string {
    const firstFourLettersOfName = name.slice(0, 4).toUpperCase();
    const lastThreeDigitsOfContact = contactNumber.slice(-3);
    const referralCode = `${firstFourLettersOfName}${lastThreeDigitsOfContact}`;
    return referralCode;
}

function Login() {
    const [isRegistering, setIsRegistering] = useState(true);
    const Navigator = useNavigate();
    const [regformData, setRegFormData] = useState({
        name: "",
        email: "",
        collegeName: "",
        contactNumber: "",
        password: "",
    });
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
    }, []);

    if (token) {
        Navigator("/dashboard");
    }

    // const [refCode, setRefCode] = useState<string>("");

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    const handleRegistrationSubmit = async (e: any) => {
        e.preventDefault();
        const { name, email, collegeName, contactNumber, password } =
            regformData;

        if (!name || !email || !collegeName || !contactNumber || !password) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            // Check if the user is already registered in Firestore
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("email", "==", email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                alert("You are already a member. Kindly log in.");
                setIsRegistering(!isRegistering);
                return;
            }

            // Create a new user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            // Send verification email
            await sendEmailVerification(user);

            // Setting the Refferal code
            const reffereal: string = referralGenerate(email, contactNumber);
            console.log("refferal code Saved:- ", reffereal);
            // setRefCode(reffereal);
            // console.log("checking the usestate Ref: ", refCode);

            // Store additional user information in Firestore
            localStorage.setItem("userID", user.uid);
            const res = await setDoc(doc(db, "users", user.uid), {
                name,
                email,
                collegeName,
                contactNumber,
                refCode: reffereal,
                createdAt: new Date(),
            });
            console.log("RESULT", res, "shjdgbfvdjgj");

            alert(
                "Registration successful! Please check your email to verify your account."
            );

            setRegFormData({
                name: "",
                email: "",
                collegeName: "",
                contactNumber: "",
                password: "",
            });
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration failed. Please try again.");
        }
    };

    const handleInputChange = (e: any) => {
        setRegFormData({
            ...regformData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLoginSubmit = async (e: any) => {
        e.preventDefault();
        const { email, password } = loginFormData;

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            if (!user.emailVerified) {
                alert("Please verify your email before logging in.");
                await auth.signOut();
                return;
            }

            toast("Login successful!");
            localStorage.setItem("userID", user.uid);
            localStorage.setItem("token", user.uid);
            setLoginFormData({
                email: "",
                password: "",
            });
            Navigator("/dashboard");
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please check your email and password.");
        }
    };

    const handleLoginChange = (e: any) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value,
        });
    };

    const toggleForm = (event: any) => {
        event.preventDefault();
        setIsRegistering(!isRegistering);
    };

    return (
        <div className="h-full w-full">
            <div className="h-auto w-full flex justify-center items-center ">
                <ParticlesBackground />
                <div className="form-container h-full w-full flex justify-center items-center flex-col z-[20] relative mt-24">
                    {isRegistering ? (
                        <form
                            onSubmit={handleRegistrationSubmit}
                            className="h-[80%] w-[60%] mt-[5%]  backdrop-blur-sm flex flex-col justify-center items-center rounded-2xl border-2 borer-white py-5 ">
                            <div className="h-[100%] w-[100%] flex flex-col justify-start items-center space-y-6 gap-[7%] py-[2.5%]">
                                <h2 className="sg-text text-4xl h-[20px] mb-[20px] text-white">
                                    REGISTER
                                </h2>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={regformData.name}
                                    onChange={handleInputChange}
                                    className="h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2  border-indigo-500 text-white rounded-md "
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={regformData.email}
                                    onChange={handleInputChange}
                                    className="h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-indigo-500 text-white rounded-md "
                                />
                                <input
                                    type="text"
                                    name="collegeName"
                                    placeholder="College Name"
                                    value={regformData.collegeName}
                                    onChange={handleInputChange}
                                    className="h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-indigo-500 text-white rounded-md "
                                />
                                <input
                                    type="text"
                                    name="contactNumber"
                                    placeholder="Contact Number"
                                    value={regformData.contactNumber}
                                    onChange={handleInputChange}
                                    className="h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-indigo-500 text-white rounded-md "
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={regformData.password}
                                    onChange={handleInputChange}
                                    className="h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-indigo-500 text-white rounded-md "
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-red-600 h-[40px] w-32 lg:w-[200px] rounded-3xl my-4 text-slate-50 ring-1 ring-slate-200  
               lg:mb-[20px]">
                                Register
                            </button>
                            <button
                                onClick={toggleForm}
                                className="toggle-button bg-blue-600 h-[40px] w-32 lg:w-[200px] rounded-3xl text-slate-50 ring-1 ring-slate-200">
                                {isRegistering
                                    ? "Switch to Login"
                                    : "Switch to Register"}
                            </button>
                        </form>
                    ) : (
                        <form
                            onSubmit={handleLoginSubmit}
                            className="h-[80%] w-[60%] mt-[5%]     flex flex-col justify-center items-center border-2 borer-white rounded-xl py-4">
                            <div className="h-[100%] w-[100%] flex flex-col justify-start gap-[5%] py-[2.5%] items-center space-y-4 ">
                                <h2 className=" text-4xl sg-text text-white">
                                    LOGIN
                                </h2>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={loginFormData.email}
                                    onChange={handleLoginChange}
                                    className="h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-indigo-500 text-white rounded-md "
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={loginFormData.password}
                                    onChange={handleLoginChange}
                                    className="h-[2.5rem] w-[80%] px-[10px] bg-transparent border-2 border-indigo-500 text-white rounded-md "
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-red-600 h-[40px] w-[150px] text-slate-50 lg:w-[200px] my-[20px] rounded-3xl items-end ring-1 ring-white">
                                Login
                            </button>
                            <button
                                onClick={toggleForm}
                                className="toggle-button bg-blue-600 text-slate-50 w-[150px] h-[40px] lg:w-[200px] rounded-3xl mb-[10px] ring-1 ring-white">
                                {isRegistering
                                    ? "Switch to Login"
                                    : "Switch to Register"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
