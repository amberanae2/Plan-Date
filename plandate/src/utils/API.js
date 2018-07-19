import axios from "axios";

const BASE_URL = "https://api.yelp.com/v3/businesses/search";


export default {
  restaurantSearch: function() {
    return axios.get(BASE_URL, {headers: { Authorization: 'Bearer ${YELP_API_KEY}'}})
  }
};
