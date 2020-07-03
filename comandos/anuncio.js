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

     if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('❌ **|** Você não possui a permissão de adminstrador.');
     
     message.channel.send(`Em qual canal você deseja enviar o anúncio?`).then(msg => {
          let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
          .on('collect', c => {
             canal = c.mentions.channels.first()
              if (!canal) {
                  message.reply('Mencione o canal a ser anunciado!')
              } else {
                  message.channel.send (`Qual a mensagem a ser anunciada?`).then(msg2 => {
                      let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max:  1})
                      .on('collect', c => {
                          desc = c.content

                          message.channel.send('Qual o titulo do seu anúncio?').then(msg3 => {
                              let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                              .on('collect', c => {
                                  title = c.content
                                
                                let embed = new Discord.MessageEmbed()
                                  .setColor('RANDOM')
                                  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
                                  .setTitle(`${title}`)
                                  .setDescription(`${desc}`)
                                  .setTimestamp()   
                                
                                message.channel.send(` **|** Você tem certeza que deseja enviar este anúncio no canal ${canal}?`).then(msg => {                                                                       
                                     msg.react('✅').then(() => msg.react('❌'))   
                                  
                                     const filter = (reaction, user) => { 
                                      return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id; 
                                      };
                                  
                                  msg.awaitReactions(filter, {max: 1}) 
    
                                     .then(collected => { 
      
                                     const reaction = collected.first();
    
                                      if (reaction.emoji.name === '✅') { 
                                      canal.send(`@everyone`, {embed})
                                      message.channel.bulkDelete(8)
                                        msg.delete()
          
                                      } else { 
                                    message.reply('❌ **|** Cancelado com sucesso.')
                                        msg.delete()
                                        message.channel.bulkDelete(8)
                                     }
                                       })
                                  })

                              })
                          })
                      })
                  })
              }
          })
     })
       

}

exports.help = {
    name: 'anuncio',
    aliases: ['anunciar']
}