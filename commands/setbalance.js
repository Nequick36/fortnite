const Discord = require("discord.js")
const eco = require("discord-economy")
const money = "<:money:973150784025923654>"
const x = "<:xx:973150783870746634>"
const check = "<:check:973151719171190784>"
const bitcoin = "<:Bitcoin:971362942924783616>"

module.exports.run = async (bot, message, args) => {
    let developers = ['824799268270243891', '774046091334778921', '883794267007516682', '779433631088115762', 
'624275751449001985']
        let embed9 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Set Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
  .setThumbnail (message.author.displayAvatarURL)
  .addField(x + `» Nemate dozvolu da koristite ovu komandu`, "Ovu komandu mogu koristiti samo Developeri Bota") 
        .setThumbnail (message.author.displayAvatarURL)

  if(!developers.includes(message.author.id)) return message.channel.send(embed9)
  
          var user = message.mentions.users.first() || message.guild.members.get(args[0])

  let embed = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Set Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + `» Pogreška`, "Morate Tagovati Korisnika Kojem Želite Dodat Novac")
 .addField(check + `» Korišćenje`, ".setbalance @User#1991 100")
  .setThumbnail (message.author.displayAvatarURL)

       if (!user) return message.channel.send(embed)
  
    let amount = message.content.split(" ").slice(2).join(" ");
  let embed2 = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Set Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField(x + `» Pogreška`, "Morate Dodati Iznos Novca")
 .addField(check +  `» Korišćenje`, ".setbalance @User#1991 100")
  .setThumbnail (message.author.displayAvatarURL)

       if (!amount) return message.channel.send(embed2)

        


eco.SetBalance(user.id, amount).then(l =>{

                   eco.FetchBalance(user.id).then(x => {
                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("GREEN")
  .setAuthor('CzvVesti | Set Balance', 'https://i.imgur.com/iSbCziO.jpg' )
.setFooter(message.author.tag + " " , message.author.displayAvatarURL)
.setTimestamp()
 .addField("👤» Korisnik", user)
 .addField("🪙» Dodano", amount + " " + bitcoin)         
 .addField(money + `» Trenutno`, x.balance + " " + bitcoin)
                          .setThumbnail(message.author.displayAvatarURL)


                                                          
                     message.channel.send(embed3)
                 })})
}

module.exports.help = {
  name: "setbalance",
  aliases: ["setbal", "setmoney"],
  perm: "",
  role: "",
  group: "economy"
}
