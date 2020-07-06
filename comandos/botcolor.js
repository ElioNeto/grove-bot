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
   .setDescription('<:incorreto:729451886683619438> **|** Você precisa me dizer a nova cor!')
   var membro = message.mentions.users.first();

   let image = args[1];
   if(!image) return message.channel.send(a1)

   let a2 = new Discord.MessageEmbed()
   .setDescription(`<:correto:729451917004242964> **|** Sua nova cor foi setada para **${image}** com sucesso!`)

    db.set(`image_${membro.id}`, image)
    message.channel.send(a2)
}

exports.help = {
name: '2020500',
aliases: []
}