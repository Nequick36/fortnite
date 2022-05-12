const Discord = require("discord.js")
const eco = require('discord-economy')
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Rob', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField("👨‍🏭» Molimo Vas sačekajte", "30 minuta prije sljedeće pljačke")  
  
  
  if(bot.robCooldown.has(message.author.id)) return message.channel.send(embed)
      else {
    bot.robCooldown.set(message.author.id)
    setTimeout(function() {
      if(bot.robCooldown.has(message.author.id)) bot.robCooldown.delete(message.author)
    }, 1800000)
  }
    var output = await eco.Work(message.author.id, {
      failurerate: 50,
      money: 200      
    })

    
  let embed1 = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Rob', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + `» Pogreška`, "Morate Tagovati Korisnika Kojem Želite Ukrasti Novac")
 .addField(check + `» Korišćenje`, ".rob @User#1991")
  .setThumbnail (message.author.displayAvatarURL)
      let user = message.mentions.users.first() || message.guild.members.get(args[0])
       if (!user) return message.channel.send(embed1)
      
  
if (output.earned == 0) { 
    
      let filter = m => m.author.id === message.author.id
            let embed1 = new Discord.RichEmbed()
              .setColor("BLUE")
              .setAuthor('CzvVesti | Bježanje od Policije', 'https://i.imgur.com/iSbCziO.jpg' )
              .setFooter(message.author.tag + " " , message.author.displayAvatarURL)
              .setTimestamp()
              .addField("🏃‍♂️» Da biste pobijegli od policije", "Morate napisati `gejsam` u sljedećih 5 sekundi")
              .setThumbnail (message.author.displayAvatarURL)
             message.channel.send(embed1).then(() => {
      
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 6000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
        if (message.content == 'gejsam' || message.content == "Gejsam") {
             let embed2 = new Discord.RichEmbed()
              .setColor("GREEN")
              .setAuthor('CzvVesti | Bježanje od Policije', 'https://i.imgur.com/iSbCziO.jpg' )
              .setFooter(message.author.tag + " " , message.author.displayAvatarURL)
              .setTimestamp()
              .addField("🏆» Čestitamo", "Uspješno ste pobjegli od policije")
              .addField("💳» Zaradili ste", "200 " + bitcoin) 
              .addField(money + "» Trenutno", output.balance+200 + " " + bitcoin)
              .setThumbnail (message.author.displayAvatarURL)
             message.channel.send(embed2)        
          eco.AddToBalance(message.author.id, 200).then(l =>{ })
          
        } else {
          
          
             let embed4 = new Discord.RichEmbed()
              .setColor("BLUE")
              .setAuthor('CzvVesti | Bježanje od Policije', 'https://i.imgur.com/iSbCziO.jpg' )
              .setFooter(message.author.tag + " " , message.author.displayAvatarURL)
              .setTimestamp()
              .addField("😢» Na žalost", "Izgubili ste kontrolu i uletjeli u kanal")
              .addField("🚔» Platili ste kaznu", "Uhvatila Vas je policija i platili ste kaznu od 500 " + bitcoin) 
              .addField(money + "» Trenutno", output.balance-500 + " " + bitcoin)
              .setThumbnail (message.author.displayAvatarURL)
             message.channel.send(embed4)
          eco.SubtractFromBalance(message.author.id, 500);
          };
        }).catch(() => {
          let embed4 = new Discord.RichEmbed()
              .setColor("BLUE")
              .setAuthor('CzvVesti | Bježanje od Policije', 'https://i.imgur.com/iSbCziO.jpg' )
              .setFooter(message.author.tag + " " , message.author.displayAvatarURL)
              .setTimestamp()
              .addField("😢» Na žalost", "Probušila Vam se guma i udarili ste u zgradu")
              .addField("🚔» Platili ste kaznu", "Uhvatila Vas je policija i platili ste kaznu od 500 " + bitcoin) 
              .addField(money + "» Trenutno", output.balance-500 + " " + bitcoin)
              .setThumbnail (message.author.displayAvatarURL)
             message.channel.send(embed4)
          eco.SubtractFromBalance(message.author.id, 500);
        });
});
}
  
  
if (output.earned !== 0) { 
        
let embed3 = new Discord.RichEmbed()
            .setColor("GREEN")
  .setAuthor('CzvVesti | Rob', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField("⚒» Ukrali ste", "Novac od " + user.tag)
 .addField("💳» Zaradili ste", output.earned + " " + bitcoin) 
 .addField(money + "» Trenutno", output.balance + " " + bitcoin)
.setThumbnail (message.author.displayAvatarURL)
message.channel.send(embed3);
                     
eco.AddToBalance(message.author.id, 200).then(l =>{ })
eco.SubtractFromBalance(user.id, 200).then(l => { })
    }          


}

module.exports.help = {
  name: "rob",
  aliases: ["Rob"],
  perm: "",
  role: "",
  group:"Economy"
}