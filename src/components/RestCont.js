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

  export default RestCont;