const Discord = require("discord.js");
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

    var membro = message.mentions.users.first() || message.author;

    let embed = new Discord.MessageEmbed()

    .setDescription("**[BAIXAR IMAGEM](" + membro.displayAvatarURL({dynamic: true}) + ")**")
    .setImage(membro.displayAvatarURL({dynamic: true}))
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(embed);

}

exports.help = {
    name: 'avatar',
    aliases: ['foto']
}