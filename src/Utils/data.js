import hotel1 from "/src/Images/hotel1.jpg";
import hotel2 from "/src/Images/hotel2.jpg";
import hotel3 from "/src/Images/hotel3.jpg";
import hotel4 from "/src/Images/hotel4.jpg";
import hotel5 from "/src/Images/hotel5.jpg";
import hotel6 from "/src/Images/hotel6.jpg";
import hotel7 from "/src/Images/hotel7.jpg";
import hotel8 from "/src/Images/hotel8.jpg";

export const fetchInfo = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.335031&lng=78.4833637&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const response = await data.json();
    return restinfo;
}

const restinfo  =  [
    {
        "id" : 1,
        "restimg" : hotel1,
        "restname" : "Mehfil",
        "cuisine" : "Biryani,Chinese,Kebabs,Tandoor,Chandrayangutta",
        "rating" : "4.3",
        "deltime" : "25-30 mins"
    },
    {
        "id" : 2,
        "restimg" : hotel2,
        "restname" : "Hotel Rumaan",
        "cuisine" : "Hyderabadi,Biriyani,Charminar",
        "rating" : "3.5",
        "deltime" : "30-35 mins"
    },
    {
        "id" : 3,
        "restimg" : hotel3,
        "restname" : "Imperial Multicuisine",
        "cuisine" : "Biryani,Chinese,Kebabs,Tandoor,Chandrayangutta",
        "rating" : "4.3",
        "deltime" : "25-30 mins"
    },
    {
        "id" : 4,
        "restimg" : hotel4,
        "restname" : "Shah Ghouse Hotel & Restaurant",
        "cuisine" : "Biryani,Chinese,Kebabs,Tandoor,Chandrayangutta",
        "rating" : "4.3",
        "deltime" : "25-30 mins"
    },
    {
        "id" : 5,
        "restimg" : hotel5,
        "restname" : "Bawarchi",
        "cuisine" : "Biryani,Chinese,Kebabs,Tandoor,Chandrayangutta",
        "rating" : "4.3",
        "deltime" : "25-30 mins"
    },
    {
        "id" : 6,
        "restimg" : hotel6,
        "restname" : "Rumaan Restaurant",
        "cuisine" : "Biryani,Chinese,Kebabs,Tandoor,Chandrayangutta",
        "rating" : "3.8",
        "deltime" : "25-30 mins"
    },
    {
        "id" : 7,
        "restimg" : hotel7,
        "restname" : "Santosh Dhaba",
        "cuisine" : "Biryani,Chinese,Kebabs,Tandoor,Chandrayangutta",
        "rating" : "3.9",
        "deltime" : "25-30 mins"
    },
    {
        "id" : 8,
        "restimg" : hotel8,
        "restname" : "Shadaan Restaurant",
        "cuisine" : "Biryani,Chinese,Kebabs,Tandoor,Chandrayangutta",
        "rating" : "4.3",
        "deltime" : "25-30 mins"
    },
]

export default restinfo;