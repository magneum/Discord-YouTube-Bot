console.clear();
const fs = require('fs');
require('dotenv').config()
const path = require('path');
YouTubeVar = process.env.YouTubeVar;
const ScrapeYt = require("scrape-yt");
const Discord = require("discord.js");
const ʏᴏᴜᴛᴜʙᴇ = new Discord.Client();
const { createWriteStream } = require("fs");
const YouTubeFeeder = require("discord-ytdl-core");



ʏᴏᴜᴛᴜʙᴇ.on("ready", () => {
    ʏᴏᴜᴛᴜʙᴇ.user.setActivity(`🔊 /yt`, { type: 'LISTENING' });
    console.log("\n========[ ʏᴏᴜᴛᴜʙᴇ ]========\n𝙳𝚒𝚜𝚌𝚘𝚛𝚍 𝙱𝚘𝚝 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 ! \nCheck Discord for: 🔊 /yt\n\n========[ ʏᴏᴜᴛᴜʙᴇ ]========");
});

ʏᴏᴜᴛᴜʙᴇ.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.startsWith("/yt")) {
        
        message.delete() 
        let args = message.content.split(' ').slice(1);
        if (!args[0]) return message.channel.send(`${message.author},\n========[ ʏᴏᴜᴛᴜʙᴇ ]========\n⚠️   𝘗𝘭𝘦𝘢𝘴𝘦 𝘦𝘯𝘵𝘦𝘳 𝘵𝘩𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 **𝘜𝘙𝘓** or **𝘕𝘢𝘮𝘦** 𝘰𝘧 𝘢 𝘴𝘰𝘯𝘨!\n\n**Example:** /yt URL or /yt Song_Name`);


        let infos;
        let stream;

        try {
            stream = YouTubeFeeder(args.join(" "),
                {
                    encoderArgs: ['-af', 'dynaudnorm=f=200'],
                    fmt: 'mp3', opusEncoded: false
                });
            infos = await ScrapeYt.search(args.join(" "));

        } catch (e) {
            message.channel.send(`${message.author},\n========[ ʏᴏᴜᴛᴜʙᴇ ]========\n⚠️   𝘐 𝘥𝘪𝘥𝘯'𝘵 𝘧𝘪𝘯𝘥 𝘢𝘯𝘺𝘵𝘩𝘪𝘯𝘨 𝘧𝘰𝘳: ${args.join(" ")} !`);
            return
        }
        try {
            // message.delete()
            message.channel.send(`${message.author},\n========[ ʏᴏᴜᴛᴜʙᴇ ]========\n🕐 𝘞𝘢𝘪𝘵 𝘛𝘪𝘭𝘭 𝘵𝘩𝘦 𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘪𝘴 𝘧𝘪𝘯𝘪𝘴𝘩𝘦𝘥...\n\n ${infos[0].title}`);

            stream.pipe(createWriteStream(__dirname + `/YouTube_Log/${infos[0].title}.mp3`)).on('finish', () => {
                try {
                    message.channel.send(`${message.author}, music : ${infos[0].title} in mp3.`,
                        new Discord.MessageAttachment(__dirname + `/YouTube_Log/${infos[0].title}.mp3`,
                            `${infos[0].title}.mp3`))
                } catch (e) {
                    return message.channel.send(`${message.author},\n========[ ʏᴏᴜᴛᴜʙᴇ ]========\n⚠️   𝘐 𝘥𝘪𝘥𝘯'𝘵 𝘮𝘢𝘯𝘢𝘨𝘦 𝘵𝘰 𝘴𝘦𝘯𝘥 𝘵𝘩𝘦 𝘮𝘶𝘴𝘪𝘤...\nᴍᴀʏʙᴇ ɪᴛ'ꜱ ᴛᴏᴏ ʜᴇᴀᴠʏ ꜰᴏʀ ᴅɪꜱᴄᴏʀᴅ? ᴏʀ ᴍᴀʏʙᴇ ɪ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜᴇ ʀᴇQᴜɪʀᴇᴅ ᴘᴇʀᴍɪꜱꜱɪᴏɴꜱ ᴛᴏ ᴜᴘʟᴏᴀᴅ ᴛʜɪꜱ ᴛʏᴘᴇ ᴏꜰ ꜰɪʟᴇ ᴏɴ ᴛʜɪꜱ ꜱᴇʀᴠᴇʀ...`);
                }

            })
        } catch (e) {
            return message.channel.send(`${message.author},\n========[ ʏᴏᴜᴛᴜʙᴇ ]========\n⚠️   𝘐 𝘥𝘪𝘥𝘯'𝘵 𝘧𝘪𝘯𝘥 𝘢𝘯𝘺𝘵𝘩𝘪𝘯𝘨 𝘧𝘰𝘳:\n${args.join(" ")}\n𝘔𝘢𝘺𝘣𝘦 𝘪𝘵 𝘪𝘴 𝘪𝘮𝘱𝘰𝘴𝘴𝘪𝘣𝘭𝘦 𝘵𝘰 𝘳𝘦𝘵𝘳𝘪𝘦𝘷𝘦 𝘵𝘩𝘪𝘴 𝘮𝘶𝘴𝘪𝘤...`);
        }
    }
});
ʏᴏᴜᴛᴜʙᴇ.login(YouTubeVar);