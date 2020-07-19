const Discord = require("discord.js");
const moment = require("moment"); 
moment.locale('pt-BR')
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

  let a1 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar o nome do emoji!')

  if (!args[0]) return message.channel.send(a1)

  let servidor = message.guild.name

  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);
  if(!emoji) return message.channel.send(a1)
  const data = moment(emoji.createdAt).format("LLL")

  let animado = emoji.animated ? 'Animado':'Não animado'

  let a2 = new Discord.MessageEmbed()
  .setTitle(`**INFORMAÇÕES DO EMOJI <:info:729476860060237895>**`)
  .addField(`<:pc:729460019111657503> Nome do emoji`, emoji.name)
  .addField(`<:id:729455876582277270> ID do emoji`, emoji.id)
  .addField(`<:data:729464516898979872> Criado em`, data, true)
  .addField('<:folder:734243612241559552> Tipo', animado, true)
  .addField(`<:cpu:730254692042407986> Codificação`, `\\${emoji}`)
  .setThumbnail(emoji.url)
  .setColor('RANDOM')
  .setTimestamp()
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

  message.channel.send(a2)
  
};
exports.help = {
name: 'emoji',
aliases: ['emojiinfo']
}