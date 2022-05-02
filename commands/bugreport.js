const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let suggestion = message.content.split(" ").slice(1).join(" ");
       if(!suggestion) return message.reply("Morate napisati problem!").then(msg => {
                message.delete({ timeout: 5000});
            })
        var suggest = new Discord.RichEmbed()
             .setAuthor("CzvVesti | Osoblje", message.author.avatarURL)
             .addField("Poslao: ", message.author.username)
             .addField("Bug Report", suggestion)
             .setFooter("CzvVesti | Admin Team", message.author.avatarURL)
             .setThumbnail(message.author.avatarURL)
             .setColor(0xFF0000)
        let suggestChannel = message.guild.channels.find(channel => channel.id === "970588784666218497")
        suggestChannel.send(suggest)
  message.author.delete()
}

module.exports.help = {
  name: "bugreport",
  aliases: ["bug-report", "bug", "bugrep"],
  description:".",
  perm: "",
  role: "",
  group: "Simple"
}
