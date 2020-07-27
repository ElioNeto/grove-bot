const Discord = require('discord.js'); 
const ms = require('ms'); 
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

  let Timer = args[0]; 

  if (!args[0]){ 

      let embed = new Discord.MessageEmbed()
      .setDescription("<:incorreto:737091863558750279> **|** Você precisa me dar um tempo para te lembrar!")

      return message.channel.send({embed});
  }

  if (args[0] <= 0){

    let embed = new Discord.MessageEmbed()

      .setDescription("<:incorreto:737091863558750279> **|** O tempo precisa ser maior que zero!") 

      return message.channel.send({embed});
  }

  var razao = args.slice(1).join(" ");

  if(!razao) razao = ('Nenhuma razão definida.')

  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('**LEMBRETE <:patches:737316991500681316>**')
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .setDescription("Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\`\n\nRazão do lembrete: **${razao}**`)
  .setTimestamp()   

  message.channel.send({embed})

  setTimeout(function(){ 

      let embed = new Discord.MessageEmbed()
      .setTitle('**LEMBRETE <:patches:737316991500681316>**')
      .setColor('RANDOM')
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setDescription(`**BIP BIP BIP!\n\n${razao}**`)
      .setTimestamp()   

    message.reply({embed})

  }, ms(Timer));
}

exports.help = { 
    name: 'lembrar',
    aliases: ['lembrete']
}