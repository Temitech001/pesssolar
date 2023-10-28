import tick from '../assets/Group 210.png';
const Stats = () => {
  return (
    <div className="flex justify-center flex-col  lg:flex-row items-center gap-16 lg:gap-32 py-10 mx-10 lg:mx-32">
      <div className="w-[100%]">
        <img
          className=" lg:w-[100%] w-[100%] object-cover rounded"
          src="https://res.cloudinary.com/dutvrzezk/image/upload/v1698414943/js2_pgqe2t.jpg"
          alt="man"
        />
      </div>
      <div className="w-[100%] flex flex-col items-center lg:items-start gap-14 lg:gap-10 ">
        <h2 className=" font-manrope text-3xl leading-8 lg:text-4xl lg:leading-[56px]">
          "We establish connections for our customers with top-tier solar
          solutions, supporting their continuous operation and uninterrupted
          access."
        </h2>
        <ul className=" font-openSans text-xl space-y-5 lg:space-y-0 leading-8 lg:leading-[56px]">
          <li className="flex lg:items-center items-start">
            <img className="lg:w-9 mt-2 w-6 mr-6" src={tick} /> We Provide the
            best Service Solution.
          </li>
          <li className="flex lg:items-center items-start">
            <img className="lg:w-9 mt-2 w-6 mr-6" src={tick} />
            Proper manual and guide for all Service.
          </li>
          <li className="flex lg:items-center items-start">
            <img className="lg:w-9 mt-2 w-6 mr-6" src={tick} />
            Professional service for all project
          </li>
        </ul>
        <button className="rounded-full bg-[#0A2640] px-16 w-fit text-lg py-5 font-openSans text-white font-bold">
          InfluxSolarInc
        </button>
      </div>
    </div>
  );
};

export default Stats;
