import { useState, useEffect } from "react";

import logo from "../../assets/logo.svg";
import userIcon from "../../assets/user.svg";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className={`small-devices-nav ${navOpen ? "active" : ""}`}>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <nav className="container__left">
            <a className="container__left--logo" href="/">
              <figure>
                <img src={logo} alt="Silicon" />
                <h3>Silicon</h3>
              </figure>
            </a>
            <ul className="container__left--menu">
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <nav className="container__right">
            <label className="container__right--switch">
              <p>Dark mode</p>
              <figure
                className={`switcher ${isDark && "active"}`}
                onClick={toggleTheme}
              >
                <div className={isDark ? "dark" : ""}></div>
              </figure>
            </label>
            <button>
              <img src={userIcon} alt="user" /> Sign in / up
            </button>
            <figure
              id="hamburger-icon"
              onClick={() => setNavOpen(!navOpen)}
              className={navOpen ? "open" : ""}
            >
              <div></div>
              <div></div>
              <div></div>
            </figure>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
