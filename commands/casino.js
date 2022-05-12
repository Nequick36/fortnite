const Discord = require("discord.js");
const eco = require("discord-economy");
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
  
  
    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble
 
 let embed = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Casino', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Morate odabrati 'heads' ili 'tails' ")
 .addField(check + "» Korišćenje", ".casino heads 100")
 .setThumbnail (message.author.displayAvatarURL)

 if (!flip || !['tails', 'heads'].includes(flip)) return message.channel.send(embed)
  
  let embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Casino', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
   .addField(x + "» Pogreška", "Morate staviti iznos novca u koji se želite kladiti")
 .addField(check + "» Korišćenje", ".casino heads 100")
  .setThumbnail (message.author.displayAvatarURL)

    if (!amount) return message.channel.send(embed2)
  
  
    var output = await eco.FetchBalance(message.author.id)
    let embed3 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Casino', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
     .addField(x + "» Pogreška", "Vi Nemate toliko novca")
 .addField(check + "» Korišćenje", ".casino heads 100")
    .setThumbnail (message.author.displayAvatarURL)

    if (output.balance < amount) return message.channel.send(embed3)
  
    
    var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
if(gamble.output === "won") {

  let embed4 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor('CzvVesti | Casino', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField(`🏆» Čestitamo Vi ste`, "Pobijedili")
  .addField(money + `» Trenutno Stanje`, gamble.newbalance + " " + bitcoin)
  .setThumbnail (message.author.displayAvatarURL)

    message.channel.send(embed4)
} else {
    
  let embed5 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor('CzvVesti | Casino', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField(`🏆» Na Žalost Vi Ste`, "Izgubili")
  .addField(money + `» Trenutno Stanje`, gamble.newbalance + " " + bitcoin)
  .setThumbnail (message.author.displayAvatarURL)

    message.channel.send(embed5)
}
  
  
  
  }
module.exports.help = {
  name: "casino",
  aliases: ["Casino", "Kazino", "kazino"],
  perm: "",
  role: "",
  group: "Simple"
};
