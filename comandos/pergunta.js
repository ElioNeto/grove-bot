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

    let a1 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Você precisa perguntar algo ao sábio bot!')
    
    if(!duvida) return message.channel.send(a1)
  
    let embed = new Discord.MessageEmbed()
    
    .setColor('GOLD')
    .setTitle('**SÁBIO BOT <:bot:729463406578499605>**')
    .addField(`**PERGUNTA**`, `**${duvida}**`)
    .addField(`**RESPOSTA**`, `**${replies [result]}**`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setThumbnail('https://images-ext-1.discordapp.net/external/vT6b83STxP3A2w8QDGbFFrb2uCnxjtf1-VmLyAzQjEg/https/findicons.com/files/icons/1700/2d/512/8_ball.png')
    .setTimestamp()   
    
    message.channel.send({embed})
}

exports.help = { 
    name: 'pergunta',
    aliases: ['perguntar', 'questionar']
}