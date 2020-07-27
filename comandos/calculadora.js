const Discord = require('discord.js');
const math = require('mathjs');
const c = require('../config.json')
const ms = require('ms');
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
    .setDescription('<:incorreto:737091863558750279> **|** É preciso me informar a conta!')

  var thumb = ('https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/calculator-icon.png')  
  var conta = args.slice(0).join(' ');
  if (!conta) return message.channel.send(a1);
  
  let embed = new Discord.MessageEmbed()
    
  .setTitle(`**CALCULADORA**`)
  .setColor('RANDOM')
  .addField(`**Conta**`, `**${conta}**`)
  .addField(`**Resultado**`, `**${math.evaluate(conta)}**`)
  .setThumbnail(thumb)
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .setTimestamp()

  message.channel.send(embed)

}

exports.help = {
  name: 'calc',
  aliases: ['conta', 'calculadora', 'calcular']
}