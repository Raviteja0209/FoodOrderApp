import restinfo from "/src/utils/data";
import RestCont from "./RestCont";
import { useEffect, useState } from "react";
import { fetchInfo } from "/src/utils/data";
import ShimmerLayout from "./shimmer";

const BodyLayout = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataload = await fetchInfo();
        setListOfRestaurents(dataload);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return listOfRestaurents.length === 0 ? (
    <ShimmerLayout />
  ) : (
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
        <button
          className="filterbtn"
          onClick={() => {
            setListOfRestaurents(restinfo);
          }}
        >
          Reset
        </button>
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
