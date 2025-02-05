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
import VisaDestination from "./components/Pages/VisaDestinations/VisaDestination";
import Gallery from "./components/Pages/Gallery/Gallery";
import CarrerOpportunities from "./components/Pages/CarrerOpportunities/CarrerOpportunities";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import ContactInquiry from "./components/Pages/ContactInquiry/ContactInquiry";
import BookingInquiry from "./components/Pages/BookingInquiry/BookingInquiry";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import MessageFromCEO from "./components/Pages/MessageFromCEO/MessageFromCEO";
import DestinationsT from "./components/Pages/Destinations/DestinationsT";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import WhyusT from "./components/Pages/Whyus/WhyusT";
import CoursesT from "./components/Pages/Courses/CoursesT";
import OurTeamT from "./components/Pages/OurTeam/OurTeamT";
import TestimonialsT from "./components/Pages/Testimonials/TestimonialsT";
import OurServicesT from "./components/Pages/Our Services/OurServicesT";
import ArticlesT from "./components/Pages/Articles/ArticlesT";
import FrequentlyAQT from "./components/Pages/FrequentlyAQ/FrequentlyAQT";
import AboutUsT from "./components/Pages/AboutUs/AboutUsT";
import BookingInquiryT from "./components/Pages/BookingInquiry/BookingInquiryT";
import GalleryT from "./components/Pages/Gallery/GalleryT";
import OurMissionT from "./components/Pages/AboutUs/OurMissionT";
import OurVisionT from "./components/Pages/AboutUs/OurVisionT";
import ContactUsT from "./components/Pages/ContactUs/ContactUsT";
import ContactInquiryT from "./components/Pages/ContactInquiry/ContactInquiryT";
import CarrerOpportunitiesT from "./components/Pages/CarrerOpportunities/CarrerOpportunitiesT";
import EventsT from "./components/Pages/Events/EventsT";
import VisaDestinationsT from "./components/Pages/VisaDestinations/VisaDestinationsT";
import CountryDetailsT from "./components/Pages/VisaDestinations/CountryDetailsT";
import CourseDetailsT from "./components/Pages/Courses/CourseDetailsT";
import AllCourseT from "./components/Pages/Courses/AllCourseT";
import ArticleDetailsT from "./components/Pages/Articles/ArticleDetailsT";
import EventDetailsT from "./components/Pages/Events/EventDetailsT";


function App() {
  return (
    <div>
      <Router>
        <div className="flex w-full h-screen">
          {/* Sidebar */}
          <aside className="lg:w-[280px] fixed   h-full shadow-sm scroll  overflow-y-scroll">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <div className="lg:flex-1 lg:ml-[280px] flex relative flex-col w-full h-full">
            {/* Navigation */}
            <Navigation className="relative" />

            {/* Main Content */}
            <div className="lg:flex-1 absolute  w-full  top-36 px-8 scroll overflow-scroll">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/banner" element={<Banner />} />
                <Route path="/aboutus" element={<AboutUs />} />
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
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/contactinquiry" element={<ContactInquiry />} />
                <Route
                  path="/carreropportunities"
                  element={<CarrerOpportunities />}
                />
                <Route path="/visadestinations" element={<VisaDestination />} />
                <Route path="/bookinginquiry" element={<BookingInquiry />} />
                <Route path="/messagefromceo" element={<MessageFromCEO />} />
                <Route path="/frequentlyaq" element={<FrequentlyAQ />} />
                <Route path="/destinationst" element={<DestinationsT />} />
                <Route path="/coursest" element={<CoursesT />} />
                <Route path="/whyust" element={<WhyusT />} />
                <Route path="/ourteamt" element={<OurTeamT />} />
                <Route path="/testimonialst" element={<TestimonialsT />} />
                <Route path="/ourservicest" element={<OurServicesT />} />
                <Route path="/articlest" element={<ArticlesT />} />
                <Route path="/frequentlyaqt" element={<FrequentlyAQT />} />
                <Route path="/aboutust" element={<AboutUsT />} />
                <Route path="/bookinginquiryt" element={<BookingInquiryT />} />
                <Route path="/galleryt" element={<GalleryT />} />
                <Route path="/ourmissiont" element={<OurMissionT />} />
                <Route path="/ourvisiont" element={<OurVisionT />} />
                <Route path="/contactust" element={<ContactUsT />} />
                <Route path="/contactinquiryt" element={<ContactInquiryT />} />
                <Route
                  path="/carreropportunitiest"
                  element={<CarrerOpportunitiesT />}
                />
                <Route path="/eventst" element={<EventsT />} />
                <Route path="/visasdestinationst" element={<VisaDestinationsT />} />
                <Route path="/countrydetailst" element={<CountryDetailsT />} />
                <Route path="/coursedetailst" element={<CourseDetailsT />} />
                <Route path="/allcourset" element={<AllCourseT />} />
                <Route path="/articledetailst" element={<ArticleDetailsT />} />
                <Route path="/eventdetailst" element={<EventDetailsT />} />

                




              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
