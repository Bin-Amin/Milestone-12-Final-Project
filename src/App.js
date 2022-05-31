import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Appointment from './Pages/Appointment/Appointment';
import RequireAuth from './Pages/Login/RequireAuth';
import SingUp from './Pages/Login/SingUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SingUp />} />
        <Route path='appointment' element={<RequireAuth>
          <Appointment />
        </RequireAuth>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
