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

    let c1 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Eu preciso ter a permissão de criar webhooks!')

    if(!message.guild.me.hasPermission('MANAGE_WEBHOOKS')) return message.channel.send(c1)

    let embedx5 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:737091863558750279> **|** Você precisa ser um moderador para fazer isto!`)
  
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(embedx5);

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
    .setDescription('<:incorreto:737091863558750279> **|** Cancelado com sucesso.')
     
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
                                
                                let embed = new Discord.MessageEmbed()
                                  .setColor('RANDOM')
                                  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
                                  .setTitle(`${title} <a:sino:729452561031102494>`)
                                  .setDescription(`${desc}`)
                                  .setTimestamp()   
                                
                                let a8 = new Discord.MessageEmbed()
                                .setDescription(`Você tem certeza que deseja enviar este anúncio no canal ${canal}?`)

                                message.channel.send(a8).then(msg => {                                                                       
                                     msg.react('737091697615568957').then(() => msg.react('737091863558750279'))   
                                  
                                     const filter = (reaction, user) => { 
                                      return ['737091697615568957', '737091863558750279'].includes(reaction.emoji.id) && user.id === message.author.id; 
                                      };
                                  
                                  msg.awaitReactions(filter, {max: 1}) 
    
                                     .then(collected => { 

                                     canal.createWebhook(`${message.author.username}`, {avatar: message.author.avatarURL({dynamic:true}), reason: 'Criado por Grove'}).then(Webhook => {
                                       const reaction = collected.first();
    
                                       if (reaction.emoji.id === '737091697615568957') { 
                                       Webhook.send(`@everyone`, embed).then(() => {
                                         Webhook.delete()
                                       })
                                       message.channel.bulkDelete(8)
                                       msg.delete()
          
                                      } else { 
                                       message.channel.send(a6)
                                       msg.delete()
                                       message.channel.bulkDelete(8)
                                     }
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
    name: 'anuncio',
    aliases: ['anunciar']
}