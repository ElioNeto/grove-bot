const Discord = require('discord.js'); 
const c = process.env.PREFIX
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

    
    let c1 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Eu preciso ter a permissão de criar webhooks!')

    if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send(c1)
 
  let chx = db.get(`sugchannel_${message.guild.id}`);
  
    if(chx === null){

      let a1 = new Discord.MessageEmbed()
      .setDescription('<:incorreto:729451886683619438> **|** Não há nenhum canal de sugestões setado!')

      return message.channel.send(a1);
    }  
  
  var canal = bot.channels.cache.get(chx)

  let a8 = new Discord.MessageEmbed()
  .setDescription(`<:correto:729451917004242964> **|** Sua sugestão foi enviada no canal ${canal} com sucesso!`)
  
  var sugestao = args.slice(0).join(' ');
  if(!sugestao){ 

    let a2 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Escreva a sua sugestão!`)

    return message.channel.send(a2)

  } else { 
    canal.createWebhook(`${message.author.username}`, {avatar: message.author.avatarURL({dynamic: true}), reason: 'Criado por Grove'}).then(Webhook => {
      let embed = new Discord.MessageEmbed()
        .setTitle(`**SUGESTÃO :incoming_envelope:**`)
        .setDescription(`**${sugestao}**`)
        .setThumbnail('https://cdn.discordapp.com/emojis/729483642073513994.png?v=1')
        .setColor('RANDOM')
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()   

        message.channel.send(a8)
        Webhook.send(embed).then(() => {
          Webhook.delete()
     })    
   })  
 }
}
exports.help = {
 name: 'sugestão',
    aliases: ['sugestao', 'sugerir']
}