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
    .setDescription(`<:incorreto:729451886683619438> **|** Você precisa ser um moderador para fazer isto!`)

    let a2 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Por favor mencione o canal a ser setado!')

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 
  
  let channel = message.mentions.channels.first()

    let a3 = new Discord.MessageEmbed()
    .setDescription(`<:correto:729451917004242964> **|** Canal de punições setado em: ${channel}`)
  
  if(!channel) return message.channel.send(a2)
  
  db.set(`punchannel_${message.guild.id}`, channel.id)
  
  message.channel.send(a3)
  
}

exports.help = {
  name:'setpunishments',
  aliases: []
}