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
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa mencionar um usuário!')

  let a2 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me dizer o que falar!')

   var membro = message.mentions.users.first()
   if(!membro) return message.channel.send(a1)

   let texto = args.slice(1).join(' ')
   if(!texto) return message.channel.send(a2)

   message.channel.createWebhook(`${membro.username}`, {avatar: membro.avatarURL({dynamic: true}), reason: 'Criado por Grove'}).then(Webhook => {
     Webhook.send(texto).then(() => {
       Webhook.delete()
     })
   })
}

exports.help = {
  name: 'say',
  aliases: ['sayuser', 'falar']
}