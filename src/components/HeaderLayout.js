import logo from "/src/Images/Logo.jpg";
import { useState } from "react";

const HeaderLayout = () => {
  const [btnlayout, setBtnLayout] = useState("Login");
  return (
    <div className="Header">
      <div>
        <img className="logo" alt="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="loginbtn"
            onClick={() => {
              btnlayout === "Login"
                ? setBtnLayout("Logout")
                : setBtnLayout("Login");
            }}
          >
            {btnlayout}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLayout;
