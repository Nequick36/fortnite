const Discord = require("discord.js");
const eco = require("discord-economy");
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
  eco.Daily(message.author.id).then(d => {
//l.updated tells you if the user already claimed his/her daily yes or no.
               if (d.updated) {

eco.AddToBalance(message.author.id, 500).then(x => {
let embed = new Discord.RichEmbed()
.setColor("#00FF0C")
  .setAuthor('CzvVesti | Daily', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("🎁» Dnevna Nagrada", "Čestitamo uzeli ste dnevnu nagradu od 500 " + bitcoin)
  .addField(money + "» Trenutno Stanje Računa", x.newbalance + " " + bitcoin)
                   .setThumbnail (message.author.displayAvatarURL)

message.channel.send(embed);
                 })

               } else {
                 let embed2 = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Daily', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .addField("🎁» Dnevna Nagrada", "Već ste uzali svoju dnevnu nagradu")
  .addField("⌚» Preostalo Vremena", "Preostalo Vam je još " + d.timetowait + " do vaše dnevne nagrade!")
                 .setThumbnail (message.author.displayAvatarURL)

                 message.channel.send(embed2)
               }
           })
}

module.exports.help = {
  name: "daily",
  aliases: [],
  perm: "",
  role: "",
  group:"Economy"
}