const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, channel) => {
  let logChannel = bot.guilds.get('911710405640978502').channels.find(c => c.id === '970583155104944158')
  logChannel.send({embed:{description: `Channel deleted: ${channel.name}`, color: 0xff0000}})
}