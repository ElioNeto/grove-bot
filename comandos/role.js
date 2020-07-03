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
   
   let role = db.get(`role_${message.guild.id}`)
  
  if(role === null){
    message.reply('❌ **|** Não há nenhum cargo setado.')
  } else {
    message.member.roles.add(role)
    message.reply(`✅ **|** Você ganhou o cargo <@&${role}> com sucesso!`) 
  } 
}

exports.help = {
  name: 'role',
  aliases: []
}