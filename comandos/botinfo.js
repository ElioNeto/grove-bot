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
  .setTitle('**MINHAS INFORMAÇÕES**')
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .addField(`**✍️ | Fui criado por**`, `\`patek#2433\``, true)
  .addField(`**🔧 | Estou em**`, `\`${bot.guilds.cache.size}\` servidores`, true)
  .addField(`**💻 | Com**`, `\`${bot.channels.cache.size}\` canais`, true)
  .addField(`**👥 | Com**`, `\`${bot.users.cache.size}\` usuários`, true)
  .addField(`**📅 | Fui criado em**`, `\`${moment(bot.user.createdAt).format('LLL')}\``, true)
  .addField(`**📡 | Meu ping está em**`, `\`${Math.round(bot.ws.ping)}\``, true)
  .addField(`**😴 | Estou online à**`, `\`${uptime}\``, true)
  .addField(`**🗒️ | Lista de comandos**`, `\`${c.prefix}ajuda\``, true)
  .addField(`**⚖️ | Suporte**`, `\`${c.prefix}suporte\``, true)
  .addField(`**🔨 | Meu servidor**`, `[Entre no meu servidor](https://discord.gg/drYKh7k)`, true)
  .addField(`**🎓 | Quero você**`, `[Me adicione no seu servidor](https://discordapp.com/oauth2/authorize?client_id=712785958231080990&scope=bot&permissions=8)`, true)
  .setTimestamp()   
  
  message.channel.send({embed})
}

exports.help = {
  name: 'botinfo',
  aliases: ['info','infobot']
}