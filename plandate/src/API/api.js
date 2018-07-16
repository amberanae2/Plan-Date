import axios from "axios";
import yelp from "yelp-fusion";

const apiKey = "aVEL4GenYMShZbmE63o2tBL3jJnGo3bSVyrN_RpQBUjjWkrgxjTp5Cz4pT39Q68h6ZgJ5eg_oXWgF45FUp2wfPDJ1c61Gl0DsWVFRyc5Ka3Ol81o207bBW5T8kZKW3Yx";

const searchRequest = {
    term: 'mexican',
    location: 'dallas, tx'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJSON);
}).catch(e => {
    console.log(e);
})