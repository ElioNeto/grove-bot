const Discord = require('discord.js'); 
const c = require('../config.json')
const db = require("quick.db")

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
    .setDescription(`<:incorreto:737091863558750279> **|** Você precisa ser um moderador para fazer isto!`)
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 
 
  let chx = db.get(`patchannel_${message.guild.id}`);
  
    if(chx === null){

      let a2 = new Discord.MessageEmbed()
      .setDescription('<:incorreto:737091863558750279> **|** Não há nenhum canal de patches setado!')

      return message.channel.send(a2);
    }  
  
  var canal = bot.channels.cache.get(chx)
  
  var patch = args.slice(0).join(' ');
  if (!patch) { 

    let a3 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:737091863558750279> **|** Você precisa me informar o patch!`)

    return message.channel.send(a3)
  } else { 
      let embed = new Discord.MessageEmbed()
        .setTitle(`**PATCHES <:patches:737316991500681316>**`)
        .setDescription(`**${patch}**`)    
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()   
        .setColor('RANDOM')
      
      canal.send({embed})
      message.delete()
   }
}
exports.help = {
 name: 'patch',
    aliases: ['patches']
}