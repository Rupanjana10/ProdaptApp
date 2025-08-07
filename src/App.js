import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Dashboard from './components/dashboard';
import Login from './components/Login';
import Signup from './components/Singup';
import ContactUs from './components/Contactus';
import Gallery from './components/Gallery';



function App() 
{
  return (
    <div className="App">
      
      <BrowserRouter>

      <Home />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
