import youtubeApiInstance from "./youtube.js";

youtubeApiInstance.get("/search", {
    params: {
        q: "javascript"
    }
}).then(({ data }) => {
    console.log(data);
}).catch(e => {
    console.error(e);
})