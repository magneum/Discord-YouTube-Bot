// ===========================================YouTube🔺Downloader==================================================
const express = require('express');
const server = express();
console.clear();
require('dotenv').config()
const ʙᴏᴛꜰɪx = process.env.BotFix;
const ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ = process.env.YouTubeFix;
// ===========================================YouTube🔺Downloader==================================================
server.all('/', (req, res)=>{
    res.send(`Your bot is Ready!

YouTube🔺Downloader |>••••••••••••••••••••••••••
|
|🔺••  Bot_Status : 𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 !
|🔺••  Check Discord for: 🔊 ${ʙᴏᴛꜰɪx}yt   
|
YouTube🔺Downloader |>••••••••••••••••••••••••••`)
})
function ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver(){
    server.listen(3000, ()=>{console.log(`Server is Ready!`)});
}
module.exports = ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver;
// ===========================================YouTube🔺Downloader==================================================
