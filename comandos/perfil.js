const Discord = require('discord.js')
const db = require('quick.db')
const c = require('../config.json')

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


    var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    var presence = []

    if(member.presence.status === 'online') {
      presence.push(`<:online:729460721963892826> Disponível`)
    }  

    else if(member.presence.status === 'idle') {
      presence.push(`<:ausente:729460709921915010> Ausente`)
    }

    else if(member.presence.status === 'dnd') {
      presence.push(`<:dnd:729460731619311678> Não perturbar`)
    }

    else if(member.presence.status === 'offline') {
      presence.push(`<:offline:729459670061678693> Invisível`)
    }
  
    var desc = await db.get(`desc_${member.id}`)  

    let rep = await db.get(`rep_${member.id}`)

    if(desc === null) desc = (`Nenhuma descrição setada, use \`${c.prefix}desc\` para setar sua descrição!`)

    if(rep === null) rep = db.set(`rep_${member.id}`, 0)

    let or = ('<a:veri:729443010827255919> **|** Grove Official Representative')
    let gc = ('<a:veri:729443010827255919> **|** Grove Creator')

    let emb = await db.get(`emb_${member.id}`)

    if(emb === null) emb = ('Nenhum emblema.')

    let color = await db.get(`color_${member.id}`)

    if(color === null) color = ('RANDOM')

    let image = await db.get(`image_${member.id}`)

    if(image === null) image = 'https://imgur.com/PMlyTgn.png'
     
    if(['389866221295763456'].includes(member.id)) {

      let embed1 = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username}`, member.user.displayAvatarURL({dynamic: true}))
        .setColor(color)
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setDescription(gc)
        .addField(`Descrição`, desc)
        .addField('Reputação', rep, true)
        .addField('Status', presence.join(' '), true)
        .addField('Emblemas', emb)
        .setImage(image)
        .setTimestamp()

        message.channel.send(embed1)
    }

    if(['577167173852594177'].includes(member.id)) {

      let embed2 = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username}`, member.user.displayAvatarURL({dynamic: true}))
        .setColor(color)
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setDescription(or)
        .addField(`Descrição`, desc)
        .addField('Reputação', rep, true)
        .addField('Status', presence.join(' '), true)
        .addField('Emblemas', emb)
        .setImage(image)
        .setTimestamp()

        message.channel.send(embed2) 
    }

    else if(!['577167173852594177', '389866221295763456'].includes(member.id)) {

    let embedE = new Discord.MessageEmbed()
        .setAuthor(`${member.user.username}`, member.user.displayAvatarURL({dynamic: true}))
        .setColor(color)
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .addField(`Descrição`, desc)
        .addField('Reputação', rep, true)
        .addField('Status', presence.join(' '), true)
        .addField('Emblemas', emb)
        .setImage(image)
        .setTimestamp()

        message.channel.send(embedE)
    }
}

  exports.help = {
    name: 'perfil',
    aliases: ['profile']
  }