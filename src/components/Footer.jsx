const Footer = () => {
  return (
    <footer className="flex flex-col-reverse lg:flex-row  gap-12 lg:gap-36 mb-10 justify-evenly mx-10 lg:mx-20 lg:mr-48 py-20 ">
      <div className=" flex gap-9 lg:gap-16 font-openSans flex-col text-[#777777]">
        <div className="flex gap-10 flex-col">
          <img
            className="w-40"
            src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1692996001/boldo/Logo_4_xym5el.png"
          />
          <p className="">
            Your trusted partner for solar panel solutions. We're committed to
            providing sustainable and efficient energy options for your home or
            business.
          </p>
          <p className="text">
            <strong className="text-black"> Phone:</strong>
            <span> 631-660-8055</span>
            <br />
            <strong className="text-black font-bold">Email:</strong>
            <span>Influxsolarinc@gmail.com</span>
            <br />
            <strong className="text-black font-bold">Email:</strong>
            <span>Influxsolarinc@gmail.com</span> 
          </p>
        </div>
        <p>All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-5 lg:gap-10 text-xl font-openSans">
        <p className="font-bold ">Landings</p>
        <ul className="text-[#777777] flex flex-col gap-4 lg:gap-9">
          <a href="#Hero">
            {' '}
            <li>Home</li>
          </a>
          <a href="#AboutUs">
            {' '}
            <li>About</li>
          </a>
          <a href="Service">
            {' '}
            <li>Services</li>
          </a>
        </ul>
      </div>
      <div className="flex flex-col gap-5 lg:gap-10 items-start text-xl font-openSans">
        <p className="font-bold ">Company</p>
        <ul className="text-[#777777] flex flex-col gap-4 lg:gap-9">
          <a href="#Hero">
            {' '}
            <li>Home</li>{' '}
          </a>
          <li className="flex items-center justify-center gap-3">
            Careers{' '}
            <span className="bg-[#69E6A6] rounded-full text-[#0A2640]  px-3 text-[13px] font-bold">
              Hiring!
            </span>
          </li>
          <a href="#Service">
            {' '}
            <li>Services</li>
          </a>
        </ul>
      </div>
      <div className="flex flex-col gap-5 lg:gap-10 text-xl font-openSans">
        <p className="font-bold ">Resources</p>
        <ul className="text-[#777777] flex flex-col gap-4 lg:gap-9">
          <a href="#AboutUs">
            {' '}
            <li href="#Hero">Home</li>
          </a>
          <a href="#AboutUs">
            {' '}
            <li>About</li>
          </a>
          <a href="Service">
            {' '}
            <li>Services</li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
