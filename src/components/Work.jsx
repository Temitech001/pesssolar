import data from '../MockData/data';
import { motion } from 'framer-motion';

const Work = () => {
  // projects file
  //setProject(data);

  return (
    <div
      id="Work"
      name="work"
      className="w-full md:h-screen text-black bg-white "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" flex flex-col  items-center">
          <p className="text-4xl  font-bold inline border-b-4 text-black border-black">
            Work
          </p>
          <p className="text-black py-6">Check out some of our recent works</p>
        </div>

        {/* container for projects */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        >
          {/* Gird Item */}
          {data.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="group container  
              flex justify-center text-center items-center mx-auto content-div "
            >
              <img
                loading="lazy"
                src={item.image}
                alt="ime"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
