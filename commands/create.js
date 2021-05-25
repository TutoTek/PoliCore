//  const { MesssageEmbed } = require('discord.js');
// //nouveaute.json (base de données)
// const nouveau = new FileSync("informations.json")
// const nouv = low(nouveau)
// nouv.defaults({Infos: []}).write()

//  module.exports = {
//     name: 'create-saloninfo',
//     description: "Créer un salon qui affiche toute les nouveautés du bot",
//     async execute(client, message, args){
//         let idmember = message.author.id // récupération de l'ID de l'auteur du message
//         message.channel.send("`\`\`Choisissez le nom du channel pour les nouveautés du bot :`\`\`")
//         let filter = (message) => { return message.author.id == idmember; }
//         await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {
//             let newMessage = await collected.first();
//             let namedChannel = newMessage.content
//             //console.log(namedChannel)
//             let channelcree = message.guild.channels.create(namedChannel, {type: 'text'}).catch(err => {
//                 message.channel.send(':x: | Une erreur est survenue !' + err)
//             });
//             if(!nouv.get({Infos}).find(id_salon: channelcree))
//         }) //channel.id
//         //faut get l'id du channel de la ligne 18 :p
//     }
// } 