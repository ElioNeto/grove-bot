const { MessageEmbed } = require('discord.js')
const db = require ('quick.db')

exports.run = async (bot, message, args) => {

    let embedDev = new MessageEmbed()
    .setDescription("<:incorreto:737091863558750279> **|** Apenas meu desenvolvedor pode usar esse comando.")

    let embedDev1 = new MessageEmbed()
    .setDescription("<:incorreto:737091863558750279> **|** É preciso me informar o status com on ou off.")

    if(!args[0]) return message.channel.send(embedDev1)
    
    if (!['389866221295763456', '449240801520779266'].includes(message.author.id)) {
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