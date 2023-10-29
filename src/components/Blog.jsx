import { blogPost } from '../MockData/data';
import { blogPost2 } from '../MockData/data';
import { blogPost3 } from '../MockData/data';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:px-32 px-10 h-full py-20"
    >
      <div className="flex flex-col gap-5 mb-20 items-center justify-center">
        <p className=" font-openSans font-bold text-3xl text-red-600">
          Our Latest News
        </p>
        <h3 className=" font-manrope text-center text-1xl lg:text-2xl">
          Our Top stories and recent development
        </h3>
      </div>
      <div className="gap-7 flex flex-col">
        <div className="flex flex-col items-center justify-center gap-24">
          <div className="flex flex-col lg:flex-row gap-12 px-10">
            {blogPost.map((card) => (
              <div
                className="flex flex-col  gap-5 font-openSans"
                key={card.id}
              >
                <img
                  loading="lazy"
                  className="w-[200px]"
                  src={card.mainImage}
                />
                <div className="flex flex-col  h-full gap-5">
                  <div className="flex gap-3">
                    <p className="font-bold text-[#0A2640] ">{card.category}</p>
                    <p className=" text-[#777777]">{card.date}</p>
                  </div>
                  <h5 className="text-xl   leading-[32px] ">
                    {card.description}
                  </h5>
                </div>
                <div className="flex items-center gap-5 ">
                  <img
                    loading="lazy"
                    className="w-8"
                    src={card.imgLink}
                  />
                  <p className="">{card.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="border-[#0A2640] text-[#0A2640] border-2 bg-white py-4 px-10 lg:px-14 font-bold
           text-xl rounded-full"
          >
            Load more
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-24">
          <div className="flex flex-col lg:flex-row gap-12 px-10">
            {blogPost3.map((card) => (
              <div
                className="flex flex-col  gap-5 font-openSans"
                key={card.id}
              >
                <img
                  loading="lazy"
                  className="w-[200px]"
                  src={card.mainImage}
                />
                <div className="flex flex-col  h-full gap-5">
                  <div className="flex gap-3">
                    <p className="font-bold text-[#0A2640] ">{card.category}</p>
                    <p className=" text-[#777777]">{card.date}</p>
                  </div>
                  <h5 className="text-xl font-bold   leading-[32px] ">
                    {card.description}
                  </h5>
                </div>
                <div className="flex items-center gap-5 ">
                  <img
                    loading="lazy"
                    className="w-8"
                    src={card.imgLink}
                  />
                  <p className="">{card.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="border-[#0A2640] text-[#0A2640] border-2 bg-white py-4 px-10 lg:px-14 font-bold
           text-xl rounded-full"
          >
            Load more
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-24">
          <div className="flex flex-col lg:flex-row gap-12 px-10">
            {blogPost2.map((card) => (
              <div
                className="flex flex-col  gap-5 font-openSans"
                key={card.id}
              >
                <img
                  className="w-[200px]"
                  src={card.mainImage}
                />
                <div className="flex flex-col  h-full gap-5">
                  <div className="flex gap-3">
                    <p className="font-bold text-[#0A2640] ">{card.category}</p>
                    <p className=" text-[#777777]">{card.date}</p>
                  </div>
                  <h5 className="text-xl font-bold   leading-[32px] ">
                    {card.description}
                  </h5>
                </div>
                <div className="flex items-center gap-5 ">
                  <img
                    className="w-8"
                    src={card.imgLink}
                  />
                  <p className="">{card.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
