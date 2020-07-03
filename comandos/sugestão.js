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
 
  let chx = db.get(`sugchannel_${message.guild.id}`);
  
    if(chx === null){
      return message.channel.send('❌ **|** Não há nenhum canal de sugestões setado!');
    }  
  
  var canal = bot.channels.cache.get(chx)
  
  var sugestao = args.slice(0).join(' ');
  if(!sugestao){ 
    return message.reply(`⚠️ **|** Escreva a sua sugestão!`)
  } else { 
      let embed = new Discord.MessageEmbed()
        .setTitle(`**SUGESTÃO :mailbox_with_no_mail:**`)
        .setDescription(`**${sugestao}**`)
        .addField(`**Uso**`, `**Deixe sua sugestão digitando ${c.prefix}sugestao <sugestão>**`)
        .setColor('RANDOM')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()   
        
        canal.send({embed}).then(function (msg) { 
            msg.react("👍"); 
            msg.react("👎"); 
   })  
 }
}
exports.help = {
 name: 'sugestão',
    aliases: ['sugestao']
}