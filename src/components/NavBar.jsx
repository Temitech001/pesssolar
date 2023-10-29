import { useState } from 'react';
import Dropdown from './Dropdown';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="flex justify-between items-start  md:gap-10 md:items-center py-10 md:mx-10 lg:mx-20 mx-10">
      <div className="z-10">
        <img
          className="w-40 "
          src={
            'https://res.cloudinary.com/dutvrzezk/image/upload/v1696666237/solarinc-removebg-preview_x6mjt4.png'
          }
          alt="Boldo Logo"
        />
      </div>
      <div className="z-30 relative ">
        <div className="md:hidden z-10">
          <button
            className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={` relative ${
            navbar ? 'flex' : 'hidden'
          } text-white border-indigo-800 items-start bg-[#68D391]    md:w-full w-screen px-10 py-10 
            md:py-0 md:px-0 p-5 md:bg-transparent absolute z-0 top-[-01rem] right-[-rem]  left-[-4rem] md:static flex-col md:flex-row  
            md:flex justify-center text-base md:items-center font-openSans gap-10`}
        >
          <div
            className={`bg-green-400 h-52 ${
              modal ? ' ' : 'hidden'
            } w-[250px] ml-[120px] absolute z-50 top-12 left-4`}
          >
            <Dropdown />
          </div>

          <a href="#Hero">
            {' '}
            <p
              onClick={() => setNavbar(!navbar)}
              className="cursor-pointer"
            >
              Home
            </p>
          </a>
          <a href="#Service">
            <p
              onClick={() => setNavbar(!navbar)}
              className="cursor-pointer"
            >
              OurServices
            </p>
          </a>
          <a href="#AboutUs">
            <p
              onClick={() => setNavbar(!navbar)}
              className="cursor-pointer"
            >
              AboutUs
            </p>
          </a>
          <a href="#Work">
            <p
              onClick={() => setNavbar(!navbar)}
              className="cursor-pointer"
            >
              Work
            </p>
          </a>
          <a href="#Contact">
            <p
              onClick={() => setNavbar(!navbar)}
              className="cursor-pointer"
            >
              Contact
            </p>
          </a>
          <button
            onClick={() => setModal((prev) => !prev)}
            className="bg-white font-bold text-[#0A2640] rounded-full px-5 w-fit py-1 md:px-9 md:py-2 mr-5"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
