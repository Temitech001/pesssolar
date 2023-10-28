const Newsletter = () => {
  return (
    <div id="Contact" className="py-20  px-5 lg:px-20">
      <div className="relative bg-[#0A2640] rounded-xl overflow-clip px-1 lg:px-48 py-8 lg:py-20 gap-10 flex flex-col items-center justify-center">
        <img
          className="absolute  w-[800px] top-[-0rem] right-[-3rem] "
          src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692994342/boldo/Ellipse_9_jlncxz.png"
        />

        <div className="flex flex-col px-5 lg:flex-row items-center justify-center gap-8">
          <form className="flex flex-col items-center  max-w-[600px] w-full md:z-40">
            <div className="mb-14 text-center mt-14 md:z-40">
              <p className=" text-4xl text-center font-bold  inline border-b-4 border-black text-white z-10">
                Contact
              </p>
            </div>
            <input
              className="bg-[#ccd6f6] w-[280px] p-2"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 bg-[#ccd6f6] w-[280px] "
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-[#ccd6f6] p-2 w-[270px flex w-[280px]  h-[100px] "
              name="message"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="text-white bg-orange-500 px-8 py-3 my-6 mx-auto flex items-center">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
