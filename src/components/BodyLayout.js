import restinfo from "/src/utils/data";
import RestCont from "./RestCont";
import { useState } from "react";

const BodyLayout = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(restinfo);
  return (
    <div className="bodylayout">
      <div className="searchspace">
        <input
          className="searchinput"
          type="text"
          name="SearchVal"
          value="  Search here...."
        />
        <button
          className="filterbtn"
          onClick={() => {
            let filterdata = listOfRestaurents.filter(
              (ele) => Number(ele.rating) > 4
            );
            setListOfRestaurents(filterdata);
          }}
        >
          Filter top Restaurents
        </button>
        <button className="filterbtn" onClick={() => {
          setListOfRestaurents(restinfo)
        }}>Reset</button>
      </div>
      <div className="restaurentcont">
        {listOfRestaurents.map((restuarant) => (
          <RestCont key={restuarant.id} restprop={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default BodyLayout;
