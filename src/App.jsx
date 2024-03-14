import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import { Toaster } from 'react-hot-toast';
import Home from './components/pages/Home';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster />
    </Router> 
    </>
  )
}

export default App
