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
    .setDescription(`<:incorreto:737091863558750279> **|** Você precisa ser um moderador para fazer isto!`)

    let a2 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Por favor mencione o cargo a ser setado!')

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 
  
  let role = message.mentions.roles.first()

  let a3 = new Discord.MessageEmbed()
    .setDescription(`<:correto:737091697615568957> **|** Cargo setado: ${role}`)
  
  if(!role) return message.channel.send(a2)
  
  db.set(`role_${message.guild.id}`, role.id)
  
  message.channel.send(a3)
  
  
}

exports.help = {
  name:'setrole',
  aliases: []
}