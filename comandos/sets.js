const Discord = require("discord.js")
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
  
    const sets = [];
  
    let chx = db.get(`welchannel_${message.guild.id}`);
    let chx2 = db.get(`godchannel_${message.guild.id}`);
    let chx3 = db.get(`sugchannel_${message.guild.id}`);
    let chx4 = db.get(`punchannel_${message.guild.id}`);
    let chx5 = db.get(`patchannel_${message.guild.id}`);
    let chx6 = db.get(`logchannel_${message.guild.id}`);

    var goodbye = bot.channels.cache.get(chx2)
    var welcome = bot.channels.cache.get(chx)
    var sugestion = bot.channels.cache.get(chx3)
    var punishments = bot.channels.cache.get(chx4)
    var patches = bot.channels.cache.get(chx5)
    var logs = bot.channels.cache.get(chx6)
    const role = db.get(`role_${message.guild.id}`)
    const mute = db.get(`mute_${message.guild.id}`)
    
    if(chx === null){
      sets.push('<:incorreto:729451886683619438> **|** Canal de bem-vindos não está setado')
    } else {
      sets.push(`<:correto:729451917004242964> **|** Canal de bem-vindos está setado em: ${welcome}`)
    }
    
    if(chx2 === null){
      sets.push('<:incorreto:729451886683619438> **|** Canal de adeus não está setado')
    } else {
      sets.push(`<:correto:729451917004242964> **|** Canal de adeus está setado em: ${goodbye}`)
    }
  
    if(chx3 === null){
      sets.push('<:incorreto:729451886683619438> **|** Canal de sugestões não está setado')
    } else {
      sets.push(`<:correto:729451917004242964> **|** Canal de sugestões está setado em: ${sugestion}`)
    }
  
    if(chx4 === null){
      sets.push('<:incorreto:729451886683619438> **|** Canal de punições não está setado')
    } else {
      sets.push(`<:correto:729451917004242964> **|** Canal de punições está setado em: ${punishments}`)
    }
  
    if(chx5 === null){
      sets.push('<:incorreto:729451886683619438> **|** Canal de patches não está setado')
    } else {
      sets.push(`<:correto:729451917004242964> **|** Canal de patches está setado em: ${patches}`)
    }
  
   if(chx6 === null){
     sets.push('<:incorreto:729451886683619438> **|** Canal de logs não está setado')
   } else {
      sets.push(`<:correto:729451917004242964> **|** Canal de logs está setado em: ${logs}`)
   }

    if(mute === null){
     sets.push('<:incorreto:729451886683619438> **|** Não há nenhum cargo de mute setado')
   } else {
     sets.push(`<:correto:729451917004242964> **|** Cargo de mute setado: <@&${mute}>`)
   }
 
  
   if(role === null){
     sets.push('<:incorreto:729451886683619438> **|** Não há nenhum cargo setado')
   } else {
     sets.push(`<:correto:729451917004242964> **|** Cargo setado: <@&${role}>`)
   }
  
    let embed = new Discord.MessageEmbed()
 
    .setTitle('**SETS DO SERVIDOR**')
    .setColor('RANDOM')
    .setFooter('Grove • Todos direitos reservados', bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`${sets.join('\n')}`)
    .setTimestamp()   
 
    message.channel.send({embed})
}

exports.help = {
  name:'sets',
  aliases: []
}