const Discord = require("discord.js");
const db = require('quick.db')
const ms = require('ms')

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
    let embedx5 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Você precisa ser um administrador para fazer isto!`)
  
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embedx5);

    let a1 = new Discord.MessageEmbed()
    .setDescription(`Em qual canal você deseja enviar o anúncio?`)

    let a2 = new Discord.MessageEmbed()
    .setDescription('Mencione o canal a ser anunciado!')

    let a3 = new Discord.MessageEmbed()
    .setDescription(`Qual a mensagem a ser anunciada?`)

    let a4 = new Discord.MessageEmbed()
    .setDescription(`Qual a mensagem a ser anunciada?`)

    let a5 = new Discord.MessageEmbed()
    .setDescription('Qual o titulo do seu anúncio?')

    let a6 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Cancelado com sucesso.')

    let a7 = new Discord.MessageEmbed()
    .setDescription('Em quanto tempo você quer que eu envie este anúncio?')
     
     message.channel.send(a1).then(msg => {
          let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
          .on('collect', c => {
             canal = c.mentions.channels.first()
              if (!canal) {
                  message.channel.send(a2)
              } else {
                  message.channel.send (a3).then(msg2 => {
                      let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max:  1})
                      .on('collect', c => {
                          desc = c.content

                          message.channel.send(a5).then(msg3 => {
                              let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                              .on('collect', c => {
                                  title = c.content

                                  message.channel.send(a7).then(msg4 => {
                                    let co = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                                    .on('collect', c => {
                                      Timer = c.content
                                
                                let a8 = new Discord.MessageEmbed()
                                .setDescription(`Você tem certeza que deseja enviar este anúncio no canal ${canal}?`)

                                message.channel.send(a8).then(msg => {                                                                       
                                     msg.react('729451917004242964').then(() => msg.react('729451886683619438'))   
                                  
                                     const filter = (reaction, user) => { 
                                      return ['729451917004242964', '729451886683619438'].includes(reaction.emoji.id) && user.id === message.author.id; 
                                      };
                                  
                                  msg.awaitReactions(filter, {max: 1}) 
    
                                     .then(collected => { 
      
                                     const reaction = collected.first();
    
                                      if (reaction.emoji.id === '729451917004242964') { 

                                        let a9 = new Discord.MessageEmbed()
                                        .setDescription(`<:correto:729451917004242964> **|** O anúncio será enviado no canal ${canal} em \`${ms(ms(Timer), {long: true})}\`!`)
                   
                                        message.channel.bulkDelete(9)
                                        message.channel.send(a9)  
                                        msg.delete()

                                        setTimeout(function() {

                                          let a9 = new Discord.MessageEmbed()
                                          .setDescription(`<:correto:729451917004242964> **|** O anúncio foi enviado no canal ${canal} com sucesso!`)

                                          let embed = new Discord.MessageEmbed()
                                          .setColor('RANDOM')
                                          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
                                          .setTitle(`${title}`)
                                          .setDescription(`${desc}`)
                                          .setTimestamp()   

                                          canal.send(`@everyone`, {embed})
                                          message.channel.send(a9)

                                        }, ms(Timer));   

                                      } else if(reaction.emoji.id === '729451886683619438') { 
                                        message.channel.send(a6)
                                        msg.delete()
                                        message.channel.bulkDelete(9)
                                     }
                                    })
                                  })
                                
                                
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
    name: 'proganuncio',
    aliases: ['proganunciar']
}