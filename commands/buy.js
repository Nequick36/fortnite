const Discord = require("discord.js")
const eco = require("discord-economy")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
eco.FetchBalance(message.author.id).then(fbb => {
              let embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(x + "» Pogreška", "Morati odabrati role koji želite kupiti")
      .addField(check + "» Korišćenje", ".buy hulk")
      .addField("🏪» Shop", "Sve dostupne rolove možete vidjeti komandom .shop")
            .setThumbnail (message.author.displayAvatarURL)

  let item = message.content.split(" ").slice(1).join(" ")
if  (!item) return message.channel.send(embed);
  
  eco.FetchBalance(message.author.id).then(User => {
    if(item === 'bronze' || item === 'Bronze') {
    let role = message.guild.roles.find(role => role.id === '972984915958308884')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(x + "» Pogreška", "Vi nemate 5000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 5000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 5000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 5000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
     else if(item === 'silver' || item === 'Silver') {
    let role = message.guild.roles.find(role => role.id === '972984911998898216')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(x + "» Pogreška", "Vi nemate 5000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 5000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 5000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 5000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
  
  
     else if(item === 'golden' || item === 'Golden') {
    let role = message.guild.roles.find(role => role.id === '972984916801372290')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
      .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 5000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 5000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 5000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 5000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
  
  
  
  
     else if(item === 'veteran' || item === 'Veteran') {
    let role = message.guild.roles.find(role => role.id === '972984508620099646')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 5000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 5000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 5000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 5000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
  
         else if(item === 'major' || item === 'Major') {
    let role = message.guild.roles.find(role => role.id === '972984917426339922')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 7500 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 7500) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 7500).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 7500 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
         else if(item === 'cyborg' || item === 'Cyborg') {
    let role = message.guild.roles.find(role => role.id === '972984919208902706')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 10000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 10000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 10000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 10000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
       else if(item === 'captain' || item === 'Captain') {
    let role = message.guild.roles.find(role => role.id === '972984511040200804')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 15000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 15000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 15000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 15000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
  
         else if(item === 'hulk' || item === 'Hulk') {
    let role = message.guild.roles.find(role => role.id === '972984509442162688')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 20000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 20000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 20000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 20000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
  
       else if(item === 'flash' || item === 'Flash') {
    let role = message.guild.roles.find(role => role.id === '972984510125867098')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 25000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 25000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 25000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 25000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
   else if(item === 'warrior' || item === 'Warrior') {
    let role = message.guild.roles.find(role => role.id === '972984024479973447')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 30000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 30000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 30000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 30000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }       
  
  
  
  
  
  
  
  
  
  else if(item === 'marine' || item === 'Marine') {
    let role = message.guild.roles.find(role => role.id === '972999722501554197')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 40000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 40000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 40000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 40000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
  
  
   else if(item === 'air force' || item === 'Air Force' || item === "airforce" || item === "Airforce" || item === "AirForce") {
    let role = message.guild.roles.find(role => role.id === '972999730504282172')
          let embed67 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Već ste kupili <@&" + role.id + "> role/ulogu")
          .setThumbnail (message.author.displayAvatarURL)

    if(message.member.roles.has(role.id)) return message.channel.send(embed67)

      let embed68 = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(x + "» Pogreška", "Vi nemate 50000 " + bitcoin)
      .addField(money + "» Trenutno", fbb.balance + " " + bitcoin)
         .setThumbnail (message.author.displayAvatarURL)

    if(User.balance < 50000) return message.channel.send(embed68)
     
    eco.SubtractFromBalance(message.author.id, 50000).then(u => {
       let embed69 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setAuthor('CzvVesti | Buy', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
       .addField(check + "» Čestitamo", "Kupili ste <@&" + role.id + "> role")
      .addField(money + "» Trenutno", fbb.balance - 50000 + " " + bitcoin)
       .setThumbnail (message.author.displayAvatarURL)

       message.channel.send(embed69)
      message.member.addRole(role.id)
    })
  }
  
  
  
  
})
})

       
}
module.exports.help = {
    name: "buy",
  aliases: ['Buy'],
  perm: "",
  role: "",
  group:"Economy"
}