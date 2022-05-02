const fs = require('fs')
const discord = require('discord.js')
const dl = require('discord-leveling')
let moment = require('moment')
require("moment-duration-format");
exports.run = async (bot, message) => {
  let developers = bot.devs
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1);
  let logChannel = message.guild.channels.find(c => c.name === '970583155104944158')
  if(message.content.startsWith('!')) logChannel.send({embed:{description: `${message.author.tag} je iskoristio komandu ${message.content} u kanalu ${message.channel.name}.`, color: 0xff0000}})
  if(message.content.startsWith('.')) logChannel.send({embed:{description: `${message.author.tag} je iskoristio komandu ${message.content} u kanalu ${message.channel.name}.`, color: 0xff0000}})
  if(message.content.startsWith(':-')) logChannel.send({embed:{description: `${message.author.tag} je iskoristio komandu ${message.content} u kanalu ${message.channel.name}.`, color: 0xff0000}})
  if(message.content.startsWith('!aki')) logChannel.send({embed:{description: `${message.author.tag} je iskoristio komandu ${message.content} u kanalu ${message.channel.name}.`, color: 0xff0000}})
  if(message.content.startsWith('+')) logChannel.send({embed:{description: `${message.author.tag} je iskoristio komandu ${message.content} u kanalu ${message.channel.name}.`, color: 0xff0000}})
  if(message.content.startsWith('$')) logChannel.send({embed:{description: `${message.author.tag} je iskoristio komandu ${message.content} u kanalu ${message.channel.name}.`, color: 0xff0000}})
  
  
  //message count
  let msgs = JSON.parse(fs.readFileSync('events/msgs.json', 'utf8'));
  let author = message.author
  if(!msgs[author.id]) msgs[author.id] = {}
  if(!msgs[author.id].username) msgs[author.id].username = author.username
  if(msgs[author.id].username !== author.username) msgs[author.id].username = author.username
  if(!msgs[author.id].count) msgs[author.id].count = 0
  msgs[author.id].count++
  fs.writeFile('events/msgs.json', JSON.stringify(msgs, null, 4), (err) => {
     if(err) console.error(err)
  })
  
  //chat logs
  let date = message.createdTimestamp
  fs.appendFile('./chatlogs.txt', `[${moment(date).format('DD.MM.YYYY')}][${moment(date).format('hh:mm:ss')}][${message.channel.name}] ${message.member.nickname || message.author.username}#${message.author.tag.split('#').slice(1).join(" ")}: ${message.content}\n`, (err) => {
    if(err) console.log(err)
  })
  // fs.appendFile('events/chatlogs.txt', `[${message.createdAt}][${message.guild.name}][${message.channel.name}] ${message.author.username}: ${message.content}\n`, (err) => {
  //       if(err) console.log(err)
  //   })

}