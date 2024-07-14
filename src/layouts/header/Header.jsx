import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={"./assets/images/logo.webp"} alt="Company Logo" className="logo" />
        <div className="link-div">
          <nav>
            <ul className="link-div">
              <li>
                <Link to="/signin">Signin</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Header;