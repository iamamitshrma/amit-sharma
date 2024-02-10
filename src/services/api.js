const BASE_URL = `https://www.googleapis.com/youtube/v3`


export async function getChannelsVideos(order = "date", maxResult = 20, type = "video") {
    const res = await fetch(`${BASE_URL}/search?key=${process.env.NEXT_PUBLIC_GOOGLE_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=${order}&maxResults=${maxResult}&type=${type}`)
    if(!res.ok) {
        throw new  Error("Failed to fetch youtube videos");
    }
    return res.json();
}

export async function getChannelsPlaylist(order = "date", maxResult = 20, type = "playlist") {
    const res = await fetch(`${BASE_URL}/playlists?key=${process.env.NEXT_PUBLIC_GOOGLE_YT_API_KEY}&channelId=${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}&part=snippet,id&order=${order}&maxResults=${maxResult}&type=${type}`)
    if(!res.ok) {
        throw new  Error("Failed to fetch youtube playlist");
    }
    return res.json();
}
