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
      .setColor('RANDOM')
      .setTitle("**LEMBRETE**")
      .setDescription("❌ **|** Você precisa me dar um tempo para te lembrar!")
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setTimestamp()   

      return message.reply({embed});
  }

  if (args[0] <= 0){

    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle("**❌ **|** ALERTA**")
      .setDescription("❌ **|** O tempo precisa ser maior que zero!")
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setTimestamp()   

      return message.reply({embed});
  }

  var razao = args.slice(1).join(" ");

  if(!razao) razao = ('Nenhuma razão definida.')

  let embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('**LEMBRETE 🕗**')
  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
  .setDescription("Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\`\n\nRazão do lembrete: **${razao}**`)
  .setTimestamp()   

  message.channel.send({embed})

  setTimeout(function(){ 

      let embed = new Discord.MessageEmbed()
      .setTitle('**LEMBRETE 🕗**')
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