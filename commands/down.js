const Discord = require("discord.js");

module.exports = {
    name: 'down',
    description: "arrête le bot",
    async execute(client, message, args){
      message.delete()
      if(message.author.id === "698861684932214794"){
        let embedreponsedown = new MessageEmbed()
        .setColor("#ff0005")
        .setDescription(":zzz: | Je m'éteinds...")
        .setFooter("(c)PoliCore | 2021.")
        message.channel.send(embedreponsedown)
        client.destroy()
      }else{
        let embedreponsenopermissiondown = new MessageEmbed()
        .setColor("#ff0005")
        .setDescription(":x: | Vous n'avez pas la permission d'effectuer cette commande. Seul mon créateur peut l'executer.")
        .setFooter("(c)PoliCore | 2021.")
        message.channel.send(embedreponsenopermissiondown)
      }
    }
}
