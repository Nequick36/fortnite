const Discord = require("discord.js")
const eco = require('discord-economy')
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Hourly', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte", "1 sat prije sljedeće sedmične nagrade")  
  
  if(bot.huntCooldown.has(message.author.id)) return message.channel.send(embed)
      else {
    bot.huntCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.huntCooldown.has(message.author.id)) bot.huntCooldown.delete(message.author)
    }, 3600000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 100,
      money: 150,
      jobs: []
      
    })
      let embed2 = new Discord.RichEmbed()

    .setColor("GREEN")
  .setAuthor('CzvVesti | Hourly', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
.setThumbnail (message.author.displayAvatarURL)
 .addField("🏆» Čestitamo", "Pokupili ste svoju satnu nagradu u iznosu od 150 " + bitcoin)
 .addField("💳» Zaradili ste", "150 " + bitcoin) 
 .addField(money + `» Trenutno`, output.balance + 150 + " " + bitcoin)
  eco.AddToBalance(message.author.id, 150)

    if (output.earned == 0) return message.channel.send(embed2)

}

module.exports.help = {
  name: "hourly",
  aliases: ["Hourly"],
}