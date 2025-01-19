import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Common/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Destinations from "./components/Pages/Destinations/Destinations";
import Courses from "./components/Pages/Courses/Courses";
import Articles from "./components/Pages/Articles/Articles";
import Events from "./components/Pages/Events/Events";
import FrequentlyAQ from "./components/Pages/FrequentlyAQ/FrequentlyAQ";
import Footer from "./components/Common/Footer/Footer";
import Banner from "./components/Pages/Banner/Banner";
import Whyus from "./components/Pages/Whyus/Whyus";
import OurServices from "./components/Pages/Our Services/OurServices";
import TakeAction from "./components/Pages/TakeAction/TakeAction";
import GetSuccess from "./components/Pages/GetSuccess/GetSuccess";
import OurTeam from "./components/Pages/OurTeam/OurTeam";
import Testimonials from "./components/Pages/Testimonials/Testimonials";
import Booking from "./components/Pages/Booking/Booking";

function App() {
  return (
    <div>
      <Router>
        <div className="flex w-full h-screen">
          {/* Sidebar */}
          <aside className="lg:w-[270px] h-full shadow-sm scroll  overflow-y-scroll">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <div className="lg:flex-1 flex relative flex-col w-full h-full">
            {/* Navigation */}
            <Navigation className="relative" />

            {/* Main Content */}
            <div className="lg:flex-1 absolute  w-full  top-36 px-8 scroll overflow-scroll">
              <Routes>
              <Route path="/banner" element={<Banner />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/whyus" element={<Whyus />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/ourservices" element={<OurServices />} />
                <Route path="/takeaction" element={<TakeAction />} />
                <Route path="/getsuccess" element={<GetSuccess />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/events" element={<Events />} />
                <Route path="/ourteam" element={<OurTeam />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/booking" element={<Booking />} />


                <Route path="/frequentlyaq" element={<FrequentlyAQ />} />
              </Routes>
            <Footer className=""  />
            </div>

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
