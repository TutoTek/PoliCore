const Discord = require("discord.js");

module.exports = {
  name: 'embed',
  description: "fait parler le bot sous forme d'embed",
  async execute(client, message, args){
    message.delete()
    const contenu = args.slice(0).join(" ")
    let embedsayembed = new MessageEmbed()
    .setColor("#ff0005")
    .setDescription(`${contenu}`)
    .setFooter(`${message.author.username}#${message.author.discriminator}- (c)PoliCore | 2021.`)
    message.channel.send(embedsayembed)
  }
}
