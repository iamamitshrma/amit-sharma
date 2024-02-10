
import { createNodeMailConnection, sendNodmailEmail } from "../utils/utils";

export async function POST(req) {
    const data = await req.json();
    try {
        console.log(data)
        createNodeMailConnection();
        const info = sendNodmailEmail(data);
        if(info) {
            return new Response(JSON.stringify({
                response: info,
                success: true,
                message: "Mail Sent"
            }));
        }else {
            return new Response(JSON.stringify({
                success: false,
                message: "Mail not Sent"
            }));
        }
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            message: "Mail not Sent"
        }));
    }
}