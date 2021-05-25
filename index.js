const {Client, Collection} = require("discord.js");
const client = new Client();
const { token, prefix } = require("./config.json");
const fs = require('fs');
client.commands = new Collection();
client.setMaxListeners(1000);
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

//informatiosn.json (base de données)
const dbdb = new FileSync("informations.json")
const db = low(dbdb)
db.defaults({Infos_serveur: []}).write()

//blacklist.json (base de données)
const blbl = new FileSync("blacklist.json")
const bl = low(blbl)
bl.defaults({Utilisateurs_blacklistés: []}).write()

//bienvenue.json (base dedonnées)
const aa = new FileSync("bienvenue.json")
const a = low(aa)
a.defaults({Infos: []}).write()

//status
client.on('ready', () => {
  console.log("PoliCore chargé.")
  const statuses = [
    () => `🌀・!phelp | Utilisateurs : ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} `,
    () => `🌀・!phelp | Version 1.1.0`,
    () => `🌀・!phelp | PoliCore`,
    () => `🌀・!phelp | Serveurs : ${client.guilds.cache.size} `,
  ];
  let i = 0;
  setInterval(() => {
    client.user.setActivity(`${statuses[i]()}`, {
      type: "PLAYING",
    });
    i = ++i % statuses.length;
  }, 1e4);
});

//handler
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(`Commande chargée : ${file}`)
}

client.on('message', async message => {
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot ) return;
  if(message.channel.type === 'dm' ) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  client.commands.get(command).execute(client, message, args);
});

//join du bot sur un serveur
client.on("guildCreate", guild => {
  let guildid = guild.id
  if(!a.get("Infos").find({id_du_serveur: guildid}).value()){
    a.get("Infos").push({id_du_serveur: guildid}).write()
  }
})

//message de Bienvenue
client.on("guildMemberAdd", (member) => {
  let guildid = member.guild.id
  if(!db.get("Infos_serveur").find({id_du_serveur: guildid}).value()) return console.log(member.id)
    console.log("j'ai trouvé l'id du serveur")
  let idsalonbienvenue = db.get("Infos_serveur").filter({id_du_serveur: guildid}).find("id_salon_bienvenue").value()
  let idbienvenue = Object.values(idsalonbienvenue)
  let msgbienvenue2 = db.get("Infos_serveur").filter({id_du_serveur: guildid}).find("msg_bienvenue").value()
  let channelbienvenue = member.guild.channels.cache.get(idbienvenue[1])
  channelbienvenue.send(msgbienvenue2[2])
})

//connection avec le token
client.login(token)
