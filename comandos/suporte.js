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
    .setDescription(`Cheque sua DM!\nCaso não chegue nada, verifique se suas mensagens de membros de servidores estão ativadas! Os usuários que utilizarem esse comando para "zoar" serão deverasmente punidos!`)

    message.channel.send(embed)

    let embedDev = new Discord.MessageEmbed()
    .setTitle('**SUPORTE**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setDescription(`:wave: **|** Olá ${message.author}\n\nVi que você usou o comando de suporte!\nE se você usou este comando, é porque tem interesse em entrar na minha equipe oficial certo? Para isso, você precisa cumprir alguns requisitos:\n\n<:developer:729455442631065751> **|** Desenvolvedores:\n\nTer maturidade dentro da equipe\nTer um pouco de conhecimento em Node Js\nTer um pouco de conhecimento na livraria discord.js\nTer um pouco de conhecimento em JavaScript\n\n<:equipe:729455442677203025> **|** Ajudantes:\n\nTer maturidade para lidar com problemas\nAceitar críticas construtivas\nSer bem ativo dentro do servidor\nNão desistir fácil, persistir\n\n<:emoji:729467612253126666> **|** Designers:\n\nConhecimento básico em programas de edição como Adobe\nTer tempo disponível para equipe quando precisar\nAceitar críticas construtivas\nCriatividade para imagens futuras de designer do bot/servidor\n\nSe você cumpre esses requisitos, ótimo, vamos para a próxima etapa, caso queira continuar reaja com <:correto:729451917004242964> e caso não queira continuar reaja com <:incorreto:729451886683619438>`)
    .setTimestamp()   

    message.member.send(embedDev).then(msg => {
      msg.react('729451917004242964').then(() => msg.react('729451886683619438'))

    let suporte = (reaction, usuario) => reaction.emoji.id === "729451917004242964" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(suporte, {max: 1});

    let cargo = new Discord.MessageEmbed()
    .setTitle('**CARGO**')
    .setDescription(`Agora é preciso que você escolha o cargo que você quer ficar na equipe clicando na reação correspondente!\n\n<:developer:729455442631065751> **|** Desenvolvedor\n<:equipe:729455442677203025> **|** Ajudante\n<:emoji:729467612253126666> **|** Designer`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()   
    coletor.on('collect', cp => {

    msg.edit(cargo).then(msg2 => {
      msg.react('729455442631065751').then(() => msg.react('729455442677203025')).then(() => msg.react('729467612253126666'))

       let carg = (reaction, usuario) => reaction.emoji.id === "729455442631065751" && usuario.id === message.author.id;
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

                       if(c.content.toLowerCase() === 'enviar') {
                         
                         var canal = bot.channels.cache.get('728689318302056558')

                         let embedEnviado = new Discord.MessageEmbed()
                         .setTitle('**FORMULÁRIO ENVIADO**')
                         .setDescription(`<:correto:729451917004242964> **|** Seu formulário foi enviado para análise com sucesso!\nEspere um representante de nossa equipe entrar em contato!`)
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
                         .setFooter(`ID do membro: ${message.author.id}`) 
                         .setTimestamp()

                         canal.send(embedFinalDev).then(msg => {
                           msg.react('729460721963892826').then(() => msg.react('729460709921915010')).then(() => msg.react('729460731619311678')).then(() => msg.react('729459670061678693'))

                           let online = (reaction, usuario) => reaction.emoji.id === "729460721963892826" && usuario.id;
                           let onli = msg.createReactionCollector(online, {max: 1});

                           let oNLINE = new Discord.MessageEmbed()
                           .setTitle('**FORMULÁRIO VISUALIZADO**')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:online:729460721963892826> **|** A equipe de analisadores visualizou seu formulário e você será contatado em breve!`)
                           .setColor('39FF14')
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           onli.on('collect', cp => {
                             message.author.send(oNLINE)
                           })

                           let ausente = (reaction, usuario) => reaction.emoji.id === "729460709921915010" && usuario.id;
                           let ausen = msg.createReactionCollector(ausente, {max: 1});

                           let aUSENTE = new Discord.MessageEmbed()
                           .setTitle('**ALERTA**') 
                           .setColor('FFFF00')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:ausente:729460709921915010> **|** A equipe de suporte não conseguiu entrar em contato com você! Veja se suas mensagens diretas estão ativadas!\nA equipe tentará entrar em contato com você em torno de 1 hora!`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           ausen.on('collect', cp => {
                             message.author.send(aUSENTE)
                           })

                           let donotd = (reaction, usuario) => reaction.emoji.id === "729460731619311678" && usuario.id;
                           let donot = msg.createReactionCollector(donotd, {max: 1});

                           let dND = new Discord.MessageEmbed()
                           .setTitle('**REPROVADO**') 
                           .setColor('FF0000')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:dnd:729460731619311678> **|** Você foi reprovado instantaneamente pois usou este comando para "zoar", se persistir você será bloqueado de usar este comando.`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           donot.on('collect', cp => {
                             message.author.send(dND)
                           })

                           let offline = (reaction, usuario) => reaction.emoji.id === "729459670061678693" && usuario.id;
                           let offli = msg.createReactionCollector(offline, {max: 1});

                           let oFFLINE = new Discord.MessageEmbed()
                           .setTitle('**SEM VAGAS**') 
                           .setColor('F0F8FF')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:offline:729459670061678693> **|** Desculpe-nos, mas estamos sem vagas para desenvolvedores!\nQuem sabe em uma próxima vez você não consiga entrar na equipe!`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           offli.on('collect', cp => {
                             message.author.send(oFFLINE)
                           })
                         })
                         
                           } else if(c.content.toLowerCase() === 'cancelar') {

                             let embedCancelado = new Discord.MessageEmbed()
                             .setTitle('**FORMULÁRIO CANCELADO**')
                             .setDescription('<:incorreto:729451886683619438> **|** Seu formulário foi cancelado com sucesso!')
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

  let carg1 = (reaction, usuario) => reaction.emoji.id === "729455442677203025" && usuario.id === message.author.id;
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

                              if(c.content.toLowerCase() === 'enviar') {
                                var canal = bot.channels.cache.get('728689318302056558')

                                let embedEnviadoa = new Discord.MessageEmbed()
                                .setTitle('**FORMULÁRIO ENVIADO**')
                                .setDescription(`<:correto:729451917004242964> **|** Seu formulário foi enviado para análise com sucesso!\nEspere um representante de nossa equipe entrar em contato!`)
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
                              .setFooter(`ID do membro: ${message.author.id}`)  
                              .setTimestamp()

                              canal.send(embedFinal).then(msg => {
                           msg.react('729460721963892826').then(() => msg.react('729460709921915010')).then(() => msg.react('729460731619311678')).then(() => msg.react('729459670061678693'))

                           let online = (reaction, usuario) => reaction.emoji.id === "729460721963892826" && usuario.id;
                           let onli = msg.createReactionCollector(online, {max: 1});

                           let oNLINE = new Discord.MessageEmbed()
                           .setTitle('**FORMULÁRIO VISUALIZADO**')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:online:729460721963892826> **|** A equipe de analisadores visualizou seu formulário e você será contatado em breve!`)
                           .setColor('39FF14')
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           onli.on('collect', cp => {
                             message.author.send(oNLINE)
                           })

                           let ausente = (reaction, usuario) => reaction.emoji.id === "729460709921915010" && usuario.id;
                           let ausen = msg.createReactionCollector(ausente, {max: 1});

                           let aUSENTE = new Discord.MessageEmbed()
                           .setTitle('**ALERTA**') 
                           .setColor('FFFF00')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:ausente:729460709921915010> **|** A equipe de suporte não conseguiu entrar em contato com você! Veja se suas mensagens diretas estão ativadas!\nA equipe tentará entrar em contato com você em torno de 1 hora!`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           ausen.on('collect', cp => {
                             message.author.send(aUSENTE)
                           })

                           let donotd = (reaction, usuario) => reaction.emoji.id === "729460731619311678" && usuario.id;
                           let donot = msg.createReactionCollector(donotd, {max: 1});

                           let dND = new Discord.MessageEmbed()
                           .setTitle('**REPROVADO**') 
                           .setColor('FF0000')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:dnd:729460731619311678> **|** Você foi reprovado instantaneamente pois usou este comando para "zoar", se persistir você será bloqueado de usar este comando.`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           donot.on('collect', cp => {
                             message.author.send(dND)
                           })

                           let offline = (reaction, usuario) => reaction.emoji.id === "729459670061678693" && usuario.id;
                           let offli = msg.createReactionCollector(offline, {max: 1});

                           let oFFLINE = new Discord.MessageEmbed()
                           .setTitle('**SEM VAGAS**') 
                           .setColor('F0F8FF')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:offline:729459670061678693> **|** Desculpe-nos, mas estamos sem vagas para ajudantes!\nQuem sabe em uma próxima vez você não consiga entrar na equipe!`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           offli.on('collect', cp => {
                             message.author.send(oFFLINE)
                           })
                         })

                          } else if(c.content.toLowerCase() === 'cancelar') {

                            let embedCanceladoa = new Discord.MessageEmbed()
                             .setTitle('**FORMULÁRIO CANCELADO**')
                             .setDescription('<:incorreto:729451886683619438> **|** Seu formulário foi cancelado com sucesso!')
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

   let carg2 = (reaction, usuario) => reaction.emoji.id === "729467612253126666" && usuario.id === message.author.id;
   let coletor5 = msg.createReactionCollector(carg2, {max: 1});

    let motivoD = new Discord.MessageEmbed()
    .setTitle('**ETAPA 1**')
    .setDescription(`Para esta primeira etapa, nos diga o motivo pela qual você quer entrar para nossa equipe como designer.`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    coletor5.on('collect', cp => {

      msg.edit(motivoD).then(msg1b => {
      let cm = msg1b.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
      .on('collect', c => {
        motivoDes = c.content 

        let etapa2b = new Discord.MessageEmbed()
        .setTitle('**ETAPA 2**')
        .setDescription(`Qual software você usa para criar seus projetos e o por que.`)
        .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()

        message.author.send(etapa2b).then(msg2b => {
          let cn = msg2b.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
          .on('collect', c => {
            programa = c.content

            let etapa3b = new Discord.MessageEmbed()
            .setTitle('**ETAPA 3**')
            .setDescription(`Quanto tempo de experiência em edição de imagens você tem?`)
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            .setTimestamp()

            message.author.send(etapa3b).then(msg3b => {
              let ct = msg3b.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
              .on('collect', c => {
                tempo = c.content

                let etapa4b = new Discord.MessageEmbed()
                .setTitle('**ETAPA 4**')
                .setDescription(`Você já fez algum projeto para outro servidor ou algo do gênero?`)
                .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
                .setTimestamp()

                message.author.send(etapa4b).then(msg4b => {
                  let cy = msg4b.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                  .on('collect', c => {
                   servidor = c.content

                   let etapa5b = new Discord.MessageEmbed()
                   .setTitle('**ETAPA 5**')
                   .setDescription(`Envie o link de algum projeto seu.`)
                   .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
                   .setTimestamp()

                   message.author.send(etapa5b).then(msg5b => {
                     let cr = msg5b.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                     .on('collect', c => {
                       imagem = c.content

                       let etapaFinal = new Discord.MessageEmbed()
                       .setTitle('**ETAPA FINAL**')
                       .setDescription('Formulário concluído com sucesso!\nVocê deseja enviar este formulário para análise? Se sim digite **enviar**, caso contrário digite **cancelar**')
                       .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                       .setTimestamp()

                      message.author.send(etapaFinal).then(msg6b => {
                       let mt = msg6b.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                        .on('collect', c => {
                              respostFinal = c.content

                              if(c.content.toLowerCase() === 'enviar') {
                                var canal = bot.channels.cache.get('728689318302056558')

                                let embedEnviadoa = new Discord.MessageEmbed()
                                .setTitle('**FORMULÁRIO ENVIADO**')
                                .setDescription(`<:correto:729451917004242964> **|** Seu formulário foi enviado para análise com sucesso!\nEspere um representante de nossa equipe entrar em contato!`)
                                .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                                .setTimestamp()

                               msg6b.edit(embedEnviadoa)

                              let etapa2Final = new Discord.MessageEmbed()
                              .setTitle('**ANÁLISE - DESIGNER**')
                              .addField(`Análise enviada por`, `\`${message.author.tag}\``)
                              .setThumbnail(message.author.avatarURL({dynamic: true}))
                              .addField(`Motivo para entrar na equipe`, motivoDes)
                              .addField(`Qual software usa para edição de imagens`, programa)
                              .addField(`Tempo de experiência em edição de imagens`, tempo)
                              .addField(`Se já fez algum projeto para outro servidor`, servidor)
                              .addField(`URL de algum projeto que já fez`, imagem)
                              .setFooter(`ID do membro: ${message.author.id}`) 
                              .setTimestamp()

                              canal.send(etapa2Final).then(msg => {
                           msg.react('729460721963892826').then(() => {
                           msg.react('729460721963892826').then(() => msg.react('729460709921915010')).then(() => msg.react('729460731619311678')).then(() => msg.react('729459670061678693'))

                           let online = (reaction, usuario) => reaction.emoji.id === "729460721963892826" && usuario.id;
                           let onli = msg.createReactionCollector(online, {max: 1});

                           let oNLINE = new Discord.MessageEmbed()
                           .setTitle('**FORMULÁRIO VISUALIZADO**')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:online:729460721963892826> **|** A equipe de analisadores visualizou seu formulário e você será contatado em breve!`)
                           .setColor('39FF14')
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           onli.on('collect', cp => {
                             message.author.send(oNLINE)
                           })

                           let ausente = (reaction, usuario) => reaction.emoji.id === "729460709921915010" && usuario.id;
                           let ausen = msg.createReactionCollector(ausente, {max: 1});

                           let aUSENTE = new Discord.MessageEmbed()
                           .setTitle('**ALERTA**') 
                           .setColor('FFFF00')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:ausente:729460709921915010> **|** A equipe de suporte não conseguiu entrar em contato com você! Veja se suas mensagens diretas estão ativadas!\nA equipe tentará entrar em contato com você em torno de 1 hora!`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           ausen.on('collect', cp => {
                             message.author.send(aUSENTE)
                           })

                           let donotd = (reaction, usuario) => reaction.emoji.id === "729460731619311678" && usuario.id;
                           let donot = msg.createReactionCollector(donotd, {max: 1});

                           let dND = new Discord.MessageEmbed()
                           .setTitle('**REPROVADO**') 
                           .setColor('FF0000')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:dnd:729460731619311678> **|** Você foi reprovado instantaneamente pois usou este comando para "zoar", se persistir você será bloqueado de usar este comando.`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           donot.on('collect', cp => {
                             message.author.send(dND)
                           })

                           let offline = (reaction, usuario) => reaction.emoji.id === "729459670061678693" && usuario.id;
                           let offli = msg.createReactionCollector(offline, {max: 1});

                           let oFFLINE = new Discord.MessageEmbed()
                           .setTitle('**SEM VAGAS**') 
                           .setColor('F0F8FF')
                           .setDescription(`:wave: **|** Olá ${message.author}\n\n<:offline:729459670061678693> **|** Desculpe-nos, mas estamos sem vagas para designers!\nQuem sabe em uma próxima vez você não consiga entrar na equipe!`)
                           .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                           .setTimestamp()
                           offli.on('collect', cp => {
                             message.author.send(oFFLINE)
                           })
                         })
                        })

                             } else if(c.content.toLowerCase() === 'cancelar') {

                              let embedCancelado2 = new Discord.MessageEmbed()
                               .setTitle('**FORMULÁRIO CANCELADO**')
                               .setDescription('<:incorreto:729451886683619438> **|** Seu formulário foi cancelado com sucesso!')
                               .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true})) 
                               .setTimestamp()

                             msg6b.edit(embedCancelado2)
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
    
   let cancel = (reaction, usuario) => reaction.emoji.id === "729451886683619438" && usuario.id === message.author.id;
   let coletor2 = msg.createReactionCollector(cancel, {max: 1});

   let cancelado = new Discord.MessageEmbed()
   .setTitle('**CANCELADO**')
   .setDescription('<:incorreto:729451886683619438> **|** Formulário cancelado com sucesso!')
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