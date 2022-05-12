const Discord = require("discord.js");
const eco = require("discord-economy")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.first()) {
 
      var output = await eco.Leaderboard({
        search: message.mentions.users.first().id
      })
 
    } else {
 
      eco.Leaderboard({
        limit: 10
      }).then(async users => { //make sure it is async
 
        var firstplace = await bot.fetchUser(users[0].userid) 
        var secondplace = await bot.fetchUser(users[1].userid)
        var thirdplace = await bot.fetchUser(users[2].userid) 
        var fourthplace = await bot.fetchUser(users[3].userid)
        var fifthplace = await bot.fetchUser(users[4].userid)
        var sixthplace = await bot.fetchUser(users[5].userid)
        var seventhplace = await bot.fetchUser(users[6].userid)
        var eigthplace = await bot.fetchUser(users[7].userid)
        var ninethplace = await bot.fetchUser(users[8].userid)
        var tenthplace = await bot.fetchUser(users[9].userid)

        
let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Top Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
.setThumbnail (message.author.displayAvatarURL)

  .addField(`1️⃣» ${firstplace.tag || 'None'} **|** ${users[0].balance || "None"} ` + bitcoin, 
            `2️⃣» ${secondplace.tag || 'None'} **|** ${users[1].balance || "None"} ` + bitcoin)
  .addField(`3️⃣» ${thirdplace.tag || 'None'} **|** ${users[2].balance || "None"} ` + bitcoin, 
            `4️⃣» ${fourthplace.tag || 'None'} **|** ${users[3].balance || "None"} ` + bitcoin)
  .addField(`5️⃣» ${fifthplace.tag || 'None'} **|** ${users[4].balance || "None"} ` + bitcoin, 
            `6️⃣» ${sixthplace.tag || 'None'} **|** ${users[5].balance || "None"} ` + bitcoin)
  .addField(`7️⃣» ${seventhplace.tag || 'None'} **|** ${users[6].balance || "None"} ` + bitcoin,
            `8️⃣» ${eigthplace.tag || 'None'} **|** ${users[7].balance || "None"} ` + bitcoin)
  .addField(`9️⃣» ${ninethplace.tag || 'None'} **|** ${users[8].balance || "None"} ` + bitcoin, 
            `🔟» ${tenthplace.tag || 'None'} **|** ${users[9].balance || "None"} ` + bitcoin)
        message.channel.send(embed3)
                                                          
      })
 
    }

}

module.exports.help = {
  name: "lb",
  aliases: ['leaderboard', 'topbal', 'baltop', "top"],
}
