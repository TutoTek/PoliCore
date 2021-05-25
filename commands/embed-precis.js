const Discord = require("discord.js")

module.exports = {
    name: 'embed-precis', 
    description: "permet la création d'un embed précis", 
    async execute(client, message, args){
        let idmember = message.author.id
        let embed2 = new MessageEmbed()
        .setColor("#ff0005")
        .setDescription(":gear: | Création d'un embed personnalisé\nQuel titre voulez vous ?")
        .setFooter("(c)PoliCore |2021.")
        message.channel.send(embed2)
        let filter = (message) => { return message.author.id == idmember; }
        await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
            let newMessage2 = await collected.first();
            let embed3 = new MessageEmbed()
            .setColor("#ff0005")
            .setDescription(":gear: | Création d'un embed personnalisé\nQuel sera le contenu de votre embed ?")
            .setFooter("(c)PoliCore | 2021.")
            message.channel.send(embed3)
            let filter = (message) => { return message.author.id == idmember; }
            await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
                let newMessage3 = await collected.first();
                let embed = new MessageEmbed()
                .setColor("#ff0005")
                .setDescription(":gear: | Création d'un embed personnalisé\nQuel sera la couleur de votre embed (merci de rentrer une valeur héxadécimale (#000000)) ?")
                .setFooter("(c)PoliCore | 2021.")
                message.channel.send(embed)
                let filter = (message) => { return message.author.id == idmember; }
                await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
                    let newMessage4 = await collected.first();
                    let embed4 = new MessageEmbed()
                    .setColor(`${newMessage4}`)
                    .setTitle(newMessage2)
                    .setDescription(newMessage3)
                    .setFooter(`${message.author.username}#${message.author.discriminator} - (c)PoliCore | 2021.`)
                    message.channel.send(embed4)
                })
            })
        })
    }
}