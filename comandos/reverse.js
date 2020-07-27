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
    .setDescription('<:incorreto:737091863558750279> **|** É preciso me informar um texto para eu reverter!')
    
  try {

    if(!args[0]) return message.channel.send(a1)
    const str = args.join(' ');

    let a3 = new Discord.MessageEmbed()
    .setDescription(str.split('').reverse().join(''))
    
    let msg = await message.channel.send(a3);
  }

  catch (err) {

    let a2 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:737091863558750279> **|** Ocorreu um erro!\n\n **${err}**`)

    message.channel.send(a2)
  }
}

exports.help = {
  name: 'reverse',
  aliases: ['reverter', 'reverso']
}