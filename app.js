import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/Logo.jpg";
import { restinfo } from "./data";

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
        {restinfo.map((restuarant) => (
          <RestCont key={restuarant.id} restprop={restuarant} />
        ))}
      </div>
    </div>
  );
};

const RestCont = (props) => {
  const { restprop } = props;
  const { restimg, restname, cuisine, rating, deltime } = restprop;
  return (
    <div className="restdiv">
      <img className="restimg" src={restimg} />
      <h4 className="displayprop">{restname}</h4>
      <h5 className="displayprop">{cuisine}</h5>
      <h6>
        {rating} {deltime}
      </h6>
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
