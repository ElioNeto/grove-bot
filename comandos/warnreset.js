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
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ **|** Você precisa ser um administrador para fazer isto!");

    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!membro) return message.reply("❌ **|** É preciso me informar o usuário!");
    let warns = await db.get(`warns_${membro.id}_${message.guild.id}`)

    db.set(`warns_${membro.id}_${message.guild.id}`, 0)
    message.channel.send(`✅ **|** Os warns de ${membro} foram resetados!`)
}

exports.help = {
    name: 'resetwarn',
    aliases: ['warnreset', 'resetwarns']
}