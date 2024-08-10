import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignInClick = () => {
    navigate('/sign'); // Redirect to /sign route
  };

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to /login route
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Update authentication state
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <>
      <nav>
        <div className="logo">LAXWANI RESTAURANT</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="menuBtn">
              Log Out
            </button>
          ) : ( 
            <div className="auth-buttons">
              <button onClick={handleSignInClick} className="menuBtn">
                Sign Up
              </button>
              <button onClick={handleLoginClick} className="menuBtn">
                Log In
              </button>
            </div>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
