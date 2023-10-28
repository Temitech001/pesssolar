import { services } from '../MockData/data';

import { motion } from 'framer-motion';

const Ourservices = () => {
  return (
    <div id="Service" className="bg-white h-full py-20 mb-12">
      <div className="flex flex-col items-center gap-5 lg:gap-1 justify-center mb-20 ">
        <p className="font-openSans text-3xl font-bold  text-black">
          Our Services
        </p>
        <p className="font-manrope text-[28px] leading-7 lg:text-5xl  lg:leading-[72px] px-[23px] lg:px-40 text-center">
          <strong> Empowering Your Energy Future:</strong> Our Solar Panel
          Engineering Expertise.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col lg:flex-row md:items-start lg:items-center items-center gap-20 lg:gap-0 justify-center px-16 "
      >
        {services.map((card) => (
          <div className="flex flex-col  md:gap-10 w-fit  " key={card.id}>
            <div className="flex items-center lg:justify-center md:justify-start justify-center ">
              <img className="w-[18rem] " src={card.imgLink} />
            </div>

            <div className="flex font-openSans flex-col items-start lg:ml-14 gap-5 my-5">
              <h4 className="text-2xl text-st">{card.title}</h4>
              <p className="text-xl lg:pr-20 text-star text-[#777777]">
                {card.description.map((item) => (
                  <li>{item}</li>
                ))}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ourservices;
