const Discord = require("discord.js")
const eco = require('discord-economy')
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Weekly', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte", "7 dana prije sljedeće sedmične nagrade")  
  
  if(bot.huntCooldown.has(message.author.id)) return message.channel.send(embed)
      else {
    bot.huntCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.huntCooldown.has(message.author.id)) bot.huntCooldown.delete(message.author)
    }, 604800000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 100,
      money: Math.floor(8000),
      jobs: []
      
    })
      let embed2 = new Discord.RichEmbed()

    .setColor("GREEN")
  .setAuthor('CzvVesti | Weekly', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
 .addField("🏆» Čestitamo", "Pokupili ste svoju sedmičnu nagradu u iznosu od 8000 " + bitcoin)
 .addField("💳» Zaradili ste", "8000 " + bitcoin) 
 .addField(`${money}» Trenutno`, output.balance + 8000 + " " + bitcoin)
  eco.AddToBalance(message.author.id, 8000)

    if (output.earned == 0) return message.channel.send(embed2)

}

module.exports.help = {
  name: "weekly",
  aliases: ["Weekly"],
}