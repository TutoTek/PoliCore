const Discord = require("discord.js");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

//informations.json (base dedonnées)
const bb = new FileSync("blacklist.json")
const b = low(bb)

module.exports = {
    name: 'ad-blacklist', //nom de la commande
    description: "donne une réponse aléatoire à une question", //à changer selon la commande
    async execute(client, message, args){
        if(message.author.id === "698861684932214794"){
            let membrebl = args.slice(0).join(" ")
            if(!b.get("Utilisateurs_blacklistés").find({id_membre: membrebl}).value()){
                b.get("Utilisateurs_blacklistés").push({id_membre: membrebl}).write()
                let embed2 = new MessageEmbed()
                .setColor("#ff0005")
                .setDescription("L'utilisateur ayant pour identifiant " + membrebl + " a bien été blacklisté.")
                .setFooter("(c)PoliCore | 2021.")
                message.channel.send(embed2)
            }else{
                let embed = new MessageEmbed()
                .setColor("#ff0005")
                .setDescription(":x: | Ce membre est déjà dans la black-list.")
                .setFooter("(c)PoliCore | 2021.")
                message.channel.send(embed)
            }   
        }else{
            message.reply(":x:")
        }
    }
}