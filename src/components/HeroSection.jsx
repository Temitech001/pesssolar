import { motion } from 'framer-motion';

import NavBar from './NavBar';

const HeroSection = () => {
  return (
    <main id="Hero" className="relative overflow-clip md:h-full bg-green-400">
      <img
        className="absolute w-[400px] h-[400px] z-0 top-[-05rem] right-[-13rem] rounded-full "
        src="https://res.cloudinary.com/dutvrzezk/image/upload/v1698445480/gg_idyrlu.png"
      />
      <NavBar />
      <div className="flex flex-col md:gap-20 gap-12 ">
        <div className="flex flex-col md:flex-row  md:ml-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 z-10 flex flex-col justify-center items-center gap-16 md:gap-8"
          >
            <div className="text-white w-full px-10 md:px-16">
              <h2 className="font-manrope text-4xl leading-[59px] md:text-5xl md:leading-[72px] mb-8 md:mb-5">
                Energy Generated From Natural Resources
              </h2>
              <p className="text-base font-normal font-openSans  leading-8 md:leading-7">
                Solar power: because the best things in life end up being free.
                <br />
                Solar power stands as a beacon of hope in our pursuit of clean,
                sustainable energy.
              </p>
            </div>
            <div className="flex justify-start items-start md:items-center ml-12 md:ml-32 gap-5 w-full font-openSans">
              <button className="bg-[#69E6A6] text-[#0A2640] py-3 md:py-4  px-8 md:px-14 font-bold text-md md:text-xl rounded-full">
                InfluxSolarInc
              </button>
              <a href="#Contact">
                <button
                  className="bg-[#0A2640] text-white md:border-2 border-[1px] border-white py-3 md:py-4  px-8 md:px-14 font-bold text-md md:text-xl rounded-full
                         hover:text-[#0A2640] hover:bg-white duration-300 ease-linear"
                >
                  ContactUs
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div className="flex-1 z-10 hidden md:flex items-center justify-center">
            <img
              className="md:w-[493.86px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692886443/boldo/hero_graphics_dfka9j.png"
              alt="hero images"
            />
          </motion.div>
        </div>
        <div className="relative w-full">
          <div className=" bg-gradient-to-r  from-[#69E6A6]  z-20 h-16  w-[12rem] absolute top-16 left-[10%] " />
          <div className=" bg-gradient-to-l  from-[#69E6A6]  z-20 h-16  w-[12rem] absolute top-16 right-[10%] " />
          <div className="relative cursor-pointer flex gap-5 md:gap-10 w-[80%]  justify-center overflow-x-scroll scrollbar-hide items-center mx-auto py-20">
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_2_acefyt.png"
              alt="boldo"
            />
            <img
              className="w-28 md:w-[146.51px]"
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692889368/boldo/Logo_3_lcy6ta.png"
              alt="presto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
