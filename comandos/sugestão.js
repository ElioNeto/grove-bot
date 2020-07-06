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

      let a1 = new Discord.MessageEmbed()
      .setDescription('<:incorreto:729451886683619438> **|** Não há nenhum canal de sugestões setado!')

      return message.channel.send(a1);
    }  
  
  var canal = bot.channels.cache.get(chx)
  
  var sugestao = args.slice(0).join(' ');
  if(!sugestao){ 

    let a2 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Escreva a sua sugestão!`)

    return message.channel.send(a2)
  } else { 
      let embed = new Discord.MessageEmbed()
        .setTitle(`**SUGESTÃO <:sugestao:729483642073513994>**`)
        .setDescription(`**${sugestao}**`)
        .addField(`**Uso**`, `**Deixe sua sugestão digitando ${c.prefix}sugestao <sugestão>**`)
        .setColor('RANDOM')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()   
        
        canal.send({embed}).then(function (msg) { 
            msg.react("729451917004242964"); 
            msg.react("729451886683619438"); 
   })  
 }
}
exports.help = {
 name: 'sugestão',
    aliases: ['sugestao']
}