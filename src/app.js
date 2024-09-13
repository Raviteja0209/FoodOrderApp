import React from "react";
import ReactDOM from "react-dom/client";
import HeaderLayout from "./components/HeaderLayout";
import BodyLayout from "./components/BodyLayout";

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
