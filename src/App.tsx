import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import NotFound from "./Pages/NotFound";

import "./App.css";
import CampusAmba from "./Pages/CampusAmba";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventdetails/:category/:id" element={<Home />} />
          <Route path="/register" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/meet-the-team" element={<Home />} />
          <Route path="/sponsors" element={<Home />} />
          <Route path="/campus-ambassador" element={<CampusAmba />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
