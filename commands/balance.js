const Discord = require("discord.js");
const eco = require("discord-economy");
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

      let user = message.mentions.users.first() || message.author;
                   eco.FetchBalance(user.id).then(x => {
    const embed = new Discord.RichEmbed()
            .setColor("GREEN")
   .setAuthor('CzvVesti | Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
   .addField("👤» Korisnik", `<@${user.id}>`)
   .addField(money + "» Trenutno", x.balance + " " + bitcoin)
   .setThumbnail(user.displayAvatarURL)
    return message.channel.send(embed);

})
}

module.exports.help = {
  name: "balance",
  aliases: ['wallet', 'bal', 'Bal', 'Balance'],
  perm: "",
  role: "",
  group:""
}
