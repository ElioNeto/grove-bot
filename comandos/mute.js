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
    .setDescription(`<:incorreto:737091863558750279> **|** Você precisa ser um moderador para fazer isto!`)

    let a2 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Não hà nenhum cargo de mute setado!')

    let a3 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** É preciso me informar um usuário!')

    let a4 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Você não pode silenciar você mesmo!')

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(a1); 

    const mute = db.get(`mute_${message.guild.id}`)
    if(!mute) return message.channel.send(a2)

    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

     let a5 = new Discord.MessageEmbed()
    .setDescription(`<:correto:737091697615568957> **|** O membro ${membro} foi silenciado com sucesso!`)
    
    if(!membro) return message.channel.send(a3)
    if(membro === message.member) return message.channel.send(a4)

    membro.roles.add(mute)
    message.channel.send(a5)
}


exports.help = {
  name: 'mute',
  aliases: ['silenciar', 'mutar', 'silêncio']
}