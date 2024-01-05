import { motion } from 'framer-motion';
const Growth = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="AboutUs"
      className="flex justify-center flex-col lg:flex-row items-center mt-14 lg:mt-0 gap-32 py-10  mx-10 lg:mx-32"
    >
      <div
        className="w-[100%] "
        id="AboutUs"
      >
        <h1 className=" mt-5 text-4xl font-bold text-center mb-9">About</h1>{' '}
        <div className="lg:w-[80%] flex flex-col mx-auto my-10 gap-10 items-center  lg:flex-row lg:justify-center">
          <div className="lg:w-[100%] ">
            {' '}
            <img
              className="lg:w-[500px] md:w-[300px]"
              src="https://res.cloudinary.com/dutvrzezk/image/upload/v1699753852/New_mike_zxyl37.jpg"
              alt="Michael"
            />
          </div>
          <div className="lg:w-[100%] lg:text-xl text-sm">
            <h1 className="mt-8">
              I am Michael Robert, the CEO of influxsolarinc. With a profound
              dedication to clean energy, I've devoted my career to advancing
              sustainable solutions to different companies across the world.
              This hands-on experience has shaped my commitment to providing
              cutting-edge solar solutions that prioritize quality and
              sustainability.
            </h1>
            <h1 className="mt-4">
              {' '}
              At influxsolarinc, we're passionate about harnessing the power of
              the sun to create a sustainable and cleaner future for generations
              to come. our company is dedicated to providing top-quality solar
              energy solutions to homes, businesses, and communities across the
              world.
            </h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Growth;
``;
