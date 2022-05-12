const Discord = require("discord.js")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {

  
            let embed = new Discord.RichEmbed()
  .setColor("GREEN")
            .setThumbnail (message.author.displayAvatarURL)
  .setAuthor('CzvVesti | Shop', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setDescription("Rolove kupujete komandom .buy 'Ime rola'")
  .addField("🥉︲Bronze", "1000 " + bitcoin, true)
  .addField("🥈︲Silver", "1500 " + bitcoin, true)
  .addField("🥇︲Golden", "2000 " + bitcoin, true)
  .addField("📛︲Veteran", "5000 " + bitcoin, true)
  .addField("🔫︲Major", "7500 " + bitcoin, true)
  .addField("🎭︲Cyborg", "10000 " + bitcoin, true)
  .addField("🎡︲Captain", "15000 " + bitcoin, true)
  .addField("💪︲Hulk", "20000 " + bitcoin, true)
  .addField("🎯︲Flash", "25000 " + bitcoin, true)
  .addField("⚔︲Warrior", "30000 " + bitcoin, true)
  .addField("🚁︲Marine ", "40000 " + bitcoin, true)
  .addField("✈︲Air Force", "50000 " + bitcoin, true)
       message.channel.send(embed)
  
  
          
    
    
    
}
module.exports.help = {
name: "shop",
aliases: ["Shop"]
}