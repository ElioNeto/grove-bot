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
    .setDescription(`<:incorreto:729451886683619438> **|** Você precisa ser um moderador para fazer isto!`)

    let a2 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Não hà nenhum cargo de mute setado!')

    let a3 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** É preciso me informar um usuário!')

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 

    const mute = db.get(`mute_${message.guild.id}`)
    if(!mute) return message.channel.send(a2)

    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!membro) return message.channel.send(a3)

    let a4 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** O membro ${membro} não está silenciado!`)

    let a5 = new Discord.MessageEmbed()
    .setDescription(`<:correto:729451917004242964> **|** O membro ${membro} aprendeu a falar novamente!`)

    if(!membro.roles.cache.has(mute)) return message.channel.send(a4)

    membro.roles.remove(mute)
    message.channel.send(a5)
}


exports.help = {
  name: 'unmute',
  aliases: ['desilenciar', 'dessilenciar']
}