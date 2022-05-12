const Discord = require("discord.js")
const eco = require('discord-economy')
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Hobby', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte", "30 minuta prije sljedećeg hobija")  
  
  if(bot.hobbyCooldown.has(message.author.id)) return message.channel.send(embed)
      else {
    bot.hobbyCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.hobbyCooldown.has(message.author.id)) bot.hobbyCooldown.delete(message.author)
    }, 1800000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 5,
      money: Math.floor(Math.random() * 250),
      jobs: ['Vozili ste se biciklom i našli novac',
             'Napravili ste kućicu za ptice',
             'Napravili ste kućicu za psa',
             'Našli ste dobitni listić',
             'Napravili ste kamp za migrante',
             'Našli ste stari miš i prodali ga',
             'Nasli ste staru igricu i prodali je',
             'Nasli ste staru tastaturu i prodali je',
             'Nasli ste stare slušalice i prodali ih',
             'Nasli ste stare CD diskove i prodali ih']
      
    })
      let embed2 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Hobby', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("😢» Na žalost", "Niste uspjeli prodati/pronaći stvari za novac") 
  .addField(money + "» Trenutno", output.balance)
      
    if (output.earned == 0) return message.channel.send(embed2)
  
                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("GREEN")
  .setAuthor('CzvVesti | Hobby', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField("⚒» Bavili ste se vašim hobijem", output.job)
 .addField("💳» Zaradili ste", output.earned + " " + bitcoin) 
 .addField(money + "» Trenutno", output.balance + " " + bitcoin)
             .setThumbnail (message.author.displayAvatarURL)
                                             
                     message.channel.send(embed3)

}

module.exports.help = {
  name: "hobby",
  aliases: ["Hobby","hobi", "Hobi"],
  perm: "",
  role: "",
  group:"Economy"
}