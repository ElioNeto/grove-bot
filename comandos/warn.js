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

    let a1 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Você precisa ser um expulsar membros para fazer isto!`)

    let a2 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Eu preciso ter a permissão de expulsar membros para fazer isto!`)

    let a3 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Mencione qual usuário deseja avisar, e por qual motivo!`)

    let a4 = new Discord.MessageEmbed()
    .setDescription("<:incorreto:729451886683619438> **|** Você não pode alertar você mesmo.")

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(a1)
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(a2); 
     
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.channel.send(a3)
    if (membro === message.member) return message.channel.send(a4);

    let motivo = args.slice(1).join(" ")
    if(!motivo) motivo = ("Nenhum motivo especificado.");
  
  let chx = db.get(`punchannel_${message.guild.id}`);
  
    if(chx === null){

      let a5 = new Discord.MessageEmbed()
      .setDescription('<:incorreto:729451886683619438> **|** Não há nenhum canal de punição setado!')

      return message.channel.send(a5);
    }  
    
    var canal = bot.channels.cache.get(chx)
    let warns = await db.get(`warns_${membro.id}_${message.guild.id}`)

    if(warns === null) warns = 0;

    let embedWarn = new Discord.MessageEmbed()
    .setTitle('**WARN <:ban:729462106721746946>**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`<:membros:729454785216118794> Membro: ${membro}\n\n<:trabalhador:729455442677203025> Motivo: **${motivo}**\n\n<:erro:729456202139828314> Warns: **${warns +1}**`)
    .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   
    .setColor('FF0000')

    canal.send(embedWarn)
    message.delete()

    if(warns === 2) {

          let embedKick = new Discord.MessageEmbed()
          .setColor('FF0000')
          .setTitle(`**MEMBRO EXPULSO <:ban:729462106721746946>**`)
          .setDescription(`\n\n<:membros:729454785216118794> Membro: ${membro}\n\n<:trabalhador:729455442677203025> Motivo: **Tomou 3 warns no servidor.**`)
          .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
          .addField('<:info:729476860060237895> Observação', `Ningúem mandou descumprir as regras do servidor!`)
          .setTimestamp()   
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

          membro.kick()
          canal.send(embedKick)

    } else if(warns === 4) {

           let embedBan = new Discord.MessageEmbed()
          .setColor('FF0000')
          .setTitle(`**MEMBRO BANIDO <:ban:729462106721746946>**`)
          .setDescription(`\n\n<:membros:729454785216118794> Membro: ${membro}\n\n<:trabalhador:729455442677203025> Motivo: **Tomou 5 warns no servidor.**`)
          .setThumbnail(membro.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()   
          .addField('<:info:729476860060237895> Observação', `Ningúem mandou descumprir as regras do servidor!`)
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