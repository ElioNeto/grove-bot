const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (bot, message, args) => {

  let a1 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Apenas membros da equipe superior podem usar esse comando!')

  if(!['389866221295763456'].includes(message.author.id)) return message.channel.send(a1)

  let a2 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar o tipo!')

  let a3 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar o usuário!')

  var membro = message.mentions.users.first()
  if(!membro) return message.channel.send(a3)

  let tipo = args[1]
  if(!tipo) return message.channel.send(a2)

  if(tipo.toLowerCase() == 'image') {

    let a4 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar a URL!')

    let valor1 = args[2]
    if(!valor1) return message.channel.send(a4)

    let a5 = new Discord.MessageEmbed()
    .setDescription(`<:correto:729451917004242964> **|** A imagem do usuário ${membro} foi setada para **${valor1}** com sucesso!`)

    db.set(`image_${membro.id}`, valor1)
    message.channel.send(a5)

  } else if(tipo.toLowerCase() == 'color') {

    let a6 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar a cor!')

    let valor2 = args.slice(2).join(' ').toUpperCase();
    if(!valor2) return message.channel.send(a6)

    let a7 = new Discord.MessageEmbed()
    .setDescription(`<:correto:729451917004242964> **|** A cor do usuário ${membro} foi setada para **${valor2}** com sucesso!`)

    db.set(`color_${membro.id}`, valor2)
    message.channel.send(a7)

  } else if(tipo.toLowerCase() == 'desc') {

    let a8 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar a descrição!')

    let valor3 = args[2]
    if(!valor3) return message.channel.send(a8)

    let a9 = new Discord.MessageEmbed()
    .setDescription(`<:correto:729451917004242964> **|** A descrição do usuário ${membro} foi setada para **${valor3}** com sucesso!`)

    db.set(`desc_${membro.id}`, valor3)
    message.channel.send(a9)

  } else {

    let a10 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** O tipo precisa ser image, color ou desc!')

    return message.channel.send(a10)
    
  }
}

exports.help = {
  name: 'setmod',
  aliases: ['setuser']
}