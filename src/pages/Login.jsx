import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email === 'Influxsolarinc@gmail.com' && password === 'influxinc0010!') {
      // Successful login, navigate to the home page
      history('/home');
      setEmail('');
      setPassword('');
      setError('');
    } else {- 
      setError('Incorrect email or password');
    }
  }

  const bgImageStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dutvrzezk/image/upload/v1696377012/pexels-ki-media-9799757_tgiwyc.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };
  return (
    <div
      style={bgImageStyle}
      className=" flex items-center justify-center"
    >
      <div className=" max-w-[301px] w-[100%] mx-auto items-center justify-center flex flex-col ">
        <div className="  bg-white bg-opacity-30 flex gap-5 flex-col items-center justify-center px-9 lg:px1 lg:p-20 rounded">
          <h1 className="text-center text-[30px] mt-6 font-semibold lg:mb-2 mb-2">
            LOGIN
          </h1>

          <h1 className="font-bold text-3xl text-green-400">Influxsolarinc</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-7"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <input
                className="mb-4 border-2 flex justify-center items-center p-2 rounded-full  w-[100%] max-w-[200px] "
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="mb-4 border-2 flex justify-center items-center  p-2 rounded-full  w-[100%] max-w-[200px] px-[auto]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="items-center gap-3 flex flex-col justify-center ">
              <button className="bg-green-500 text-white px-[70px] py-[8px] rounded-full">
                Submit
              </button>
              {error && <p className="text-red-500">{error}</p>}
              <button>
                <h1 className="text-sm lg:mb-2 font-bold  mb-6">
                  Forget password?
                </h1>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
