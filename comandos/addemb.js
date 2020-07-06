const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms') 

exports.run = async (bot, message, args) => {

  let a3 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Apenas membros oficias da equipe podem usar este comando!')

  if(!['577167173852594177', '389866221295763456'].includes(message.author.id)) return message.channel.send(a3)

  let a1 = new Discord.MessageEmbed()
  .setDescription("<:incorreto:729451886683619438> **|** Você precisa me informar um usuário!")

  var membro = message.mentions.users.first()
  if(!membro) return message.channel.send(a1)

  let emb = ('<:developer:729455442631065751> <:grove:729708311527817246> <:nodejs:729461800797601794> <:discordjs:729461813657206936> <:javascript:729486544406315058> <:discord:729445842888425592> <a:nitro:729488118322954311> <:discordveri:729471223398137907>')

  let a2 = new Discord.MessageEmbed()
  .setDescription(`<:correto:729451917004242964> **|** Você adicionou ${emb} em ${membro} com sucesso!`)

  db.set(`emb_${membro.id}`, emb)
  message.channel.send(a2)

}

exports.help = {
  name: 'addemb',
  aliases: ['addemblema', 'adicionaremblema']
}