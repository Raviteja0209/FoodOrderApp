const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const restinfo = [];
export const fetchInfo = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3525114&lng=78.4773256&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const response = await data.json();
    let restaurants = response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    restaurants.map((restaurants) => (
        restinfo.push({
            "id" : restaurants.info.id,
            "restimg" : IMG_CDN_URL+restaurants.info.cloudinaryImageId,
            "restname" : restaurants.info.name,
            "cuisine" : restaurants.info.cuisines.join(","),
            "rating" : restaurants.info.avgRating,
            "deltime" : restaurants.info.sla.slaString
        })
    ))
    return restinfo;
}


export default restinfo;