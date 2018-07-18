import axios from "axios";

const BASE_URL = 'https://api.yelp.com/v3/businesses/search'

// Export an object containing methods we'll use for accessing the Dog.Ceo API
URL:
export default {
  yelpSearch: function() {
    return axios.get(BASE_URL, {headers: { Authorization: 'Bearer ${YELP_API_KEY}'}})
  }
//   restaurantList: function() {
//       return axios.get("https://api.yelp.com/v3/categories/restaurants" );
//   },
//   restaurantSearch: function(cuisine) {
//       return axios.get("https://api.yelp.com/v3/categories")
//   }
};
