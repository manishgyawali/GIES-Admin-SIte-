import React, { useState } from "react";
import { CiViewBoard } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { PiInvoiceLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarData = [
    { title: "Dashboard", icon: <IoHomeOutline />, path: "/" },
    { title: "Banner", icon: <CiViewBoard />, path: "/banner" },
    { title: "Destinations", icon: <CiViewBoard />, path: "/destinations" },
    { title: "Why Us", icon: <PiInvoiceLight />, path: "/whyus" },
    { title: "Our Services", icon: <PiInvoiceLight />, path: "/ourservices" },
    { title: "Courses", icon: <PiInvoiceLight />, path: "/courses" },
    { title: "Take Action", icon: <PiInvoiceLight />, path: "/takeaction" },
    { title: "Our Team", icon: <PiInvoiceLight />, path: "/ourteam" },
    { title: "Testimonials", icon: <CiViewBoard />, path: "/testimonials" },
    { title: "Get Success", icon: <PiInvoiceLight />, path: "/getsuccess" },
    { title: "Events", icon: <CiViewBoard />, path: "/events" },
    { title: "Articles", icon: <PiInvoiceLight />, path: "/articles" },
    { title: "Booking", icon: <PiInvoiceLight />, path: "/booking" },
    { title: "Frequently Asked Questions", icon: <PiInvoiceLight />, path: "/frequentlyaq" },
    {
      title: "Page Layout",
      icon: <PiInvoiceLight />,
      subdata: [
        { title: "Destinations", path: "/destinations" },
        { title: "Why Us", path: "/whyus" },
        { title: "Dark Menu", path: "/darkmenu" },
      ],
    },
  ];

  const [showDropdown, setShowDropdown] = useState(null);

  return (
    <div className="lg:flex hidden flex-col gap-8 sticky">
      {/* Sidebar Header */}
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-[#415FF2] font-bold text-3xl">GIES.</h1>
      </div>

      {/* Sidebar Menu */}
      <div className="flex flex-col pb-10 pl-10 gap-6">
        {sidebarData.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div
              onClick={() =>
                item.subdata
                  ? setShowDropdown(showDropdown === index ? null : index)
                  : null
              }
              className={`flex items-center gap-4 text-gray-400 hover:text-[#415FF2] cursor-pointer ${
                item.subdata ? "justify-between" : ""
              }`}
            >
              <div className="shadow p-2">{item.icon}</div>
              <Link to={item.path}>
                <h1 className="text-lg tracking-wider">{item.title}</h1>
              </Link>
              {item.subdata && (
                <div>
                  {showDropdown === index ? (
                    <MdKeyboardArrowDown className="text-xl" />
                  ) : (
                    <MdKeyboardArrowRight className="text-xl" />
                  )}
                </div>
              )}
            </div>

            {/* Dropdown Submenu */}
            {item.subdata && showDropdown === index && (
              <div className="flex flex-col pl-10 mt-2 gap-2 text-gray-500">
                {item.subdata.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className="hover:text-[#415FF2]"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
