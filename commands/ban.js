const Discord = require("discord.js");

module.exports = {
  name: 'ban',
  description: "permet de ban",
  async execute(client, message, args){
    if(message.member.hasPermission("ADMINISTRATOR")){
      message.delete()
      let mention = message.mentions.members.first();
      let reason = args.slice(1).join(" ")
      let embedreponsenonmentionne = new MessageEmbed()
      .setColor("#ff0005")
      .setDescription(":x: | Vous devez utiliser la syntaxe suivante : `ban @member raison`.")
      .setFooter("(c)PoliCore | 2021.")
      if(mention == undefined){
        message.channel.send(embedreponsenonmentionne);
      }else if(!reason){
        message.channel.send(embedreponsenonmentionne);
      }
      else{
        if(mention.bannable){
          mention.ban();
          let embed2 = new MessageEmbed()
          .setColor("#ff0005")
          .setDescription(`${mention.displayName} à été banni du serveur.\nRaison : ${reason}`)
          .setFooter("(c)PoliCore | 2021.")
          message.channel.send(embed2)
          let embed10 = new MessageEmbed()
          .setColor("#ff0005")
          .setTitle("Expulsion")
          .setDescription(`Vous venez de vous faire bannir du serveur **${guild.displayName}**\n__Raison :__\n${reason}`)
          .setFooter("(c)PoliCore | 2021.")
          message.mention.send(embed10)
        }
        else {
          let embedproblemeban = new MessageEmbed()
          .setColor("#ff0005")
          .setDescription(":x: | Il est impossible de bannir ce membre.")
          .setFooter("(c)PoliCore | 2021.")
          message.channel.send(embedproblemeban)
        }
      }
    }else if(!message.member.hasPermission("ADMINISTRATOR")){
      let embednopermission = new MessageEmbed()
      .setColor("#ff0005")
      .setDescription(":x: | Vous devez avoir la permission `ADMINISTRATOR` pour effectuer cette action.")
      .setFooter("(c)PoliCore | 2021.")
      message.channel.send(embednopermission)
    }
  }
}
