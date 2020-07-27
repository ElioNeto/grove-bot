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

    let embed = new Discord.MessageEmbed()

    .setDescription("**[CLIQUE AQUI PARA BAIXAR IMAGEM <:download:737355720764424244>](" + message.guild.iconURL({dynamic: true}) + ")**")
    .setImage(message.guild.iconURL({size: 1024, dynamic: true}))
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

    message.channel.send(embed);

}

exports.help = {
    name: 'servericon',
    aliases: ['ícone', 'icon']
}