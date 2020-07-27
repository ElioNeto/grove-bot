const Discord = require("discord.js");
const db = require('quick.db')

exports.run = async (bot, message, args) => {

  let a1 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Somente membros da equipe superior podem usar esse comando!')

  let a2 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Você precisa me informar o ID do servidor!')
  
  if(!['389866221295763456', '577167173852594177'].includes(message.author.id)) return message.channel.send(a1)

  const id = args.slice(0).join(' ')
  if(!id) return message.channel.send(a2)

  try {

    let a3 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Eu não estou nesse servidor!')

    const servidor = bot.guilds.cache.get(id).name
    if(!bot.guilds.cache.get(id)) return message.channel.send(a3)

    let a4 = new Discord.MessageEmbed()
    .setDescription(`<:correto:737091697615568957> **|** Eu sai do servidor **${servidor}** com sucesso!`)

    bot.guilds.cache.get(id).leave().then(() => {
      message.channel.send(a4)
    })
  }

  catch {

    let a5 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Não encontrei este servidor!')

    message.channel.send(a5)

  }
}

exports.help = {
  name: 'serverleave',
  aliases: ['svleave', 'exitserver']
}