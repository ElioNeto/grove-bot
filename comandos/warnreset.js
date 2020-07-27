const Discord = require("discord.js")
const db = require("quick.db")

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

    let embedx5 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:737091863558750279> **|** Você precisa ser um administrador para fazer isto!`)
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embedx5);

    let embedX3 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:737091863558750279> **|** É preciso me informar o usuário!`)

    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.channel.send(embedX3);
    let warns = await db.get(`warns_${membro.id}_${message.guild.id}`)

    let embedx4 = new Discord.MessageEmbed()
    .setDescription(`<:correto:737091697615568957> **|** Os warns de ${membro} foram resetados!`)

    db.set(`warns_${membro.id}_${message.guild.id}`, 0)
    message.channel.send(embedx4)
}

exports.help = {
    name: 'resetwarn',
    aliases: ['warnreset', 'resetwarns']
}