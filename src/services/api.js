import axios from "axios"

const BASE_URL = `https://www.googleapis.com/youtube/v3`
const API = axios.create({
    baseURL: BASE_URL,
});

// API.interceptors.request.use((req) => {
//     if (Cookies.get("token")) {
//         req.headers["token"] = `${Cookies.get("token")}`;
//     }
//     return req;
// });

// API.interceptors.response.use(
//     (res) => res,
//     async (error) => {
//         console.log(error);
//     }
// );


export function getChannelsVideos(order = "date", maxResult = 20, type = "video") {
    return API.get(`search?key=${process.env.NEXT_PUBLIC_GOOGLE_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=${order}&maxResults=${maxResult}&type=${type}`)
}

export function getChannelsPlaylist(order = "date", maxResult = 20, type = "playlist") {
    return API.get(`/playlists?key=${process.env.NEXT_PUBLIC_GOOGLE_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=${order}&maxResults=${maxResult}&type=${type}`)
}

