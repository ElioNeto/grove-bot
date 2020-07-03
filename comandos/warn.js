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

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`❌ **|** Você não tem permissão de adminstrador.`)
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply(`❌ **|** Eu preciso ter a permissão de administrador para fazer isto!`); 
     
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.reply(`⚠️ **|** Mencione qual usuário deseja avisar, e por qual motivo!`)
    if (membro === message.member) return message.reply("❌ **|** Você não pode alertar você mesmo.");
    if (membro === message.bot) return message.reply("❌ **|** Você não pode alertar um bot.");

    let motivo = args.slice(1).join(" ")
    if(!motivo) motivo = ("Nenhum motivo especificado.");
  
  let chx = db.get(`punchannel_${message.guild.id}`);
  
    if(chx === null){
      return message.reply('❌ **|** Não há nenhum canal de punição setado!');
    }  

    
    var canal = bot.channels.cache.get(chx)
    let warns = await db.get(`warns_${membro.id}_${message.guild.id}`)

    let embed = new Discord.MessageEmbed()
    .setTitle('**WARN**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Membro: ${membro}\n\n Motivo: **${motivo}**\n\nWarns: **${warns}**`)
    .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   

    canal.send({embed})
    message.delete()

    if(warns === 3) {

          let embedKick = new Discord.MessageEmbed()
          .setColor('FF0000')
          .setTitle(`**MEMBRO EXPULSO**`)
          .setDescription(`\n\nMembro: ${membro}\n\nMotivo: **Tomou 3 warns no servidor.**`)
          .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
          .addField('OBSERVAÇÃO', `Ningúem mandou descumprir as regras do servidor!`)
          .setTimestamp()   
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

          membro.kick()
          canal.send(embedKick)

    } else if(warns === 5) {

           let embedBan = new Discord.MessageEmbed()
          .setColor('FF0000')
          .setTitle(`**MEMBRO BANIDO**`)
          .setDescription(`\n\nMembro: ${membro}\n\nMotivo: **Tomou 5 warns no servidor.**`)
          .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()   
          .addField('OBSERVAÇÃO', `Ningúem mandou descumprir as regras do servidor!`)
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

          membro.ban()
          canal.send(embedBan)
    }

    if(warns === null) {

      db.set(`warns_${membro.id}_${message.guild.id}`, 1)

    } else if(warns !== null) {

      db.add(`warns_${membro.id}_${message.guild.id}`, 1)
      
    }
    
}

exports.help = {
    name: 'warn',
    aliases: ['avisar', 'alertar']
}