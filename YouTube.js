// ===========================================•YouTube🔺Downloader ©️•==================================================
//                 GNU GENERAL PUBLIC LICENSE
//                     Version 3, 29 June 2007
//         Copyright (C) 2007 Free Software Foundation
//     Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
//         of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//                 ----> •YouTube🔺Downloader ©️• <----
//             Discord YouTube Downloader Bot
//     has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// ===========================================•YouTube🔺Downloader ©️•==================================================
console.clear();
require(`dotenv`).config();
const ʙᴏᴛꜰɪx = process.env.BotFix;
const ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ = process.env.YouTubeFix;
const { Client } = require(`youtubei`);
const Discord = require(`discord.js`);
const ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ = new Discord.Client();
const ᴠᴏɪᴅᴅᴡɴ = require(`discord-ytdl-core`);
const { createWriteStream } = require(`fs`);
const ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver = require(`./server`);
const ᴠᴏɪᴅɪᴄ = new Client();
const ʏᴏᴜʟɪꜱᴛᴘᴀᴛᴛᴇʀɴ = /^.*(list=)([^#\&\?]*).*/gi;
const ʏᴏᴜɢᴇᴛᴘᴀᴛᴛᴇʀɴ = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
// ===========================================•YouTube🔺Downloader ©️•==================================================
//                 GNU GENERAL PUBLIC LICENSE
//                     Version 3, 29 June 2007
//         Copyright (C) 2007 Free Software Foundation
//     Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
//         of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//                 ----> •YouTube🔺Downloader ©️• <----
//             Discord YouTube Downloader Bot
//     has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// ===========================================•YouTube🔺Downloader ©️•==================================================
if (ʙᴏᴛꜰɪx === undefined) {
	console.log(`----> •YouTube🔺Downloader ©️• <----\n\nPrefix is undefined`);
	return;
}
if (ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ === undefined) {
	console.log(`----> •YouTube🔺Downloader ©️• <----\n\nYouTubeTok is undefined`);
	return;
}
// ===========================================•YouTube🔺Downloader ©️•==================================================
//                 GNU GENERAL PUBLIC LICENSE
//                     Version 3, 29 June 2007
//         Copyright (C) 2007 Free Software Foundation
//     Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
//         of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//                 ----> •YouTube🔺Downloader ©️• <----
//             Discord YouTube Downloader Bot
//     has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// ===========================================•YouTube🔺Downloader ©️•==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on(`ready`, () => {
	console.clear();
	ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.user.setActivity(`🔺 ${ʙᴏᴛꜰɪx}yt `, { type: `WATCHING` });
	console.log(`
•YouTube🔺Downloader ©️• |>••••••••••••••••••••••••••
|
|🔺••  Bot_Status : 𝗬𝗼𝘂𝗧𝘂𝗯𝗲-𝗠𝘂𝘀𝗶𝗰 𝚒𝚜 𝙾𝚗𝚕𝚒𝚗𝚎 ! 
|🔺••  Check Discord for: 🔊 ${ʙᴏᴛꜰɪx}yt   
|
•YouTube🔺Downloader ©️• |>••••••••••••••••••••••••••`);
});
// ===========================================•YouTube🔺Downloader ©️•==================================================
//                 GNU GENERAL PUBLIC LICENSE
//                     Version 3, 29 June 2007
//         Copyright (C) 2007 Free Software Foundation
//     Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
//         of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//                 ----> •YouTube🔺Downloader ©️• <----
//             Discord YouTube Downloader Bot
//     has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// ===========================================•YouTube🔺Downloader ©️•==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on(`guildCreate`,
	(guild) => {
		const channel = guild.channels.cache.find(
			(channel) =>
				channel.type === `text` &&
				channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
		);
		const embedThanks = new Discord.MessageEmbed()
			.setColor(10038562)
			.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
			.setAuthor(`⚜️HypeVoidSoul`)
			.setDescription(`
---------------------|🔺|---------------------            
❤️‍🔥 **Hey there ʏᴏᴜᴛᴜʙᴇ lovers !**
•|  _I got you all covered with direct download music from ʏᴏᴜᴛᴜʙᴇ._

:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
•|  _Please use ${ʙᴏᴛꜰɪx}yt YouTube Url_

---------------------|🔺|---------------------
:star:**ɴᴏᴛᴇ to ᴏᴡɴᴇʀ ᴀɴᴅ ᴍᴏᴅᴇʀꜱ**
•|  🎃**VERY VERY IMPORTANT**🎃_Please use !calib once to calibrate before first use!_`
			)
			.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
			.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
			.setFooter(`🔺-----------|     ©️YouTube🔺Downloader`,
				`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
		channel
			.send(embedThanks)
			.catch(console.error);
		return;
	});
// ===========================================•YouTube🔺Downloader ©️•==================================================
//                 GNU GENERAL PUBLIC LICENSE
//                     Version 3, 29 June 2007
//         Copyright (C) 2007 Free Software Foundation
//     Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
//         of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
//                 ----> •YouTube🔺Downloader ©️• <----
//             Discord YouTube Downloader Bot
//     has been licensed under GNU General Public License
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗦𝗼𝘂𝗹 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝗟𝗮𝗯 | 𝗛𝘆𝗽𝗲𝗩𝗼𝗶𝗱𝘀
// ===========================================•YouTube🔺Downloader ©️•==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.on(`message`,
	async (message) => {
		if (message.author.bot)
			return;
		// ===========================================•YouTube🔺Downloader ©️•==================================================
		message
			.delete()
			.catch(console.error);
		// ===========================================•YouTube🔺Downloader ©️•==================================================
		if (message.content.startsWith(ʙᴏᴛꜰɪx + `yt`) && message.channel.name !== `yt🔺downloader`) {
			if (message.guild.channels.cache.find(channel => channel.name === `yt🔺downloader`)) {
				const embedfactor = new Discord.MessageEmbed()
					.setColor(10038562)
					.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
					.setAuthor(`⚜️HypeVoidSoul`)
					.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•|  _Please use the channel **yt🔺downloader** for any ʏᴏᴜᴛᴜʙᴇ download_`)
					.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setFooter(`🔺-----------|     ©️YouTube🔺Downloader`,
						`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
				message.channel
					.send(embedfactor)
					.catch(console.error);
				return;
			}
			if (message.guild.channels.cache.find(channel => channel.name !== `yt🔺downloader`)) {
				const embedfactor = new Discord.MessageEmbed()
					.setColor(10038562)
					.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
					.setAuthor(`⚜️HypeVoidSoul`)
					.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•|  _Please use the channel **yt🔺downloader** for any ʏᴏᴜᴛᴜʙᴇ download._
•|  _Text channel **yt🔺downloader** is not present._
⚠️ _Please ᴀꜱᴋ the **ᴀᴅᴍɪɴꜱ/ᴍᴏᴅᴇʀꜱ** to make one with proper permissions._`)
					.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setFooter(`🔺-----------|     ©️YouTube🔺Downloader`,
						`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
				message.channel
					.send(embedfactor)
					.catch(console.error);
				return;
			}
		}
		// ===========================================•YouTube🔺Downloader ©️•==================================================
		if (message.content.startsWith(ʙᴏᴛꜰɪx + `calib`)) {
			// ===========================================•YouTube🔺Downloader ©️•==================================================
			if (message.guild.me.hasPermission(`MANAGE_CHANNELS`)) {
				const embedcheck1 = new Discord.MessageEmbed()
					.setColor(10038562)
					.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
					.setAuthor(`⚜️HypeVoidSoul`)
					.setDescription(`
𝗗𝗲𝗮𝗿 **ADMIN** 
•|  _ᴀ channel ɴᴀᴍᴇ yt🔺downloader has been successfully created._
•|  _Please use the channel for any ʏᴏᴜᴛᴜʙᴇ download._`)
					.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setFooter(`🔺-----------|     ©️YouTube🔺Downloader`,
						`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
				message.channel
					.send(embedcheck1)
					.catch(console.error);
				message.guild.channels.create('yt🔺downloader', {
					type: 'GUILD_TEXT',
					permissionOverwrites: [{
						id: message.guild.roles.everyone
					}]
				});
				console.log(`•YouTube🔺Downloader ©️• has been successfully created.`);
			} else {
				const embedcheck2 = new Discord.MessageEmbed()
					.setColor(10038562)
					.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
					.setAuthor(`⚜️HypeVoidSoul`)
					.setDescription(`
---------------------|🔺|---------------------
𝗗𝗲𝗮𝗿 **ADMIN** 
---------------------|🔺|---------------------\n
•|  _ᴀ channel ɴᴀᴍᴇ yt🔺downloader could not be created._
•|  𝗣𝗹𝗲𝗮𝘀𝗲 𝗴𝗶𝘃𝗲 𝗺𝗲 𝘁𝗵𝗲𝘀𝗲 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀:
=𝘔𝘢𝘯𝘢𝘨𝘦𝘊𝘩𝘢𝘯𝘯𝘦𝘭
=𝘚𝘦𝘯𝘥𝘔𝘦𝘴𝘴𝘢𝘨𝘦𝘴
=𝘈𝘵𝘵𝘢𝘤𝘩𝘔𝘦𝘥𝘪𝘢
=𝘌𝘮𝘣𝘦𝘥𝘴`)
					.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setFooter(`🔺-----------|     ©️YouTube🔺Downloader`,
						`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
				message.channel
					.send(embedcheck2)
					.catch(console.error);
				console.log(`•YouTube🔺Downloader ©️• could not be created.`);
				return;
			}
		}
		// ===========================================•YouTube🔺Downloader ©️•==================================================
		if (!message.content.startsWith(ʙᴏᴛꜰɪx + `yt https://yout`) && message.channel.name === `yt🔺downloader`) {
			const embedThanks = new Discord.MessageEmbed()
				.setColor(10038562)
				.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
				.setAuthor(`⚜️HypeVoidSoul`)
				.setDescription(`
---------------------|🔺|---------------------
❤️‍🔥 **Hey there ʏᴏᴜᴛᴜʙᴇ ʟᴏᴠᴇʀ !**
---------------------|🔺|---------------------\n
**⚠️WARNING⚠️** 
•|  _Please use ${ʙᴏᴛꜰɪx}yt **YouTube Url**_
`
				)
				.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
				.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
				.setFooter(`🔺-----------|     ©️YouTube🔺Downloader`,
					`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
			message.channel
				.send(embedThanks)
				.then((message) => {
					message.delete({ timeout: 8000 });
				})
				.catch(console.error);
			return;
		}
		// ===========================================•YouTube🔺Downloader ©️•==================================================
		if (message.content.startsWith(ʙᴏᴛꜰɪx + `yt`) && message.channel.name === `yt🔺downloader`) {
			let ᴀʀɢꜱ = message.content.split(` `).slice(1);
			if (
				!message.content.startsWith(ʙᴏᴛꜰɪx + `yt`) &&
				ʏᴏᴜɢᴇᴛᴘᴀᴛᴛᴇʀɴ.test(ᴀʀɢꜱ[0])
			) {
				if (message.author) {
					message.delete();
				}
				try {
					message.delete();
					const embed1 = new Discord.MessageEmbed()
						.setColor(10038562)
						.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
						.setAuthor(`⚜️HypeVoidSoul`)
						.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•|  _Please use **${ʙᴏᴛꜰɪx}yt ʏᴏᴜᴛᴜʙᴇ url**_`)
						.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setFooter(
							`•YouTube🔺Downloader ©️•`,
							`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
						);
					message.channel
						.send(embed1)
						.then((message) => {
							message.delete({ timeout: 8000 });
						})
						.catch(console.error);
					return;
				} catch (DevLog) {
					console.log(DevLog);
				}
			}
			// ===========================================•YouTube🔺Downloader ©️•==================================================
			if (ʏᴏᴜʟɪꜱᴛᴘᴀᴛᴛᴇʀɴ.test(ᴀʀɢꜱ[0])) {
				try {
					message.delete();
					const embed2 = new Discord.MessageEmbed()
						.setColor(10038562)
						.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
						.setAuthor(`⚜️HypeVoidSoul`)
						.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•|  Please send **𝘠𝘰𝘶𝘛𝘶𝘣𝘦   _𝘚𝘪𝘯𝘨𝘭𝘦/𝘕𝘰𝘯-𝘗𝘭𝘢𝘺𝘭𝘪𝘴𝘵_   𝘜𝘳𝘭𝘴 𝘖𝘯𝘭𝘺**`
						)
						.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setFooter(
							`•YouTube🔺Downloader ©️•`,
							`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
						);
					message.channel
						.send(embed2)
						.then((message) => {
							message.delete({ timeout: 8000 });
						})
						.catch(console.error);
					return;
				} catch (DevLog) {
					message.channel.send(
						`There was an error finishing the reqst.\n_${DevLog}_`
					);
				}
			}
			// ===========================================•YouTube🔺Downloader ©️•==================================================
			if (!ᴀʀɢꜱ[0]) {
				try {
					const embed3 = new Discord.MessageEmbed()
						.setColor(10038562)
						.setTitle(`•YouTubeDownloader by HypeVoidLab •`)
						.setAuthor(`⚜️HypeVoidSoul`)
						.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•|  _Please enter the **YouTube URL** of a song !_

•|  _For Ex:_ **${ʙᴏᴛꜰɪx}yt https://www.youtube\.com**`
						)
						.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setFooter(
							`•YouTube🔺Downloader ©️•`,
							`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`
						);
					message.channel
						.send(embed3)
						.then((message) => {
							message.delete({ timeout: 8000 });
						})
						.catch(console.error);
					return;
				} catch (DevLog) {
					message.channel.send(
						`There was an error finishing the reqst.\n_${DevLog}_`
					);
				}
			}
			// ===========================================•YouTube🔺Downloader ©️•==================================================
			let ʏᴏᴜᴛᴀᴋᴇʀ;
			let ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ;
			// ===========================================•YouTube🔺Downloader ©️•==================================================
			try {
				ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ = ᴠᴏɪᴅᴅᴡɴ(ᴀʀɢꜱ.join(` `), {
					encoderArgs: [`-af`, `dynaudnorm=f=200`],
					fmt: `mp3`,
					opusEncoded: false
				});
				ʏᴏᴜᴛᴀᴋᴇʀ = await ᴠᴏɪᴅɪᴄ.search(ᴀʀɢꜱ.join(` `));
			} catch (DevLog) {
				try {
					const embed4 = new Discord.MessageEmbed()
						.setColor(10038562)
						.setTitle(`----> •YouTube🔺Downloader ©️• <----`)
						.setAuthor(`⚜️HypeVoidSoul`)
						.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•|  ɪ did not find anything for:
**${ᴀʀɢꜱ.join(` `)}**`
						)
						.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
						.setFooter(`----> •YouTube🔺Downloader ©️• <----`,
							`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
					message.channel
						.send(embed4)
						.then((message) => {
							message.delete({ timeout: 8000 });
						})
						.catch(console.error);
					return;
				} catch (DevLog) {
					message.channel.send(
						`There was an error finishing the reqst.\n_${DevLog}_`
					);
				}
			}
			// ===========================================•YouTube🔺Downloader ©️•==================================================
			try {
				const embed5 = new Discord.MessageEmbed()
					.setColor(10038562)
					.setTitle(`----> •YouTube🔺Downloader ©️• <----`)
					.setAuthor(`⚜️HypeVoidSoul`)
					.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•:shaved_ice:**TITLE**
•|  _${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}_

•:chains:**LINK**
•|  _${ᴀʀɢꜱ}_

:clock930: **DOWNLOADING**
•|  _Please ᴡᴀit ᴛɪʟʟ •YouTube🔺Downloader ©️• finishes downloading..._`
					)
					.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setFooter(`----> •YouTube🔺Downloader ©️• <----`, `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
				message.channel
					.send(embed5)
					.then((message) => {
						message.delete({ timeout: 15000 });
					})
					.catch(console.error);
				ʏᴏᴜꜱᴛʀᴇᴀᴍᴇʀ
					.pipe(
						createWriteStream(__dirname + `/YTubeTemp/${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`)
					)
					.on(`finish`, () => {
						try {
							const embed6 = new Discord.MessageEmbed()
								.setColor(10038562)
								.setTitle(`----> •YouTube🔺Downloader ©️• <----`)
								.setAuthor(`⚜️HypeVoidSoul`)
								.setDescription(`
---------------------|🔺|---------------------
**⚠️WARNING⚠️** 
**User:** ${message.author}
---------------------|🔺|---------------------\n
•:shaved_ice:**TITLE**
•|  _${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}_

•:chains:**LINK**
•|  _${ᴀʀɢꜱ}_`)
								.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
								.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
								.setFooter(`----> •YouTube🔺Downloader ©️• <----`,
									`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
							message.channel
								.send(embed6)
								.then((message) => {
									message.delete({ timeout: 30000 });
								})
								.catch(console.error);
							message.channel.send(
								new Discord.MessageAttachment(
									__dirname + `/YTubeTemp/${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`,
									`${ʏᴏᴜᴛᴀᴋᴇʀ[0].title}.mp3`
								)
							);
						} catch (DevLog) {
							const embed7 = new Discord.MessageEmbed()
								.setColor(10038562)
								.setTitle(`----> •YouTube🔺Downloader ©️• <----`)
								.setAuthor(`⚜️HypeVoidSoul`)
								.setDescription(`
---------------------|🔺|---------------------
**🔥ERROR**
**User:** ${message.author}
---------------------|🔺|---------------------\n

•|  _ɪ did not manage to send the music file..._
•|  _Maybe ɪ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ the ʀᴇQᴜɪʀᴇᴅ permissions to ᴜᴘʟᴏᴀᴅ this ᴛʏᴘᴇ of ꜰɪʟᴇ ᴏɴ this ꜱᴇʀᴠᴇʀ..._

**DevErrorLog**
_${DevLog}_`)
								.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
								.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
								.setFooter(`----> •YouTube🔺Downloader ©️• <----`,
									`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
							message.channel
								.send(embed7)
								.then((message) => {
									message.delete({ timeout: 8000 });
								})
								.catch(console.error);
							return;
						}
					});
			} catch (DevLog) {
				const embed7 = new Discord.MessageEmbed()
					.setColor(10038562)
					.setTitle(`----> •YouTube🔺Downloader ©️• <----`)
					.setAuthor(`⚜️HypeVoidSoul`)
					.setDescription(`
---------------------|🔺|---------------------
**🔥ERROR**
**User:** ${message.author}
---------------------|🔺|---------------------\n

•|  ɪ did not find anything for:
**${ᴀʀɢꜱ.join(` `)}**

•|  _Maybe it is impossible to retrieve this music file..._

**DevErrorLog**
_${DevLog}_
`
					)
					.setImage(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setThumbnail(`https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`)
					.setFooter(`----> •YouTube🔺Downloader ©️• <----`, `https://i.postimg.cc/cJYg7gnT/teahub-io-2048x1152-wallpaper-for-youtube-307808.png`);
				message.channel
					.send(embed7)
					.then((message) => {
						message.delete({ timeout: 8000 });
					})
					.catch(console.error);
				return;
			}
		}
	});
// ===========================================•YouTube🔺Downloader ©️•==================================================
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇserver();
ʜʏᴘᴇʏᴏᴜᴛᴜʙᴇ.login(ʏᴏᴜᴛᴜʙᴇᴛᴏᴋ).catch(console.error);
// ===========================================•YouTube🔺Downloader ©️•==================================================
