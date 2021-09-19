// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
console.clear();
require('dotenv').config()
ʙᴏᴛꜰɪx = process.env.BotFix;
ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ = process.env.YouTubeFix;
const Discord = require("discord.js");
const ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ = new Discord.Client();
const ᴠᴏɪᴅᴅᴡɴ = require("discord-ytdl-core");
const { createWriteStream } = require("fs");
const { Client } = require("youtubei");
const ᴠᴏɪᴅɪᴄ = new Client();
console.clear();
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
if (ʙᴏᴛꜰɪx === undefined) {
    console.log('|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================\n\nPrefix is undefined')
    return
}
if (ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ === undefined) {
    console.log('|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================\n\nYouTubeTok is undefined')
    return
}
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on("ready",
    () => {
        ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.user.setActivity(`${ʙᴏᴛꜰɪx}yt ⭕️`,
            { type: 'WATCHING' });
        console.log(`
|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================
|
|⭕️••  Bot_Status : 𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 ! 
|⭕️••  Check Discord for: 🔊 ${ʙᴏᴛꜰɪx}yt   
|
|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================`
        );
    });
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on("message",
    async message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(ʙᴏᴛꜰɪx + "yt https://www.youtu")) {
            return message.channel.send(`Please use **${ʙᴏᴛꜰɪx}yt YouTube Url**`);
        }
        if (message.content.startsWith(ʙᴏᴛꜰɪx + "yt https://www.youtu")) {
            let args = message.content.split(' ').slice(1);
            if (!args[0]) return message.channel.send(`${message.author}
|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================

**• Warning:** Please enter the **YouTube URL** of a song !
**• Ex:** ${ʙᴏᴛꜰɪx}yt https://www.youtu`);
            let YouTaker;
            let YouStreamer;
            try {
                YouStreamer = ᴠᴏɪᴅᴅᴡɴ(args.join(" "), {
                    encoderArgs: ['-af', 'dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false
                });
                YouTaker = await ᴠᴏɪᴅɪᴄ.search(args.join(" "));
            } catch (e) {
                return message.channel.send(`${message.author}
|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================

**• Warning:** I didn't find anything for: **${args.join(" ")}**`);
            }
            try {
                message.channel.send(`${message.author}
|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================

Please Wait till **${YouTaker[0].title}** is finished downloading...`);
                YouStreamer.pipe(createWriteStream(__dirname + `/YTubeTemp/${YouTaker[0].title}.mp3`)).on('finish', () => {
                    try {
                        message.channel.send(`|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================
🍧**Title:** ${YouTaker[0].title}`,
                            new Discord.MessageAttachment(__dirname + `/YTubeTemp/${YouTaker[0].title}.mp3`, `${YouTaker[0].title}.mp3`)
                        )
                    } catch (e) {
                        return message.channel.send(`${message.author}
|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================

**• Error:** 
I didn't manage to send the music... 

Maybe it's too heavy for Discord ? 
Or 
Maybe I don't have the required permissions to upload this type of file on this server...`);
                    }
                })
            } catch (e) {
                return message.channel.send(`${message.author}
|𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰⭕️|>===============================

**• Error:**
I didn't find anything for : **${args.join(" ")}**

Maybe it is impossible to retrieve this music...`);
            }
        }
    });
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.login(ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ);
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================