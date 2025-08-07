
import BG_01 from "../assets/BG_01.jpg";
import men from "../assets/men.png";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const projectImages = [
  "/src/assets/project1.jpg",
  "/src/assets/project2.jpg",
  "/src/assets/project3.jpg",
  "/src/assets/project4.jpg",
  "/src/assets/project5.jpg",
  "/src/assets/project6.jpg",
  "/src/assets/project7.jpg",
  "/src/assets/project8.jpg",
  "/src/assets/project9.jpg",
];

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('get-in-touch');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
            <img
      src={BG_01}
      alt="Background"
      className="absolute top-0 left-0 w-full h-full object-cover z-11 filter brightness-50"
      />

      {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 z-10"></div>

        {/* Header Content */}
        <div className="absolute top-0 left-0 w-full h-full z-20">
          {/* Navigation */}
          <div className="flex justify-between items-center px-4 py-7 relative">
            <h1 className="text-white text-3xl md:text-4xl font-bold mx-auto absolute left-1/2 transform -translate-x-1/2">
              THE RV BUILDERS
            </h1>
            <div className="flex gap-4 text-white text-xl ml-auto">
              <FaInstagram className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h2 className="text-5xl md:text-7xl font-serif tracking-wider mb-6 leading-tight">
              WELCOME TO<br />
              THE RV BUILDERS
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Building dreams into reality with precision, luxury, and unmatched craftsmanship. 
              Your vision, our expertise.
            </p>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white bg-transparent text-white px-8 py-3 text-sm tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Meet the Founders */}
      <div className="w-full min-h-screen flex items-center justify-center bg-white px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-6xl font-serif font-normal text-gray-800 mb-6 uppercase tracking-wide">
              MEET THE FOUNDERS
            </h2>
            <h3 className="text-2xl font-light text-gray-800 mb-8">
              Pioneering Luxury Construction Excellence
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by visionaries Rishab Debnath and Vedant Ingale, RV Builders is a premier construction firm specializing in luxury residential and commercial spaces. With over a decade of combined expertise in architecture and project management, they’ve redefined modern construction through precision, innovation, and uncompromising quality — earning a trusted name across the region.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={men}
              alt="Founders of The RV Builders"
              className="rounded-2xl shadow-lg w-[300px] md:w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Social Reach */}
      <div className="bg-black py-12 px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Our Reach
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center text-white">
            <FaInstagram className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold">100K+</h3>
            <p className="text-sm text-gray-400">Instagram Followers</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <FaFacebookF className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold">75K+</h3>
            <p className="text-sm text-gray-400">Facebook Likes</p>
          </div>
          <div className="flex flex-col items-center text-white">
            <FaYoutube className="text-6xl mb-4" />
            <h3 className="text-2xl font-bold">745K+</h3>
            <p className="text-sm text-gray-400">YouTube Subscribers</p>
          </div>
        </div>
      </div>

      {/* Luxury Projects */}
      <div className="w-full bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Luxury Building Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projectImages.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 text-sm font-semibold rounded">
                RV
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Get In Touch */}
      <div id="get-in-touch" className="w-full bg-white text-black py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-5xl font-serif tracking-wide mb-8 uppercase">
              GET IN TOUCH
            </h2>
            <p className="text-lg leading-relaxed max-w-lg">
              If you have a luxury or unique home that you would like to showcase on
              The Luxury Home Show, or any business enquiries, please reach out to us
              using the form provided.
            </p>
          </div>

          <div className="bg-gray-100 p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Name <span className="text-xs">(required)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-black bg-transparent p-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-transparent mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-black bg-transparent p-2 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email <span className="text-xs">(required)</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-black bg-transparent p-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Message <span className="text-xs">(required)</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full border-b border-black bg-transparent p-2 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="border border-black px-6 py-2 mt-4 hover:bg-black hover:text-white transition-all duration-200"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#111] text-white px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif tracking-widest">THE RV BUILDERS</h1>
            <div className="flex space-x-4 mt-4 text-xl">
              <FaInstagram />
              <FaYoutube />
              <FaTiktok />
              <FaFacebookF />
            </div>
          </div>

          <div className="mt-6 md:mt-0 text-right">
            <h2 className="text-2xl font-serif tracking-widest">CONTACT</h2>
            <p className="mt-4 border-b border-gray-600 inline-block pb-1">hello@theluxuryhomeshow.com</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-sm">
          <p className="mb-2 md:mb-0">© 2024, All Rights Reserved</p>
          <div className="flex space-x-6">
            <p className="border-b border-gray-500">Terms & Conditions</p>
            <p className="border-b border-gray-500">Privacy Policy</p>
            <p className="border-b border-gray-500">Design Credit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;