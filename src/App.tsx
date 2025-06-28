import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import MeetTheTeam from "./Pages/MeetTheTeam";
import Sponsors from "./Pages/Sponsors";
import NotFound from "./Pages/NotFound";
import EventDetails from "./Pages/EventDetails.tsx";
import Dashboard from "./Pages/Dashboard.tsx";

import "./App.css";
import CampusAmba from "./Pages/CampusAmba.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/events" element={<Events />} />
                    <Route
                        path="/eventdetails/:category/:id"
                        element={<EventDetails />}
                    />
                    <Route path="/register" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/meet-the-team" element={<MeetTheTeam />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/campus-ambassador" element={<CampusAmba />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
