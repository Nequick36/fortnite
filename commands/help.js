const Discord = require("discord.js")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"
const lopov = "<:thief:973949378341507112>"
module.exports.run = async (bot, message, args) => {


    if(args[0] === "kazino"){
        let embed1 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Kazino', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("🎰» Kazino", "Sve komande za Kazino")
  .addField(".casino", "Head-Tails/Glava Pismo prije bacanja novčića birate glavu ili pismu, ako novčić padne na stranu koju sve vi odabrali dobit ćete Novac")
  .addField(".dice", "Dice/Kocka jednostavnim bacanjem kocke dobijate novac ako kocka padne na vaš broj dobijate novac")
  .addField(".slot", "Fruit Machine/Mašina za voće je mašina za kockanje koja kreira igru na sreću za svoje klijente")
        .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed1)
}
  
    if(args[0] === "zarada"){
          let embed2 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Zarada', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("💰» Zarada", "Sve komande za Zaradu")
  .addField(".work", "Idete na posao i dobijete novac")
  .addField(".hobby", "Bavite se svojim hobijem i dobijete novac")
  .addField(".hunt", "Idete u lov")
  .addField(".weekly", "Dobijete 8000 " + bitcoin + " svakih 7 dana")
  .addField(".daily", "Dobijate 500 " + bitcoin + " svakih 24h")
  .addField(".hourly", "Dobijate 150 " + bitcoin + " svakih 1h")
          .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed2)
}
  
      if(args[0] === "zlocin"){
          let embed2 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Zločin', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField(lopov + "» Zločin", "Sve komande za Zločin")
  .addField(".rob", "Uskoro...")
  .addField(".crime", "Pljačkom nekog od objekta dobijate novac")
  .addField(".drugs", "Prodavate drogu klijenteli")
          .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed2)
}

 
    if(args[0] === "shop"){
          let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Shop', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("🏪» Shop", "Sve komande za Shop")
  .addField(".shop", "Prikazuje sve Rolove/Rankove koje možete kupiti")
  .addField(".buy", "Kupujete stvari iz Shopa '.shop'")
  .addField(".sell", "Uskoro...")
          .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed3) 
}
  
  
    if(args[0] === "balance"){
          let embed4 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("💳» Balance", "Sve komande za Balance")
  .addField(".balance", "Sa ovom komandom možete da vidite koliko imate novca na računu")
  .addField(".topbalance", "Pokazuje Top 10 članova sa najviše novca")
  .addField(".transfer", "Ovom komandom možete nekome dati novac")
          .setThumbnail (message.author.displayAvatarURL)

        message.channel.send(embed4)
}
  
  if(args[0] === "staff"){
          let embed5 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Staff', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("👮‍♂️» Staff", "Sve komande za Staff")
  .addField(".setbalance", 'Stavlja određenu sumu novca članu')
  .addField(".addbalance", 'Dodaje članu određenu sumu novca')
  .addField(".removebalance", "Uklanja članu određenu sumu novca")
  .addField(".eval", "Komanda Za Developere")
          .setThumbnail (message.author.displayAvatarURL)

        message.channel.send(embed5) 
  }
  
  if(!args[0]) {
           let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Help', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("🎰» Kazino", "Komanda: .help kazino")
  .addField(money + "» Zarada", "Komanda: .help zarada")
  .addField("🏪» Shop", "Komanda: .help shop")
  .addField("💳» Balance", "Komanda: .help balance")
  .addField(lopov + "» Zlocin", "Komanda: .help zlocin")
  .addField("👮‍♂️» Staff", "Komanda: .help staff")
           .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed)
  }
}
module.exports.help = {
name: "help",
aliases: ["pomoc", "Help", "Pomoc", "pomoć", "Pomoć", "komande", "Komande", "komanda", "Komanda"]
}