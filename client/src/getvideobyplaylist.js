const API_KEY = "AIzaSyCqHotHqFvV211h6ev84Rw3egDf8SNWlGc";
const _URL = "https://www.googleapis.com/youtube/v3/playlistItems";
var result = [];
var nextPageToken;

const getVideos = async (playlistID) => {
  const options = {
    part: "snippet",
    key: API_KEY,
    maxResults: 50,
    playlistId: playlistID,
  };
  const url = getFetchUrl(options);
  console.log(url);
  let data = await (await fetch(url)).json();
  const totalVideos = data.pageInfo.totalResults;
  result = data.items;
  nextPageToken = data.nextPageToken;

  while (true) {
    if (result.length === totalVideos) {
      break;
    }
    const returnedArr = await getMoreVideos(options, nextPageToken);
    if (returnedArr.length === result.length) {
      break;
    } else {
      result = returnedArr;
    }
  }
  return result;
};

const getMoreVideos = async (options, pageToken) => {
  const newOptions = { ...options, pageToken };
  const url = getFetchUrl(newOptions);
  const data = await (await fetch(url)).json();
  console.log(data,"--");
  nextPageToken = data.nextPageToken;
  return [...result, ...data.items];
};

const getFetchUrl = (options) => {
  var url = new URL(_URL),
    params = options;
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return url;
};

// const ress=await getVideos("PLC3y8-rFHvwiRYB4-HHKHblh3_bQNJTMa")
// console.log(ress[34].snippet.resourceId.videoId);


export default getVideos;