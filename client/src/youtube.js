import axios from "axios";
import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env);
const key = "AIzaSyDObxykBym5CPBxtd68LdnfHV9KjJArlKk";
export const youtubeApiInstance = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        type: "playlist",
        maxResults: 20,
        key: key,
        order: "rating"
    },
});

export default youtubeApiInstance;