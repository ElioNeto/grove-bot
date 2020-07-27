const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms') 

exports.run = async (bot, message, args) => {

  let a3 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Apenas membros oficias da equipe podem usar este comando!')

  if(!['389866221295763456', '449240801520779266'].includes(message.author.id)) return message.channel.send(a3)

  let a1 = new Discord.MessageEmbed()
  .setDescription("<:incorreto:737091863558750279> **|** Você precisa me informar um usuário!")

  var membro = message.mentions.users.first()
  if(!membro) return message.channel.send(a1)

  let emb = ('')

  let a2 = new Discord.MessageEmbed()
  .setDescription(`<:correto:737091697615568957> **|** Você adicionou ${emb} em ${membro} com sucesso!`)

  db.set(`emb_${membro.id}`, emb)
  message.channel.send(a2)

}

exports.help = {
  name: 'addemb',
  aliases: ['addemblema', 'adicionaremblema']
}