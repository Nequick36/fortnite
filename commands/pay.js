const Discord = require("discord.js")
const eco = require("discord-economy")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
  //message.channel.send("This command is still a work in progress!")
  var user = message.mentions.users.first()
    var amount = args[1]
      
    let embed3 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Pay', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Morate Tagovati Osobu Kojoj Želite Poslati Novac")
 .addField(check + "» Korišćenje", ".pay @User#1991 100")
  .setThumbnail (message.author.displayAvatarURL)

    if (!user) return message.channel.send(embed3)
    
        let embed = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Pay', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Morate Dodati Iznos Novca Za Transfer")
 .addField(check + "» Korišćenje", ".pay @User#1991 100")
        .setThumbnail (message.author.displayAvatarURL)

    if(isNaN(amount)) return message.channel.send(embed)
  
        let embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Pay', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Ne Možete Sebi Poslati Novac")
 .addField(check + "» Korišćenje", ".pay @User#1991 100")
        .setThumbnail (message.author.displayAvatarURL)

 if(message.author.id === user.id) return message.channel.send(embed2)
  
    let embed4 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Pay', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Nemate Toliko Novca")
 .addField(check + "» Korišćenje", ".pay @User#1991 100")
  .setThumbnail (message.author.displayAvatarURL)

    if (!amount) return message.channel.send(embed4)
 
    var output = await eco.FetchBalance(message.author.id)
        let embed5 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Pay', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Nemate Toliko Novca")
 .addField(check + "» Korišćenje", ".pay @User#1991 100")
        .setThumbnail (message.author.displayAvatarURL)

    if (output.balance < amount) return message.channel.send(embed5)
 
          let embed6 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Pay', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Nemate Toliko Novca")
 .addField(check + "» Korišćenje", ".pay @User#1991 100")
          .setThumbnail (message.author.displayAvatarURL)

    var transfer = await eco.Transfer(message.author.id, user.id, amount)
    let embed7 = new Discord.RichEmbed()
          .setColor("GREEN")
  .setAuthor('CzvVesti | Pay', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(check + "» Uspješno", "Uspješno ste poslali novac")
 .addField(`🪙» Trenutno Stanje: ${message.author.tag}`, `${transfer.FromUser}` + " " + bitcoin)
 .addField(`🪙» Trenutno Stanje: ${user.tag}`, `${transfer.ToUser}` + " " + bitcoin)
    .setThumbnail (message.author.displayAvatarURL)

    message.channel.send(embed7)
}

module.exports.help = {
  name: "transfer",
  aliases: ["pay", "Pay", "Transfer"],
  perm: "",
  role: "",
  group:"SIMPLE"
}