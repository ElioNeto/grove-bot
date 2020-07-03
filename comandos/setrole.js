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
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`❌ **|** Você precisa ser um moderador para fazer isto!`); 
  
  let role = message.mentions.roles.first()
  
  if(!role) return message.reply('⚠️ **|** Por favor mencione o cargo a ser setado!')
  
  db.set(`role_${message.guild.id}`, role.id)
  
  message.channel.send(`✅ **|** Cargo setado: ${role}`)
  
  
}

exports.help = {
  name:'setrole',
  aliases: []
}