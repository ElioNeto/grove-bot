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
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`❌ **|** Você precisa ser um moderador para fazer isto!`); 
 
  let chx = db.get(`patchannel_${message.guild.id}`);
  
    if(chx === null){
      return message.channel.send('❌ **|** Não há nenhum canal de patches setado!');
    }  
  
  var canal = bot.channels.cache.get(chx)
  
  var patch = args.slice(0).join(' ');
  if (!patch) { 
    return message.reply(`⚠️ **|** Escreva o patch!`)
  } else { 
      let embed = new Discord.MessageEmbed()
        .setTitle(`**PATCHES 💼**`)
        .setDescription(`**${patch}**`)    
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()   
      
      canal.send({embed})
      message.delete()
   }
}
exports.help = {
 name: 'patch',
    aliases: ['patches']
}