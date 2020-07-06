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

  let a1 = new Discord.MessageEmbed()
  .setDescription("<:incorreto:729451886683619438> **|** Você precisa me informar um usuário!")

  var membro = message.mentions.users.first()
  if(!membro) return message.channel.send(a1)

  let a2 = new Discord.MessageEmbed()
  .setDescription(`<:correto:729451917004242964> **|** Você adicionou 1 reputação em ${membro}`)

  let a3 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você não pode adicionar reputação a si mesmo!')

  let rep = db.get(`rep_${membro.id}`)

  if(membro === message.author) return message.channel.send(a3)

  let timeout = 1.8e+6

  if(rep === null) {
    db.set(`rep_${membro.id}`, 0)
  }

  let repe = await db.fetch(`repe_${message.author.id}`)

  if(repe !== null && timeout - (Date.now() - repe) > 0){

    let time = ms(timeout - (Date.now() - repe)); 

    let a4 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Você só pode adicionar outra reputação em: **${time.minutes}m** **${time.seconds}s**`)

    message.channel.send(a4)

  } else {

    db.add(`rep_${membro.id}`, 1)
    message.channel.send(a2)
    db.set(`repe_${message.author.id}`, Date.now())

  }  
}

exports.help = {
  name: 'addrep',
  aliases: ['addreputation', 'adicionarreputação', 'adicionarrep']
}