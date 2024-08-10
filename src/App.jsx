import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Menu from './components/Menu';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/sign"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path='/login' element={<Login />} />

          <Route path='/menu' element={<Menu />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
