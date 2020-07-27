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

    let embed = new Discord.MessageEmbed()
    .setTitle('**CONVITES**')
    .setDescription(`[<:acloud:737103573334097960> **| Entre no meu servidor**](https://discord.gg/drYKh7k)\n\n[<:nuvem:737103776552321164> **| Me adicione no seu servidor**](https://discordapp.com/oauth2/authorize?client_id=712785958231080990&scope=bot&permissions=8)`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   
    .setColor('RANDOM')

    message.channel.send(embed)

}

exports.help = {
  name: 'link',
  aliases: ['invite', 'convite', 'convites']
}