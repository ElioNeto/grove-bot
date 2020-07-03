const Discord = require('discord.js');
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

    let embed = new Discord.MessageEmbed()
    .setDescription(`Cheque sua DM!\nCaso não chegue nada, verifique se suas mensagens de membros de servidores estão ativadas!`)

    message.channel.send(embed)

    let embedDev = new Discord.MessageEmbed()
    .setTitle('**SUPORTE**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`:wave: **|** Olá ${message.author}\n\nVi que você usou o comando de suporte!\nE se você usou este comando, é porque tem interesse em entrar na minha equipe oficial certo? Para isso, você precisa cumprir alguns requisitos:\n\nSer um usuário ativo do Discord\nTer maturidade para lidar com problemas\nTer um pouco de conhecimento em Node Js\nTer um pouco de conhecimento na livraria discord.js\nTer um pouco de conhecimento em JavaScript\n\nSe você cumpre esses requisitos, ótimo, vamos para a próxima etapa, caso queira continuar reaja com :white_check_mark: e caso não queira continuar reaja com :x:`)
    .setTimestamp()   

    message.member.send(embedDev).then(msg => {
      msg.react('✅').then(() => msg.react('❌'))

    let suporte = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(suporte, {max: 1});

    let cargo = new Discord.MessageEmbed()
    .setTitle('**CARGO**')
    .setDescription(`Agora é preciso que você escolha o cargo que você quer ficar na equipe clicnado na reação correspondente!\n\n:computer: > Desenvolvedor\n:hammer: > Ajudante`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   
    coletor.on('collect', cp => {

    msg.edit(cargo).then(msg2 => {
      msg.react('💻').then(() => msg.react('🔨'))

       let carg = (reaction, usuario) => reaction.emoji.name === "💻" && usuario.id === message.author.id;
       let coletor4 = msg.createReactionCollector(carg, {max: 1});
       
    let motivo = new Discord.MessageEmbed()
    .setTitle('**ETAPA 1**')
    .setDescription(`Para esta primeira etapa, nos diga o motivo pela qual você quer entrar para nossa equipe como desenvolvedor.`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   
    coletor4.on('collect', cp => {

    msg.edit(motivo).then(msg3 => {
      let mc = msg3.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
      .on('collect', c => {
       reasonDev = c.content

       let etapa2 = new Discord.MessageEmbed()
       .setTitle('**ETAPA 2**')
       .setDescription('O que é uma String?')
       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
       .setTimestamp()   

       message.author.send(etapa2).then(msg4 => {
         let mk = msg4.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
         .on('collect', c => {
           string = c.content

           let etapa3 = new Discord.MessageEmbed()
           .setTitle('**ETAPA 3**')
           .setDescription('Cite 5 operadores e o significado deles.')
           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
           .setTimestamp()   

           message.author.send(etapa3).then(msg5 => {
             let ml = msg5.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
             .on('collect', c => {
               operadores = c.content

               let etapa4 = new Discord.MessageEmbed()
               .setTitle('**ETAPA 4**')
               .setDescription('Qual a diferença entre const, var e let?')
               .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
               .setTimestamp()

               message.author.send(etapa4).then(msg6 => {
                 let mm = msg6.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                 .on('collect', c => {
                   diferenca = c.content

                   let etapa5 = new Discord.MessageEmbed()
                   .setTitle('**ETAPA 5**')
                   .setDescription('Para que serve o if, else e else if?')
                   .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                   .setTimestamp()             

                   message.author.send(etapa5).then(msg7 => {
                     let mn = msg7.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                     .on('collect', c => {
                       padrao = c.content

                       let finalDev = new Discord.MessageEmbed()
                       .setTitle('**ETAPA FINAL**')
                       .setDescription('Formulário concluído com sucesso!\nVocê deseja enviar este formulário para análise? Se sim digite **enviar**, caso contrário digite **cancelar**')
                       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                       .setTimestamp()

                       message.author.send(finalDev).then(msg8 => {
                         let mf = msg8.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                         .on('collect', c => {
                          resposta = c.content                  

                       if(c.content === 'enviar') {
                         
                         var canal = bot.channels.cache.get('728689318302056558')

                         let embedEnviado = new Discord.MessageEmbed()
                         .setTitle('**FORMULÁRIO ENVIADO**')
                         .setDescription(':white_check_mark: **|** Seu formulário foi enviado para análise com sucesso!')
                         .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                         .setTimestamp()

                         msg8.edit(embedEnviado)

                         let embedFinalDev = new Discord.MessageEmbed()
                         .setTitle('**ANÁLISE - DESENVOLVEDOR**')
                         .addField(`Análise enviada por`, `\`${message.author.tag}\``)
                         .setThumbnail(message.author.avatarURL({dynamic: true}))
                         .addField(`Motivo para entrar na equipe`, reasonDev)
                         .addField(`O que é uma String`, string)
                         .addField(`Operadores`, operadores)
                         .addField(`Diferença entre const, var e let`, diferenca)
                         .addField(`Função de if, else e else if`, padrao)
                         .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                         .setTimestamp()

                         canal.send(embedFinalDev)
                         
                           } else if(c.content === 'cancelar') {

                             let embedCancelado = new Discord.MessageEmbed()
                             .setTitle('**FORMULÁRIO CANCELADO**')
                             .setDescription(':x: **|** Seu formulário foi cancelado com sucesso!')
                             .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                             .setTimestamp()

                             msg8.edit(embedCancelado)
                           }
                         })
                       })                     
                     })
                   })
                 })
               })
             })
           })
         })
       })   
    })
  })
})

  let carg1 = (reaction, usuario) => reaction.emoji.name === "🔨" && usuario.id === message.author.id;
  let coletor3 = msg.createReactionCollector(carg1, {max: 1});

    let etapa1a = new Discord.MessageEmbed()
    .setTitle('**ETAPA 1**')
    .setDescription('Para esta primeira etapa, nos diga o motivo pela qual você quer entrar para nossa equipe como ajudante.')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
    .setTimestamp()
    coletor3.on('collect', cp => {

       msg.edit(etapa1a).then(msg1a => {
       let mq = msg1a.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
         .on('collect', c => {
          reasonHelp = c.content  

          let etapa2a = new Discord.MessageEmbed()
          .setTitle('**ETAPA 2**')     
          .setDescription('Caso um usuário não esteja conseguindo utilizar um comando por erro da pessoa, o que você faria?')
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))  
          .setTimestamp()

          message.author.send(etapa2a).then(msg2a => {
            let mw = msg2a.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
            .on('collect', c => {
              duvida1 = c.content

              let etapa3a = new Discord.MessageEmbed()
              .setTitle('**ETAPA 3**')     
              .setDescription('Caso um usuário não esteja conseguindo utilizar um comando por erro do bot, o que você faria?')
              .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))  
              .setTimestamp()

              message.author.send(etapa3a).then(msg3a => {
                let mw = msg3a.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                .on('collect', c => {
                  duvida2 = c.content

                  let etapa4a = new Discord.MessageEmbed()
                  .setTitle('**ETAPA 4**')
                  .setDescription('Se um usuário descobrisse um erro grave no bot, o que você faria?')
                  .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))  
                  .setTimestamp()

                  message.author.send(etapa4a).then(msg4a => {
                    let me = msg4a.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                      duvida3 = c.content

                      let etapa5a = new Discord.MessageEmbed()
                      .setTitle('**ETAPA 5**')
                      .setDescription('Caso um usuário xingasse a equipe, criticando o bot, o que você faria?')
                      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))  
                      .setTimestamp()

                      message.author.send(etapa5a).then(msg5a => {
                        let mr = msg5a.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                        .on('collect', c => {
                          duvida4 = c.content

                          let embedFinal = new Discord.MessageEmbed()
                          .setTitle('**ETAPA FINAL**')
                          .setDescription('Formulário concluído com sucesso!\nVocê deseja enviar este formulário para análise? Se sim digite **enviar**, caso contrário digite **cancelar**')
                          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                          .setTimestamp()

                          message.author.send(embedFinal).then(msg6a => {
                            let mt = msg6a.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                              respostaFinal = c.content

                              if(c.content === 'enviar') {
                                var canal = bot.channels.cache.get('728689318302056558')

                                let embedEnviadoa = new Discord.MessageEmbed()
                                .setTitle('**FORMULÁRIO ENVIADO**')
                                .setDescription(':white_check_mark: **|** Seu formulário foi enviado para análise com sucesso!')
                                .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                                .setTimestamp()

                               msg6a.edit(embedEnviadoa)

                              let embedFinal = new Discord.MessageEmbed()
                              .setTitle('**ANÁLISE - AJUDANTE**')
                              .addField(`Análise enviada por`, `\`${message.author.tag}\``)
                              .setThumbnail(message.author.avatarURL({dynamic: true}))
                              .addField(`Motivo para entrar na equipe`, reasonHelp)
                              .addField(`Caso um usuário não consiga utilizar um comando por erro próprio`, duvida1)
                              .addField(`Caso um usuário não consiga utilizar um comando por erro do bot`, duvida2)
                              .addField(`Caso um usuário descubra um erro grave`, duvida3)
                              .addField(`Caso um usuário criticasse o bot`, duvida4)
                              .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                              .setTimestamp()

                              canal.send(embedFinal)

                          } else if(c.content === 'cancelar') {

                            let embedCanceladoa = new Discord.MessageEmbed()
                             .setTitle('**FORMULÁRIO CANCELADO**')
                             .setDescription(':x: **|** Seu formulário foi cancelado com sucesso!')
                             .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                             .setTimestamp()

                             msg6a.edit(embedCanceladoa)

                              }
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}) 
    
   let cancel = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
   let coletor2 = msg.createReactionCollector(cancel, {max: 1});

   let cancelado = new Discord.MessageEmbed()
   .setTitle('**CANCELADO**')
   .setDescription('❌ **|** Formulário cancelado com sucesso!')
   .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
   .setTimestamp()
   coletor2.on("collect", cp => {

   msg.edit(cancelado)

    })
  })
}

exports.help = {
    name: 'suporte',
    aliases: ['suport', 'equipe']
  }