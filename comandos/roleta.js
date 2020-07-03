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
        .setColor('RED')
        .setTitle('**ROLETA RUSSA**')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setDescription('Rodou o cartucho e você.. **MORREU**! :cry: ')
        .addField('**MAIS SORTE NA PRÓXIMA VEZ!**', `**A BALA FICOU NO CARTUCHO:** \`${random}\``)
        .setTimestamp()   
        message.channel.send({embed})
    }
    else{ 
        let embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('**ROLETA RUSSA**')
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setDescription('Roudou o cartucho e você.. **SOBREVIVEU**! :sweat_smile: ')
        .addField('**PARABÉNS**', `**A BALA FICOU NO CARTUCHO:** \`${random}\``)
        .setTimestamp()   
        message.channel.send({embed})
      }
}

exports.help = { 
    name: 'roleta',  
    aliases: ['roletarussa']
}