import React, { useState } from 'react';
import logo from "../../assets/images/logo.svg";

const Menu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-white xl:drop-shadow-lg w-full h-[100px] xl:h-[80px] flex lg:h-auto z-50 relative">
        <div className="container lg:w-11/12 m-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className='p-4 xl:p-0' />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-6">
              <li className="text-[18px]">Home</li>
              <li className="text-[18px]">About</li>
              <li className="text-[18px] cursor-pointer hover:border-b-[3px] border-LimeGreen">Contact</li>
              <li className="text-[18px]">Blogs</li>
              <li className="text-[18px]">Careers</li>
            </ul>
          </div>

          {/* Request Invite button */}
          <div className="hidden lg:flex bg-LimeGreen w-[150px] h-[40px] flex justify-center items-center rounded-full">
            <button className="">Request Invite</button>
          </div>

          {/* Hamburger menu (visible on mobile and tablet) */}
          <div className="lg:hidden flex items-center p-4">
            <button onClick={toggleSidebar} className="text-[30px]">
              &#9776; {/* Hamburger icon */}
            </button>
          </div>
        </div>

        {/* Sidebar for mobile/tablet view */}
        <div
          className={`fixed top-0 left-0 w-[250px] h-full bg-white z-50 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6">
            <button onClick={toggleSidebar} className="text-[30px] mb-8">
              &times; {/* Close icon */}
            </button>
            <ul className="flex flex-col gap-6">
              <li className="text-[18px]">Home</li>
              <li className="text-[18px]">About</li>
              <li className="text-[18px] cursor-pointer hover:border-b-[3px] border-LimeGreen">Contact</li>
              <li className="text-[18px]">Blogs</li>
              <li className="text-[18px]">Careers</li>
            </ul>
            <div className="mt-8 bg-LimeGreen w-full h-[40px] flex justify-center items-center rounded-full">
              <button className="">Request Invite</button>
            </div>
          </div>
        </div>

        {/* Overlay for closing sidebar when clicked outside */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default Menu;
