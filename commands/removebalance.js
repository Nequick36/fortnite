const Discord = require("discord.js")
const eco = require("discord-economy")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
      let developers = bot.devs
        let embed9 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Remove Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField(x + "» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed9)
  
            var user = message.mentions.users.first() || message.guild.members.get(args[0])
  
        
          const embed2 = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Remove Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Morate Tagovati Korisnika Kojem Želite Ukloniti Novac")
 .addField(check + "» Korišćenje", ".removebal @User#1991 100")
          .setThumbnail (message.author.displayAvatarURL)

         if (!user) return message.channel.send(embed2)
            
  let amount = message.content.split(" ").slice(2).join(" ");
  const embed = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Remove Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Morate Staviti Koliko Želite Ukloniti Novaca Korisniku")
 .addField(check + "» Korišćenje", ".removebal @User#1991 100")
  .setThumbnail (message.author.displayAvatarURL)

       if (!amount) return message.channel.send(embed);

                   eco.SubtractFromBalance(user.id, amount).then(l =>
                   eco.FetchBalance(user.id).then(x => {
                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("GREEN")
  .setAuthor('CzvVesti | Remove Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField("👤» Korisnik", user)
 .addField("🪙» Oduzeto", amount + " " + bitcoin)         
 .addField(money + "» Trenutno", x.balance + " " + bitcoin)
.setThumbnail (message.author.displayAvatarURL)

                                                          
                     message.channel.send(embed3)
                 }))
}

module.exports.help = {
  name: "removebalance",
  aliases: ["removebal"],
  perm: "",
  role: "*",
  group: "economy"
}
