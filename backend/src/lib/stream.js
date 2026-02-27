import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_KEY
const apiSecret = process.env.STEAM_API_SECRET

if(!apiKey || !apiSecret){
    console.log("Stream Api Key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async (userData)=>{
    try {
        await streamClient.upsertUsers([userData]);
        return userData
    } catch (error) {
        console.error("Error Upserting Stream user",error);
    }
};

export const generateStreamToken = (userId)=>{
    try {
        const userIdstr = userId.toString();
        return streamClient.createToken(userIdstr);
    } catch (error) {
        console.log("Error generating Stream Token",error);
    }
};