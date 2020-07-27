const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

  let a1 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Eu preciso ter a permissão de criar canais!')

  let a2 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Você precisa mencionar um usuário!')
  
  if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(a1)
  
  let other_user = message.mentions.members.first()
  
  if(!other_user) return message.channel.send(a2)
  
  message.guild.channels.create(`${message.author.username}-${other_user.user.username}`, {
    permissionOverwrites: [
      {
        id: message.guild.id, 
        deny: ["VIEW_CHANNEL", "SEND_MESSAGES"] 
      },
      {
        id: message.author.id, 
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
      },
      {
        id: other_user.user.id, 
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"] 
      }
    ]
  }).then(async c => {

    let a3 = new Discord.MessageEmbed()
    .setDescription('<:correto:737091697615568957> **|** O canal foi criado com sucesso!')
    
    message.channel.send(a3)
    
    let web1 = await c.createWebhook(message.author.username, { avatar: message.author.avatarURL()})
    let web2 = await c.createWebhook(other_user.user.username, { avatar: other_user.user.avatarURL()})
    
    db.set(`traduction_system_channels_${c.id}`, {user1: message.author.id, user2: other_user.user.id})
    db.set(`traduction_system_channels_${c.id}_web${message.author.id}`, {id: web1.id, token: web1.token})
    db.set(`traduction_system_channels_${c.id}_web${other_user.user.id}`, {id: web2.id, token: web2.token})

    let a4 = new Discord.MessageEmbed()
    .setDescription(`<a:texto:737103192160075898> **|** ${message.author} me informe o seu idioma!`)

    let a5 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Você precisa me informar com português ou inglês!')
    
    message.channel.send(a4).then(async m => {
      
      let coletor = await message.channel.createMessageCollector(m => m.author.id === message.author.id, {max:1})
      
      coletor.on('collect', async coletado => {    
        if(coletado.content.toLowerCase() === "português") {      
        db.set(`users_${message.author.id}`, {idioma: 'PT'})

        let b3 = new Discord.MessageEmbed()
        .setDescription(`<:correto:737091697615568957> **|** ${message.author} seu idioma foi definido para Português!`)

        message.channel.send(b3)
          
        } else if(coletado.content.toLowerCase() === "inglês") {        
          db.set(`users_${message.author.id}`, {idioma: 'EN'})

        let b4 = new Discord.MessageEmbed()
        .setDescription(`<:correto:737091697615568957> **|** ${message.author} seu idioma foi definido para Inglês!`)

        message.channel.send(b4)
          
        } else if(coletado.content.toLowerCase() !== "inglês" || (coletado.content.toLowerCase() !== "português")) return message.channel.send(a5);     
      })     
    })

    let a6 = new Discord.MessageEmbed()
    .setDescription(`<a:texto:737103192160075898> **|** ${other_user} me informe o seu idioma!`)

    let a7 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Você precisa me informar com português ou inglês!')
    
    message.channel.send(a6).then(async m => {
      
      let coletor = await message.channel.createMessageCollector(m => m.author.id === other_user.user.id, {max:1})
      
      coletor.on('collect', async coletado => {
        
        if(coletado.content.toLowerCase() === "português") {      
        db.set(`users_${other_user.user.id}`, {idioma: 'PT'})

        let b1 = new Discord.MessageEmbed()
        .setDescription(`<:correto:737091697615568957> **|** ${other_user} seu idioma foi definido para Português!`)

        message.channel.send(b1)
          
        } else if(coletado.content.toLowerCase() === "inglês") {         
          db.set(`users_${other_user.user.id}`, {idioma: 'EN'})

          let b2 = new Discord.MessageEmbed()
         .setDescription(`<:correto:737091697615568957> **|** ${other_user} seu idioma foi definido para Inglês!`)

          message.channel.send(b2)
          
        } else if(coletado.content.toLowerCase() !== "inglês" || (coletado.content.toLowerCase() !== "português")) return message.channel.send(a7);  
      })
    })
  }) 
}

exports.help = {
  name: 'translatechat',
  aliases: ['chattranslate']
}