import restinfo from "../Utils/data";
import RestCont from "./RestCont";

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

  export default BodyLayout;