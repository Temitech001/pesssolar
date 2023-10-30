import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email === 'Influxsolarinc@gmail.com' && password === 'baldman111') {
      // Successful login, navigate to the home page
      history('/home');
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Incorrect email or password');
    }
  }

  return (
    <div className="relative">
      <div className=" w-fit  text-black absolute z-0 top-[-05rem] right-[-01rem] bg-slate-100 lg:mt-[69px] flex gap-5 flex-col items-center justify-center px-6 lg:px1 lg:p-10 rounded">
        <h1 className="text-center text-[30px] mt-3 font-semibold   mb-2">
          Admin/staff Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <input
              className="mb-4 border-2 flex justify-center text-black items-center p-2 rounded-full  w-[100%] max-w-[200px] "
              type="email"
              name="email"
              placeholder="Admin/staff username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="mb-4 border-2 text-black flex justify-center items-center  p-2 rounded-full  w-[100%] max-w-[200px] px-[auto]"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="items-center gap-3 flex flex-col justify-center ">
            <button className="bg-green-500 px-[70px] py-[8px] rounded-full">
              Submit
            </button>
            {error && <p className="text-red-500">{error}</p>}
            <button>
              {' '}
              <h1 className="text-sm text-black  mb-6">Forget password</h1>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dropdown;
