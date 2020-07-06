const Discord = require('discord.js')
const moment = require('moment')
const c = require('../config.json')
const db = require('quick.db')

exports.run = async (bot, message, args)  => {
  
  let dias = 0;
  let semanas = 0;

  let uptime = ``;
  let totalSegundos = (bot.uptime / 1000);
  let horas = Math.floor(totalSegundos / 3600);
  totalSegundos %= 3600;
  let minutos = Math.floor(totalSegundos / 60);
  let segundos = Math.floor(totalSegundos % 60);

  if(horas > 23) {
      dias = dias + 1;
      horas = 0;
  }

  if (dias == 7){
  dias = 0;
  semanas = semanas +1;
  }

  if(semanas > 0){
      uptime += `${semanas} semanas, `;
  }

  if(minutos > 60) {
      minutos = 0;
  }

  uptime += `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  
   var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let embedx = new Discord.MessageEmbed()

            .setTitle('**MANUTENÇÃO ATIVADA**')
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            .setDescription('A manutenção foi ativada pelo meu desenvolvedor! Todos meus comandos estão desativados no momento. Não há uma previsão para voltar.')
            .setTimestamp()   
      
     return message.channel.send(embedx)
      
    } 
  
  let embed = new Discord.MessageEmbed()
  .setTitle('**MINHAS INFORMAÇÕES <:info:729476860060237895>**')
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .addField(`**<:config:729463779292610623> | Fui criado por**`, `\`patek#2433\``, true)
  .addField(`**<:servidores:729462514928058417> | Estou em**`, `\`${bot.guilds.cache.size}\` servidores`, true)
  .addField(`**<:pc:729460019111657503> | Com**`, `\`${bot.channels.cache.size}\` canais`, true)
  .addField(`**<:membros:729454785216118794> | Com**`, `\`${bot.users.cache.size}\` usuários`, true)
  .addField(`**<:data:729464516898979872> | Fui criado em**`, `\`${moment(bot.user.createdAt).format('LLL')}\``, true)
  .addField(`**<:ping:729476368177561702> | Meu ping está em**`, `\`${Math.round(bot.ws.ping)}\``, true)
  .addField(`**<:uptime:729477843070877797> | Estou online à**`, `\`${uptime}\``, true)
  .addField(`**<:discordjs:729461813657206936> | Livraria**`, `[discord.js](https://discord.js.org/#/)`, true)
  .addField(`**<:javascript:729486544406315058> | Linguagem**`, `[JavaScript](https://www.javascript.com/)`, true)
  .addField(`**<:nodejs:729461800797601794> | Base**`, `[NodeJS](https://nodejs.org/en/)`, true)
  .addField(`**<:comandos:729477049252708423> | Lista de comandos**`, `\`${c.prefix}ajuda\``, true)
  .addField(`**<:equipe:729455442677203025> | Suporte**`, `\`${c.prefix}suporte\``, true)
  .addField(`**<:server:729477402438402099> | Meu servidor**`, `[Entre no meu servidor](https://discord.gg/drYKh7k)`, true)
  .addField(`**<:add:729466473088679946> | Quero você**`, `[Me adicione no seu servidor](https://discordapp.com/oauth2/authorize?client_id=712785958231080990&scope=bot&permissions=8)`, true)
  .setTimestamp()   
  .setColor('RANDOM')
  
  message.channel.send({embed})
}

exports.help = {
  name: 'botinfo',
  aliases: ['info','infobot']
}