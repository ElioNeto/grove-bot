const Discord = require('discord.js'); 
const c = require('../config.json')
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

    var replies = ["Sim.", "Não.", "Posso dizer que sim.", "Acredito que não.", "Talvez, estou com dúvida!", "As vezes sim.", "As vezes não."]; 
    var result = Math.floor((Math.random() * replies.length)); 
    
    let duvida = args.slice(0).join(" ")
    if(!duvida) return message.reply('⚠️ **|** Você precisa perguntar algo ao sábio bot!')
  
    let embed = new Discord.MessageEmbed()
    
    .setColor('GOLD')
    .setTitle('**SÁBIO BOT**')
    .addField(`**PERGUNTA**`, `**${duvida}**`)
    .addField(`**RESPOSTA**`, `**${replies [result]}**`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   
    
    message.reply({embed})
}

exports.help = { 
    name: 'pergunta',
    aliases: ['perguntar', 'questionar']
}