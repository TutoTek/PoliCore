const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball', //nom de la commande
    description: "donne une réponse aléatoire à une question", //à changer selon la commande
    async execute(client, message, args){
        var réponse = ["Oui", "Non", "Peut-être", "Peut-être pas", "C'est possible", "Ce n'est pas possible"]
        let embed = new MessageEmbed()
        .setColor("#ff0005")
        .setDescription(réponse[Math.floor(Math.random() * réponse.length)])
        .setFooter("(c)PoliCore | 2021.")
        message.reply(embed)
    }
}
