const Discord = require("discord.js");
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

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`❌ **|** Você precisa ser um moderador para fazer isto!`); 

  let embedbi = new Discord.MessageEmbed()
    .setTitle("**BLOCK INVITE**")
    .setDescription("❌ **|** É preciso me informar o status com on ou off.")
    .setTimestamp()
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

    if(!args[0]) return message.channel.send(embedbi)

    if(args[0] === 'on') {

      let embedon = new Discord.MessageEmbed()
      .setTitle('**BLOCK INVITE**')
      .setDescription('Block invite **ATIVADO**\nA partir de agora ningúem poderá enviar convites de outros servidores!')
      .setTimestamp()     
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            
      let bi = db.set(`blockinvite_${message.guild}`, true)
      message.channel.send(embedon)
    } 

    else if(args[0] === 'off') {

      let embedoff = new Discord.MessageEmbed()
      .setTitle('**BLOCK INVITE**')
      .setDescription('Block invite **DESATIVADO**\nA partir de agora todos poderão enviar convites de outros servidores!')
      .setTimestamp()     
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            
      let bi = db.set(`blockinvite_${message.guild}`, null)
      message.channel.send(embedoff)
    } 
}

exports.help = {
  name: 'blockinvite',
  aliases: ['blockinvites']
}