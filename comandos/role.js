const Discord = require('discord.js')
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
    .setDescription('<:incorreto:737091863558750279> **|** Não há nenhum cargo setado.')

   let role = db.get(`role_${message.guild.id}`)

   let a2 = new Discord.MessageEmbed()
    .setDescription(`<:correto:737091697615568957> **|** Você ganhou o cargo <@&${role}> com sucesso!`)

  if(role === null){
    message.channel.send(a1)
  } else {
    message.member.roles.add(role)
    message.channel.send(a2) 
  } 
}

exports.help = {
  name: 'role',
  aliases: []
}