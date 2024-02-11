import { parseString } from "xml2js";


export async function GET(req) {
    try {
        const mediumURL = "https://medium.com/feed/@amitsharma_42743";
        const response  = await fetch(mediumURL);
        const xmlData = await response.text();
        let result = [];
        parseString(xmlData, (err, res) => {
            if(err) {
                return new Response(JSON.stringify({
                    data: result,
                    success: false,
                    message: "Failed to parse the XML."
                })).status(400);
            }
            result = res?.rss?.channel || []
        })
        return new Response(JSON.stringify({
            data: result,
            success: true,
            message: "Your blogs are fetched"
        }));

    } catch (error) {
        return new Response(JSON.stringify({
            data: [],
            success: false,
            message: "Server Error!"
        }));
    }
}