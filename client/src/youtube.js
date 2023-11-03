import axios from "axios";
import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env);
const key = "AIzaSyCqHotHqFvV211h6ev84Rw3egDf8SNWlGc";
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