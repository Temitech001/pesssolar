import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/Home"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
