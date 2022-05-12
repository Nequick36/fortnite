const Discord = require("discord.js")
const eco = require("discord-economy")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
          eco.FetchBalance(message.author.id).then(x => {
  let bet = args[0]
  
            const embed = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
            .setThumbnail (message.author.displayAvatarURL)
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Morate staviti sumu u koju se želite kockati")
 .addField(check + "» Korišćenje", ".slot 100")
  
  if(!bet) return message.channel.send(embed)
  
    let slots = ["🍎", "🍌", "🍒"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;
  

    if (slots[result1] === slots[result2] && slots[result3]) {
      eco.FetchBalance(message.author.id).then(user => {
    if(user.balance < bet) 
    {
                  const embed2 = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
.setThumbnail (message.author.displayAvatarURL)
 .addField(x + "» Pogreška", "Nemate dovoljno novca")
 .addField(money + "» Trenutno Stanje", x.balance + " <:Bitcoin:971362942924783616>")
 .addField(check + "» Korišćenje", ".slot 100")
      return message.channel.send(embed2)
    } else {
            eco.AddToBalance(message.author.id, bet*10).then(user => {})
                      const embed3 = new Discord.RichEmbed()
            .setColor("GREEN")
   .setAuthor('CzvVesti | Slot', 'https://i.imgur.com/iSbCziO.jpg' )
                      .setThumbnail (message.author.displayAvatarURL)

.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("🏆» Čestitamo", "Vi ste pobijedili")
 .addField("🎰» Rezultati", slots[result1] + slots[result2] + slots[result3], true)
 .addField(money + "» Trenutno Stanje", x.balance + " " + bitcoin)
        message.channel.send(embed3);

    }
  }) 
        
      
    } else {
        let embed = new Discord.RichEmbed()
        eco.FetchBalance(message.author.id).then(user => {
    if(user.balance < bet) 
    {
      const embed4 = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Slot', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + "» Pogreška", "Nemate dovoljno novca")
      .setThumbnail (message.author.displayAvatarURL)

 .addField(money + "» Trenutno Stanje", x.balance + " " + bitcoin)
 .addField(check + "» Korišćenje", ".slot 100")
      return message.channel.send(embed4)
    } else {
            eco.SubtractFromBalance(message.author.id, bet).then(user => {
      })
      
    const embed5 = new Discord.RichEmbed()
    .setColor("BLUE")
   .setAuthor('CzvVesti | Slot', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField("🏆» Žao nam je", "Vi ste izgubili")
    .setThumbnail (message.author.displayAvatarURL)

 .addField("🎰» Rezultati", slots[result1] + slots[result2] + slots[result3], true)
 .addField(money + "» Trenutno Stanje", x.balance + " " + bitcoin)
        message.channel.send(embed5);
    }
  })
            
    }
          })
}

module.exports.help = {
  name: "slot",
  aliases: ["Slot", "slots", "Slots"],
  perm: "",
  role: "",
  group: "economy"
}
 