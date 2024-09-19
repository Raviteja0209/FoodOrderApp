import restinfo from "/src/utils/data";
import RestCont from "./RestCont";
import { useEffect, useState } from "react";
import { fetchInfo } from "/src/utils/data";
import ShimmerLayout from "./shimmer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Notification = () => {
  return <div className="notification">No Data Available.</div>;
};



const BodyLayout = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [restdata, setRestdata] = useState([]);
  const [searchval, setSearchVal] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataload = await fetchInfo();
        setListOfRestaurents(dataload);
        setRestdata(dataload);
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
          value={searchval}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <button
          className="searchicon"
          onClick={() => {
            if (!!searchval) {
              let filterdata = restdata.filter((ele) =>
                ele.restname.toLowerCase().includes(searchval.toLowerCase())
              );
              if (filterdata.length > 0) {
                setListOfRestaurents(filterdata);
              } else {
                <Notification />;
              }
            } else {
            }
          }}
        >
          <i className="fas fa-search"></i>
        </button>
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
            setSearchVal("");
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
