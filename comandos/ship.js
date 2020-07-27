const Discord = require('discord.js')
const db = require('quick.db')

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
  .setDescription('<:incorreto:737091863558750279> **|** Você precisa me informar um usuário!')

  var membro = message.mentions.users.first()
  if(!membro) return message.channel.send(a1)

  var love = Math.floor(Math.random() * 100)

  let amor = 0

  if(love == 100) amor = 1
  else if(love >= 80 && love < 100) amor = 2
  else if(love >= 60 && love < 80) amor = 3
  else if(love >= 40 && love < 60) amor = 4
  else if(love >= 20 && love < 40) amor = 5
  else if(love >= 0 && love < 20) amor = 6

  var loveEmbed = new Discord.MessageEmbed()
      .setTitle('**TESTE DE AMOR <:love:737092622224719883>**')
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setColor('RANDOM')

  switch (amor) {
    case 1:
      loveEmbed.setDescription(`No teste deu **${love}%**\n${message.author} e ${membro} deviam se casar!`)
      message.channel.send(loveEmbed)
      break;

    case 2:
      loveEmbed.setDescription(`No teste deu **${love}%**\n${message.author} e ${membro} se amam de verdade!`)
      message.channel.send(loveEmbed)
      break;

    case 3:
      loveEmbed.setDescription(`No teste deu **${love}%**\n${message.author} e ${membro} se amam!`)
      message.channel.send(loveEmbed)
      break;

    case 4:
      loveEmbed.setDescription(`No teste deu **${love}%**\n${message.author} e ${membro} se gostam um pouquinho!`)
      message.channel.send(loveEmbed)
      break;

    case 5:
      loveEmbed.setDescription(`No teste deu **${love}%**\n${message.author} e ${membro} são apenas amigos!`)
      message.channel.send(loveEmbed)
      break;

    case 6:
      loveEmbed.setDescription(`No teste deu **${love}%**\n${message.author} e ${membro} não se gostam!`)
      message.channel.send(loveEmbed)
      break;
  }
}

exports.help = {
  name: 'ship',
  aliases: ['shippar', 'shipar']
}