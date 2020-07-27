const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms') 

exports.run = async (bot, message, args) => {

  var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let embedx = new Discord.MessageEmbed()

            .setTitle('**MANUTENÇÃO ATIVADA**')
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            .setDescription('A manutenção foi ativada pelo meu desenvolvedor! Todos meus comandos estão desativados no momento. Não há uma previsão para voltar.')
            .setTimestamp()   
      
    return message.channel.send(embedx)
      
    } 

    let a3 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Apenas membros oficias da equipe podem usar este comando!')

  if(!['577167173852594177', ''].includes(message.author.id)) return message.channel.send(a3)
  
  let a1 = new Discord.MessageEmbed()
  .setDescription("<:incorreto:737091863558750279> **|** Você precisa me informar um usuário!")

  var membro = message.mentions.users.first()
  if(!membro) return message.channel.send(a1)

  let a5 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Você precisa me informar o valor!')

  let value = args[1];

  let rep = await db.get(`rep_${membro.id}`)

  let a8 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** O valor precisa ser um número!')

  if(!value) return message.channel.send(a5)
  if(isNaN(value)) return message.channel.send(a8)

  let a2 = new Discord.MessageEmbed()
  .setDescription(`<:correto:737091697615568957> **|** Você setou a reputação de ${membro} para **${value}**`)

  if(rep === null) {
    db.set(`rep_${membro.id}`, 0)
  }

    db.set(`rep_${membro.id}`, value)
    message.channel.send(a2)

}

exports.help = {
  name: 'setrep',
  aliases: ['setreputation']
}