const Discord = require("discord.js"); 
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

    var random = Math.floor(Math.random() * 6); 
    if (random === 2){ 

        let embed = new Discord.MessageEmbed()
        .setColor('FF0000')
        .setTitle('**ROLETA RUSSA**')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setDescription('Rodou o cartucho e você.. **MORREU**! :cry: ')
        .addField('Mais sorte na próxima vez!', `A bala ficou no cartucho: **${random}**`)
        .setTimestamp()   
        message.channel.send({embed})
    }
    else{ 
        let embed = new Discord.MessageEmbed()
        .setColor('39FF14')
        .setTitle('**ROLETA RUSSA**')
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setDescription('Roudou o cartucho e você.. **SOBREVIVEU**! :sweat_smile: ')
        .addField('Parabéns', `A bala ficou no cartucho: **${random}**`)
        .setTimestamp()   
        message.channel.send({embed})
      }
}

exports.help = { 
    name: 'roleta',  
    aliases: ['roletarussa']
}