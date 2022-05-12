const Discord = require("discord.js")
const eco = require('discord-economy')
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Work', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte", "30 minuta prije sljedećeg posla")  
  
  if(bot.workCooldown.has(message.author.id)) return message.channel.send(embed)
      else {
    bot.workCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.workCooldown.has(message.author.id)) bot.workCooldown.delete(message.author)
    }, 1800000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 10,
      money: Math.floor(Math.random() * 250),
      jobs: ['Doktor',
             "Trgovac",
             "Pizza majstor",
             "Bejbi siterka",
             "Voditelj",
             "Haker",
             'Programer',
             'Profesor',
             'Čistačica', 
             'Instruktor u autoskoli', 
             'Domar',
             'Java developer',
             'Vrtlar',
             'Kuhar',
             'Vodoinstalater',
             'Autolakirer',
             'Čuvar',
             'Pekar',
             'Dadilja',
             'Mornar',
             'Električar',
             'Konobar',
             'Frizer',
             'Ugostitelj',
             'Atomehaničar']
      
    })
      let embed2 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Work', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("😢» Na žalost", "Poslodavac nije zadovoljan kako ste uradili posao i niste dobili Novac") 
  .addField(money + `» Trenutno`, output.balance)
      
    if (output.earned == 0) return message.channel.send(embed2)
  
                     
let embed3 = new Discord.RichEmbed()

.setColor("GREEN")
.setAuthor('CzvVesti | Work', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
.setThumbnail (message.author.displayAvatarURL)
.addField("⚒» Radili ste kao", output.job)
.addField("💳» Zaradili ste", output.earned + " " + bitcoin) 
.addField(money + `» Trenutno`, output.balance + " " + bitcoin)
                                                          
                     message.channel.send(embed3)

}

module.exports.help = {
  name: "work",
  aliases: ["Work","poso", "posao", "Poso", "Posao"],
}