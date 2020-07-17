const Discord = require('discord.js')
const db = require('quick.db')

exports.run = (bot, message, args) => {

   let a1 = new Discord.MessageEmbed()
   .setDescription('<:incorreto:729451886683619438> **|** Você precisa ser um membro da equipe para fazer isto!')

   let a2 = new Discord.MessageEmbed()
   .setDescription('<:incorreto:729451886683619438> **|** Você precisa mencionar o usuário!')

   let membro = message.mentions.users.first()
   if(!membro) return message.channel.send(a2)
   
   if(!message.member.roles.cache.has('721545561198821447')) return message.channel.send(a1)

   message.channel.delete()
   db.set(`tickets_${membro.id}`, null)
}

exports.help = {
  name: 'close-chat',
  aliases: ['close-ticket', 'closechat', 'closeticket']
}