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
   
   let item = args[0];
   var random = Math.floor(Math.random() * 3); 

  let a1 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:737091863558750279> **|** Você precisa me informar com pedra, papel, ou tesoura')

   if(!item) return message.channel.send(a1)

   if(args[0].toLowerCase() === 'tesoura') {

     if(random === 0) {
       let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**PEDRA 🥌**')
       .setDescription(`Você jogou **${item}** e **PERDEU!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     }

     if(random === 1) {
        let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**PAPEL 📃**')
       .setDescription(`Você jogou **${item}** e **GANHOU!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     }

     if(random === 2) {
        let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**TESOURA ✂️**')
       .setDescription(`Você jogou **${item}** e **EMPATAMOS!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     }
   } 

       if(args[0].toLowerCase() === 'papel') {

     if(random === 0) {
       let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**PEDRA 🥌**')
       .setDescription(`Você jogou **${item}** e **GANHOU!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     }

     if(random === 1) {
        let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**PAPEL 📃**')
       .setDescription(`Você jogou **${item}** e **EMPATAMOS!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     }

     if(random === 2) {
        let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**TESOURA ✂️**')
       .setDescription(`Você jogou **${item}** e **PERDEU!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     } 
  }

     if(args[0].toLowerCase() === 'pedra') {

     if(random === 0) {
       let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**PEDRA 🥌**')
       .setDescription(`Você jogou **${item}** e **EMPATAMOS!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     }

     if(random === 1) {
        let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**PAPEL 📃**')
       .setDescription(`Você jogou **${item}** e **PERDEU!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     }

     if(random === 2) {
        let embed = new Discord.MessageEmbed()
       .setColor('RANDOM')
       .setTitle('**TESOURA ✂️**')
       .setDescription(`Você jogou **${item}** e **GANHOU!**`)
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))

       message.channel.send(embed)
     } 
   }
}

exports.help = {
  name: 'jokenpô',
  aliases: ['jokenpo']
}