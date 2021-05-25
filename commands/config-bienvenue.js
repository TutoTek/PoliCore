const Discord = require("discord.js");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

//informations.json (base dedonnées)
const aa = new FileSync("bienvenue.json")
const a = low(aa)

module.exports = {
  name: 'config-bienvenue',
  description: "lance la configuration du bot sur le serveur",
  async execute (client, message, args){
    let idmember = message.author.id
    message.delete()
    if(message.member.hasPermission("ADMINISTRATOR")){
      let embed1 = new MessageEmbed()
      .setColor("#ff0005")
      .setDescription("Bonjour, voulez vous activer le système de bienvenue ? (Y/N)")
      .setFooter("(c)PoliCore | 2021.")
      message.channel.send(embed1)
      let filter = (message) => { return message.author.id == idmember; }
      await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
        let newMessage = await collected.first(); 
        if(newMessage.content === "Y"){
          let embed3 = new MessageEmbed()
          .setColor("#ff0005")
          .setDescription("D'accord, veuillez renseigner l'id d'un salon où le message de bienvenue apparaitra.")
          .setFooter("(c)PoliCore | 2021.")
          message.channel.send(embed3)
          let filter = (message) => { return message.author.id == idmember; }
          await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
          let newMessage2 = await collected.first();
            let guildid = message.guild.id
            if(!a.get("Infos").find({id_du_salon: newMessage2})){
              a.get("Infos").push({id_du_salon: newMessage2}).write()
            }
          })
        }else if(newMessage.content === "N"){
          return;
        }else{
          let embed2 = new MessageEmbed()
          .setColor("#ff0005")
          .setDescription(":x: | Veuillez répondre par Y ou par N.")
          .setFooter("(c)PoliCore | 2021.")
          message.channel.send(embed2)
        }
      })
    }
  }
}