const Discord = require("discord.js")
const eco = require('discord-economy')
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Hunt', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte", "30 minuta prije sljedećeg lova")  
  
  if(bot.huntCooldown.has(message.author.id)) return message.channel.send(embed)
      else {
    bot.huntCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.huntCooldown.has(message.author.id)) bot.huntCooldown.delete(message.author)
    }, 1800000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 10,
      money: Math.floor(Math.random() * 500),
      jobs: ["🐅 Tigra",
             "🦊 Lisicu",
             "🐷 Divlje Prase",
             "🐑 Ovcu",
             "🐐 Kozu",
             "🐇 Zeca",
             '🐓 Kokošku',
             '🐄 Kravu']
      
    })
      let embed2 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Hunt', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("😢» Na žalost", "Uhvatila vas je policija 🚔, da lovite bez dozvole i platili ste kaznu od 200 " + bitcoin) 
  .addField(money + "» Trenutno", output.balance)
  eco.SubtractFromBalance(message.author.id, 200)

    if (output.earned == 0) return message.channel.send(embed2)
  
                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("GREEN")
  .setAuthor('CzvVesti | Hunt', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField("🔫» Ulovili ste ", output.job)
 .addField("💳» Zaradili ste ", output.earned + " " + bitcoin) 
 .addField(money + "» Trenutno ", output.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)
                                                 
                     message.channel.send(embed3)

}

module.exports.help = {
  name: "hunt",
  aliases: ["Hunt","lov", "Lov", "lovi", "Lovi"],
}