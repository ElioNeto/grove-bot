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
  .addField(`💻 Nome do emoji`, emoji.name)
  .addField(`<:id:737316544299663381> ID do emoji`, emoji.id)
  .addField(`<:Calendario:737097284541612032> Criado em`, data, true)
  .addField('<:Pasta:737097569204699166> Tipo', animado, true)
  .addField(`<:Servidores:737101641655910501> Codificação`, `\\${emoji}`)
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