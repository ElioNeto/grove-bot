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
    .setDescription('<:incorreto:729451886683619438> **|** Você precisa ser um moderador para fazer isto!')

    let a2 = new Discord.MessageEmbed()
    .setDescription('<:correto:729451917004242964> **|** Canal de sugestões deletado com sucesso!')

     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 
  
   db.delete(`sugchannel_${message.guild.id}`);
   message.channel.send(a2)
  
}

exports.help = {
  name: 'deletesugestion',
  alises: []
}