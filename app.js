import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/Logo.jpg";

const HeaderLayout = () => {
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
        </ul>
      </div>
    </div>
  );
};

const BodyLayout = () => {
  return (
    <div className="bodylayout">
      <div className="searchspace">
        <input
          className="searchinput"
          type="text"
          name="SearchVal"
          value="  Search here...."
        />
      </div>
      <div className="restaurentcont">
        <RestCont />
        <RestCont />
        <RestCont />
        <RestCont />
        <RestCont />
        <RestCont />
      </div>
    </div>
  );
};

const RestCont = () => {
  return (
    <div className="restdiv">
      <img
        className="restimg"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/6/29/4210a054-9608-4840-b00f-0aaf9a5bd332_1bf1f7a4-c59f-42b0-b2b8-9ac8615cbcc7.JPG"
      />
      <h4>Champaran Handi Restaurant</h4>
      <h5>Asian-Chinese-Russian</h5>
      <h6>4.5 55min-75min</h6>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="applayout">
      <HeaderLayout />
      <BodyLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
