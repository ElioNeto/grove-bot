const Discord = require('discord.js');
const c = require('../config.json') 
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

     let embeddm = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**LISTA DE COMANDOS <:comandos:729477049252708423>**')
     .setDescription('<:correto:729451917004242964> **|** Enviei a lista de comandos para você na DM!')
     .addField('<:info:729476860060237895> Observação', 'Se não chegar nada verifique se suas mensagens de membros de servidores estão ativadas!')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .setTimestamp()   

     message.channel.send(embeddm)

    let embed1 = new Discord.MessageEmbed()
    .setTitle('**LISTA DE COMANDOS <:comandos:729477049252708423>**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setColor('RANDOM')
    .addField('**Comandos de moderação: <:ban:729462106721746946>**', `\`kick, ban, mute, warn...\``)
    .addField('**Comandos de configurações: <:config:729463779292610623>**', `\`setwelcome, setmute, setlogs...\``)
    .addField('**Comandos de diversão: <:game:729466498300772363>**', `\`jokenpô, perguntar, avatar...\``)
    .addField('**Comandos úteis: <:emoji:729467612253126666>**', `\`clima, calcular, sugestão...\``)
    .addField('**Comandos social <:membros:729454785216118794>**', `\`perfil, editimage, desc...\``)

     message.member.send(embed1).then(msg => {
       msg.react('729462106721746946').then(() => msg.react('729463779292610623')).then(() => msg.react('729466498300772363')).then(() => msg.react('729467612253126666')).then(() => msg.react('729454785216118794')).then(() => msg.react('730955576489541642'))
       
      let mod = (reaction, usuario) => reaction.emoji.id === "729462106721746946" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(mod);

      let moderacao = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE MODERAÇÃO <:ban:729462106721746946>**')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .addField(`\`${c.prefix}warn <user> [reason]\``, 'Para dar warn')
     .addField(`\`${c.prefix}warns <user>\``, 'Para ver os warns de um usuário')
     .addField(`\`${c.prefix}ban <user> [reason]\``, 'Para banir')
     .addField(`\`${c.prefix}kick <user> [reason]\``, 'Para expulsar')
     .addField(`\`${c.prefix}mute <user>\``, 'Para mutar')
     .addField(`\`${c.prefix}tempmute <user> <time>\``, 'Para mutar um usuário por um tempo determinado')
     .addField(`\`${c.prefix}unmute <user>\``, 'Para desmutar')
     .addField(`\`${c.prefix}clear <messageNumber>\``, 'Para limpar mensagens')
     .addField(`\`${c.prefix}resetwarn <user>\``, 'Para deletar os warns de um usuário')
     .addField(`\`${c.prefix}removewarn <user> <number>\``, 'Para remover um número de warns de um usuário')
     .addField(`\`${c.prefix}blockinvite <status>\``, 'Para ativar/desativar o bloqueio de convites')
     .addField(`\`${c.prefix}blocklink <status>\``, 'Para ativar/desativar o bloqueio de links')
     .setTimestamp()   
      coletor.on("collect", cp => {

      msg.edit(moderacao)
     
     })

      let configuracoes = (reaction, usuario) => reaction.emoji.id=== "729463779292610623" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(configuracoes);

      let config = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE CONFIGURAÇÕES <:config:729463779292610623>**')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .addField(`\`${c.prefix}setwelcome\``, 'Para setar o canal de bem-vindos')
     .addField(`\`${c.prefix}setgoodbye\``, 'Para setar o canal de adeus')
     .addField(`\`${c.prefix}setsugestion\``, 'Para setar o canal de sugestões')
     .addField(`\`${c.prefix}setpunishments\``, 'Para setar o canal punições')
     .addField(`\`${c.prefix}setpatch\``, 'Para setar o canal de patches')
     .addField(`\`${c.prefix}setrole\``, 'Para setar o cargo')
     .addField(`\`${c.prefix}setmute\``, 'Para setar o cargo de mute')
     .addField(`\`${c.prefix}deletesugestion\``, 'Para deletar o set de sugestões')
     .addField(`\`${c.prefix}deletewelcome\``, 'Para deletar o set de bem-vindos')
     .addField(`\`${c.prefix}deletegoodbye\``, 'Para deletar o set de adeus')
     .addField(`\`${c.prefix}deletepunishments\``, 'Para deletar o set de punições')
     .addField(`\`${c.prefix}deletepatches\``, 'Para deletar o set de patches')
     .addField(`\`${c.prefix}deleterole\``, 'Para deletar cargo setado')
     .addField(`\`${c.prefix}deletemute\``, 'Para deletar cargo de mute setado')
     .addField(`\`${c.prefix}deletesets\``, 'Para deletar todos os canais setados')
     .addField(`\`${c.prefix}setwelimage\``, 'Para setar a imagem de bem-vindos')
     .addField(`\`${c.prefix}setleaveimage\``, 'Para setar a imagem de adeus')
     .setTimestamp()   
     coletor2.on("collect", cp => {

      msg.edit(config)
     
     })

      let div = (reaction, usuario) => reaction.emoji.id === "729466498300772363" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(div);

      let diversao = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE DIVERSÃO <:game:729466498300772363>**')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .addField(`\`${c.prefix}roleta\``, 'Para jogar roleta russa')
     .addField(`\`${c.prefix}guess\``, 'Para tentar adivinhar o número secreto')
     .addField(`\`${c.prefix}ascii <texto>\``, 'Para converter o texto em ASCII')
     .addField(`\`${c.prefix}firstword <texto>\``, 'Para dizer suas primeiras palavras')
     .addField(`\`${c.prefix}morse <texto>\``, 'Para converter um texto em código morse')
     .addField(`\`${c.prefix}reverse <texto>\``, 'Para reverter um texto')
     .addField(`\`${c.prefix}lenny\``, 'Para enviar uma carinha')
     .addField(`\`${c.prefix}jokenpô\``, 'Para pedra, papel e tesoura')
     .addField(`\`${c.prefix}pergunta <pergunta>\``, 'Para fazer uma pergunta')
     .addField(`\`${c.prefix}servericon\``, 'Para pegar a imagem do servidor')
     .addField(`\`${c.prefix}avatar <usuário>\``, 'Para pegar a imagem de um usuário')
     .addField(`\`${c.prefix}say <usuário> <texto>\``, 'Para se passar por um usuário')
     .addField(`\`${c.prefix}ship <usuário>\``, 'Para testar seu amor com o usuário')
     .setTimestamp()   
      coletor3.on("collect", cp => {

      msg.edit(diversao)
     
     })

      let util = (reaction, usuario) => reaction.emoji.id === "729467612253126666" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(util);

     let uteis = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS ÚTEIS <:emoji:729467612253126666>**')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .addField(`\`${c.prefix}suporte\``, 'Faça parte da nossa equipe oficial')
     .addField(`\`${c.prefix}serverinfo\``, 'Para informações do servidor')
     .addField(`\`${c.prefix}anuncio\``, 'Para criar um anúncio')
     .addField(`\`${c.prefix}proganuncio\``, 'Para criar um anúncio que será enviado em um tempo determinado')
     .addField(`\`${c.prefix}userinfo\``, 'Para informações do usuário')  
     .addField(`\`${c.prefix}botinfo\``, 'Para informações do bot')
     .addField(`\`${c.prefix}lembrar <tempo> [razão]\``, 'Para criar um lembrete')
     .addField(`\`${c.prefix}clima <cidade>\``, 'Para ver o clima')
     .addField(`\`${c.prefix}sugestao <sugestão>\``, 'Para enviar uma sugestão')
     .addField(`\`${c.prefix}sets\``, 'Para ver os canais setados')
     .addField(`\`${c.prefix}role\``, 'Para ganhar o cargo setado')
     .addField(`\`${c.prefix}calc <conta>\``, 'Para pegar a resposta da conta matemática')
     .addField(`\`${c.prefix}invite\``, 'Para entrar ou convidar o bot para seu servidor')
     .addField(`\`${c.prefix}cpu\``, 'Para ver status da CPU')
     .addField(`\`${c.prefix}addemoji <nome> <url>\``, 'Para adicionar um emoji em seu servidor')
     .addField(`\`${c.prefix}emoji <nome>\``, 'Para ver informações de um emoji do servidor')
     .addField(`\`${c.prefix}covid19 <região>\``, 'Para ver informações do COVID-19')
     .addField(`\`${c.prefix}traduzir <sigla> <texto>\``, 'Para traduzir seu texto para o idioma escolhido')
     .setTimestamp()   
      coletor4.on("collect", cp => {

      msg.edit(uteis)
     
     })

      let pro = (reaction, usuario) => reaction.emoji.id === "729454785216118794" && usuario.id === message.author.id;
      let coletor6 = msg.createReactionCollector(pro);

    let profile = new Discord.MessageEmbed()
    .setTitle('**COMANDOS SOCIAL <:membros:729454785216118794>**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setColor('RANDOM')
    .addField(`\`${c.prefix}perfil <usuário>\``, 'Para ver o perfil de um usuário')
    .addField(`\`${c.prefix}desc <descrição>\``, 'Para definir a descrição do seu perfil')
    .addField(`\`${c.prefix}editcolor <cor>\``, 'Para setar a cor do seu perfil')
    .addField(`\`${c.prefix}editimage <imagem>\``, 'Para setar uma imagem para seu perfil')
    .addField(`\`${c.prefix}addrep <usuário>\``, 'Para adicionar reputação a um usuário')
    coletor6.on('collect', cp => {

      msg.edit(profile)
      
    })

      let ini = (reaction, usuario) => reaction.emoji.id === "730955576489541642" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(ini);

      let inicio = new Discord.MessageEmbed()
      .setTitle('**LISTA DE COMANDOS <:comandos:729477049252708423>**')
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setColor('RANDOM')
      .addField('**Comandos de moderação: <:ban:729462106721746946>**', `\`kick, ban, mute, warn...\``)
      .addField('**Comandos de configurações: <:config:729463779292610623>**', `\`setwelcome, setmute, setlogs...\``)
      .addField('**Comandos de diversão: <:game:729466498300772363>**', `\`jokenpô, perguntar, avatar...\``)
      .addField('**Comandos úteis: <:emoji:729467612253126666>**', `\`clima, calcular, sugestão...\``)
      .addField('**Comandos social <:membros:729454785216118794>**', `\`perfil, editimage, desc...\``)
      coletor5.on("collect", cp => {

      msg.edit(inicio)
     
     })

  })
}

exports.help = {
    name: 'ajuda',
    aliases: ['help']
}