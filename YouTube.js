// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
`
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
                        GNU GENERAL PUBLIC LICENSE 
                            Version 3, 29 June 2007
                Copyright (C) 2007 Free Software Foundation
            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                        ••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <•• 
                    Discord YouTube Downloader Bot 
            has been licensed under GNU General Public License
        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
`
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
console.clear();
require('dotenv').config()
const ʙᴏᴛꜰɪx = process.env.BotFix;
const ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ = process.env.YouTubeFix;
const ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver = require('./server');
const Discord = require("discord.js");
const ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ = new Discord.Client();
const ᴠᴏɪᴅᴅᴡɴ = require("discord-ytdl-core");
const { createWriteStream } = require("fs");
const { Client } = require("youtubei");
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
`
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
                        GNU GENERAL PUBLIC LICENSE 
                            Version 3, 29 June 2007
                Copyright (C) 2007 Free Software Foundation
            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                        ••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <•• 
                    Discord YouTube Downloader Bot 
            has been licensed under GNU General Public License
        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
`
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
const ᴠᴏɪᴅɪᴄ = new Client();
console.clear();
const ʏᴏᴜʟɪꜱᴛᴘᴀᴛᴛᴇʀɴ = /^.*(list=)([^#\&\?]*).*/gi;
const ʏᴏᴜɢᴇᴛᴘᴀᴛᴛᴇʀɴ = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
`
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
                        GNU GENERAL PUBLIC LICENSE 
                            Version 3, 29 June 2007
                Copyright (C) 2007 Free Software Foundation
            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                        ••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <•• 
                    Discord YouTube Downloader Bot 
            has been licensed under GNU General Public License
        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
`
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
if (ʙᴏᴛꜰɪx === undefined) {
    console.log('>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <\n\nPrefix is undefined')
    return;
}
if (ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ === undefined) {
    console.log('>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <\n\nYouTubeTok is undefined')
    return;
}
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
`
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
                        GNU GENERAL PUBLIC LICENSE 
                            Version 3, 29 June 2007
                Copyright (C) 2007 Free Software Foundation
            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                        ••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <•• 
                    Discord YouTube Downloader Bot 
            has been licensed under GNU General Public License
        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
`
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on("ready", () => {
    console.clear();
    ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.user.setActivity(`${ʙᴏᴛꜰɪx}yt ⭕️`,
        { type: 'WATCHING' });
    console.log(`
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••
|
|⭕️••  Bot_Status : 𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 ! 
|⭕️••  Check Discord for: 🔊 ${ʙᴏᴛꜰɪx}yt   
|
𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 |>••••••••••••••••••••••••••`
    );
});
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
`
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
                        GNU GENERAL PUBLIC LICENSE 
                            Version 3, 29 June 2007
                Copyright (C) 2007 Free Software Foundation
            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                        ••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <•• 
                    Discord YouTube Downloader Bot 
            has been licensed under GNU General Public License
        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
`
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on("message", async message => {
    if (message.author.bot)
        return;
    try {
        message.delete()
    }
    catch (err) {
        console.error(err)
    }
    if (message.content.startsWith(ʙᴏᴛꜰɪx + "yt")) {
        let ᴀʀɢꜱ = message.content.split(' ').slice(1);
        if (!message.content.startsWith(ʙᴏᴛꜰɪx + "yt") && ʏᴏᴜɢᴇᴛᴘᴀᴛᴛᴇʀɴ.test(ᴀʀɢꜱ[0])) {
            const embed1 = new Discord.MessageEmbed()
                .setColor(10038562)
                .setTitle(">   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <")
                .setAuthor("HypeVoidSoul")
                .setDescription(`${message.author}\n\n
**• ⚠️WARNING⚠️** 
Please use **${ʙᴏᴛꜰɪx}yt YouTube Url**
`)
                .setImage("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setThumbnail("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setFooter("••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <••", "https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                
            message.channel.send(embed1).catch(console.error);
            return;
        }
        if (ʏᴏᴜʟɪꜱᴛᴘᴀᴛᴛᴇʀɴ.test(ᴀʀɢꜱ[0])) {
            const embed2 = new Discord.MessageEmbed()
                .setColor(10038562)
                .setTitle(">   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <")
                .setAuthor("HypeVoidSoul")
                .setDescription(`${message.author}\n\n
**• ⚠️WARNING⚠️** 
Please send **YouTube   _Single/Non-Playlist_   Urls Only**
`)
                .setImage("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setThumbnail("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setFooter("••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <••", "https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                
            message.channel.send(embed2).catch(console.error);
            return;
        }
        if (!ᴀʀɢꜱ[0]) {
            const embed3 = new Discord.MessageEmbed()
                .setColor(10038562)
                .setTitle(">   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <")
                .setAuthor("HypeVoidSoul")
                .setDescription(`${message.author}\n\n
**• ⚠️WARNING⚠️** 
Please enter the **YouTube URL** of a song !

**• EX =** ${ʙᴏᴛꜰɪx}yt https://www.youtube\.com
`)
                .setImage("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setThumbnail("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setFooter("••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <••", "https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                
            message.channel.send(embed3).catch(console.error);
            return;
        }

        let ʏᴏᴜᴛᴀᴋᴇʀ;
        let ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ;
        try {
            ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ = ᴠᴏɪᴅᴅᴡɴ(ᴀʀɢꜱ.join(" "), {
                encoderArgs: ['-af', 'dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false
            });
            ʏᴏᴜᴛᴀᴋᴇʀ = await ᴠᴏɪᴅɪᴄ.search(ᴀʀɢꜱ.join(" "));
        } catch (e) {
            const embed4 = new Discord.MessageEmbed()
                .setColor(10038562)
                .setTitle(">   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <")
                .setAuthor("HypeVoidSoul")
                .setDescription(`${message.author}\n\n
**• ⚠️WARNING⚠️**
I didn't find anything for: **${ᴀʀɢꜱ.join(" ")}**
`)
                .setImage("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setThumbnail("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setFooter("••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <••", "https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                
            message.channel.send(embed4).catch(console.error);
            return;
        }
        try {
            const embed5 = new Discord.MessageEmbed()
                .setColor(10038562)
                .setTitle(">   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <")
                .setAuthor("HypeVoidSoul")
                .setDescription(`${message.author}\n\n
•:shaved_ice:**SongTitle**:shaved_ice:•
_${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}_

•:chains:**SongUrl**:chains:•
_${ᴀʀɢꜱ}_

Please Wait till 𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰 finishes downloading...
`)
                .setImage("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setThumbnail("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                .setFooter("••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <••", "https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                
            message.channel.send(embed5).catch(console.error);
            ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ.pipe(createWriteStream(__dirname + `/YTubeTemp/${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`)).on('finish', () => {
                try {
                    try {
                        message.delete()
                    } catch (e) {
                        console.log(e)
                    }
                    const embed6 = new Discord.MessageEmbed()
                        .setColor(10038562)
                        .setTitle(">   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <")
                        .setAuthor("HypeVoidSoul")
                        .setDescription(`${message.author}\n\n
•:shaved_ice:**SongTitle**:shaved_ice:•
_${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}_

•:chains:**SongUrl**:chains:•
_${ᴀʀɢꜱ}_
`)
                        .setImage("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                        .setThumbnail("https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                        .setFooter("••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <••", "https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png")
                        
                    message.channel.send(embed6).catch(console.error);
                    message.channel.send(new Discord.MessageAttachment(__dirname + `/YTubeTemp/${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`, `${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`)
                    )
                } catch (e) {
                    return message.channel.send(`${message.author}\n\n\n
**• 🔥ERROR:** 
I didn't manage to send the music... 

Maybe it's too heavy for Discord ? 
Or 
Maybe I don't have the required permissions to upload this type of file on this server...`).catch(console.error);
                }
            })
        } catch (e) {
            return message.channel.send(`${message.author}\n\n\n
**• 🔥ERROR:**
I didn't find anything for : **${ᴀʀɢꜱ.join(" ")}**

Maybe it is impossible to retrieve this music...`).catch(console.error);
        }
    }
});
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================
`
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
                        GNU GENERAL PUBLIC LICENSE 
                            Version 3, 29 June 2007
                Copyright (C) 2007 Free Software Foundation
            Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
                of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
                        ••>   𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰   <•• 
                    Discord YouTube Downloader Bot 
            has been licensed under GNU General Public License
        𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕➕
`
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver()
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.login(ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ).catch(console.error);
// ===========================================𝗬𝗼𝘂𝗧𝘂𝗯𝗲⭕️𝗠𝘂𝘀𝗶𝗰==================================================