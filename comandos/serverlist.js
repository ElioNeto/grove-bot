const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (bot, message, args) => {
  if (!['389866221295763456', '577167173852594177'].includes(message.author.id)) return message.reply('❌ **|** Apenas membros oficiais da equipe podem usar esse comando!')

  let embed = new Discord.MessageEmbed()
  .setTitle('**SERVIDORES <:servidores:729462514928058417>**')
  .setDescription(bot.guilds.cache.map(a => `${a.name} - \`${a.owner.user.tag}\``))
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()

  message.channel.send(embed)
}

exports.help = {
  name: 'serverlist',
  aliases: ['lista', 'listserver', 'server', 'servers', 'servidores']
}