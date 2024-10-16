import React from 'react';
import logo from "../assets/images/logo1.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-DarkBlue w-full xl:h-[250px] h-auto flex items-center">
        <div className="container w-11/12 mx-auto flex flex-col items-center xl:flex xl:justify-center xl:flex-row  py-8">
          <div className="xl:w-[80%] xl:flex xl:justify-between xl:items-center">

            {/* Left section with logo and social icons */}
            <div className="flex flex-col gap-4 items-center xl:items-start mb-8 xl:mb-0">
              <img src={logo} alt="logo" className="mb-6" />
              <div className="flex gap-4">
                <img
                  src={facebook}
                  alt="facebook"
                  className="hover:filter hover:invert hover:brightness-0 hover:sepia hover:saturate-100 hover:hue-rotate-180 hover:contrast-200 cursor-pointer"
                />
                <div className="hover:filter hover:brightness-0 hover:invert hover:sepia hover:saturate-100 hover:hue-rotate-[200deg] transition duration-300 cursor-pointer">
                  <img src={youtube} alt="youtube" />
                </div>
                <img
                  src={twitter}
                  alt="twitter"
                  className="hover:filter hover:invert hover:brightness-0 hover:sepia hover:saturate-100 hover:hue-rotate-180 hover:contrast-200 cursor-pointer"
                />
                <img
                  src={pinterest}
                  alt="pinterest"
                  className="hover:filter hover:invert hover:brightness-0 hover:sepia hover:saturate-100 hover:hue-rotate-180 hover:contrast-200 cursor-pointer"
                />
                <img
                  src={instagram}
                  alt="instagram"
                  className="hover:filter hover:invert hover:brightness-0 hover:sepia hover:saturate-100 hover:hue-rotate-180 hover:contrast-200 cursor-pointer"
                />
              </div>

            </div>

            {/* Center section with navigation links */}
            <div className="flex flex-col items-center xl:flex-row xl:gap-[8rem] mb-8 xl:mb-0">
              <ul className="flex flex-col items-center xl:items-start gap-4 mb-6 xl:mb-0">
                <li className="text-LightGrayishBlue hover:text-LimeGreen cursor-pointer">About Us</li>
                <li className="text-LightGrayishBlue hover:text-LimeGreen cursor-pointer">Contact</li>
                <li className="text-LightGrayishBlue hover:text-LimeGreen cursor-pointer">Blog</li>
              </ul>
              <ul className="flex flex-col items-center xl:items-start gap-4">
                <li className="text-LightGrayishBlue">Careers</li>
                <li className="text-LightGrayishBlue">Support</li>
                <li className="text-LightGrayishBlue">Privacy Policy</li>
              </ul>
            </div>

            {/* Right section with button and copyright */}
            <div className="flex flex-col items-center xl:items-end gap-6">
              <div className="bg-LimeGreen w-[150px] h-[40px] cursor-pointer flex justify-center items-center rounded-full">
                <button className="">Request Invite</button>
              </div>
              <p className="text-LightGrayishBlue text-center xl:text-right">EasyBank. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
