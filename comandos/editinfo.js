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
  .setDescription('<:incorreto:737091863558750279> **|** É preciso me informar sua nova descrição!')

  let a2 = new Discord.MessageEmbed()
  .setDescription('<:correto:737091697615568957> **|** Sua nova descrição foi setada!')

  var membro = message.author;

  let desc = args.slice(0).join(' ')

  if(!desc) return message.channel.send(a1)

  db.set(`desc_${membro.id}`, desc)

  message.channel.send(a2)

}

exports.help = {
  name: 'desc',
  aliases: ['editprofile', 'editarperfil', 'editinfo', 'descricao', 'descrição']
}