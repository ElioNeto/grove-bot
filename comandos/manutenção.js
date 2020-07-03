const { MessageEmbed } = require('discord.js')
const db = require ('quick.db')

exports.run = async (bot, message, args) => {

    let embedDev = new MessageEmbed()
    .setTitle('**MANUTENÇÃO**')
    .setDescription("❌ **|** Apenas meu desenvolvedor pode usar esse comando.")
    .setTimestamp()
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

    let embedDev1 = new MessageEmbed()
    .setTitle("**MANUTENÇÃO**")
    .setDescription("❌ **|** É preciso me informar o status com on ou off.")
    .setTimestamp()
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

    if(!args[0]) return message.channel.send(embedDev1)
  
    
    if (!['389866221295763456', '577167173852594177'].includes(message.author.id)) {
    return message.channel.send(embedDev)
        .then(msg => msg.delete({ timeout: 10000}))
    
    } else {
      
        if(args[0] === 'off') {
          
            let embedon = new MessageEmbed()
            
            .setTitle('**MANUTENÇÃO**')
            .setDescription('Manutenção **DESATIVADA**\nAgora meus comandos estão funcionando perfeitamente.')
            .setTimestamp()
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

            db.set(`manutenção`, true)
            
            message.channel.send(embedon)

        } else if(args[0] === 'on') {
          
            let embedoff = new MessageEmbed()
            
            .setTitle('**MANUTENÇÃO**')
            .setDescription('Manutenção **ATIVADA**\nA partir de agora nenhum comando meu irá funcionar.')
            .setTimestamp()     
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            
            db.set(`manutenção`, null)

            message.channel.send(embedoff)
        }
    }
}
exports.help = { 
  name: 'manutenção',
  aliases: ['manutencao']
}