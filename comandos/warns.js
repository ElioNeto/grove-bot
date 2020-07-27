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

    let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
    if (!membro) membro = message.author.id
    let warns = await db.get(`warns_${membro.id}_${message.guild.id}`)

    if(warns === null) warns = 0;

    let embedX2 = new Discord.MessageEmbed()
    .setDescription(`<:pessoas:737094140264841257> **|** O membro **${membro}** tomou **${warns}** warn neste servidor!`)

    let embedX1 = new Discord.MessageEmbed()
    .setDescription(`<:pessoas:737094140264841257> **|** O membro **${membro}** tomou **${warns}** warns neste servidor!`)

    if(warns === 1) return message.channel.send(embedX2)

    else return message.channel.send(embedX1)
}

exports.help = {
    name: 'warns',
    aliases: ['avisos', 'alertas']
}