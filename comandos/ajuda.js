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
     .setTitle('**LISTA DE COMANDOS <:commandreload:737102191160197150>**')
     .setDescription('<:correto:737091697615568957> **|** Enviei a lista de comandos para você na DM!')
     .addField('<:Info:737103117971357826> Observação', 'Se não chegar nada verifique se suas mensagens de membros de servidores estão ativadas!')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .setTimestamp()   

     message.channel.send(embeddm)

    let embed1 = new Discord.MessageEmbed()
    .setTitle('**LISTA DE COMANDOS <:commandreload:737102191160197150>**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setColor('RANDOM')
    .addField('**Comandos de moderação: <:admin:737317049860358206>**', `\`kick, ban, mute, warn...\``)
    .addField('**Comandos de configurações: <a:config:737103260459991080>**', `\`setwelcome, setmute, setlogs...\``)
    .addField('**Comandos de diversão: <:controle:737102308755767417>**', `\`jokenpô, perguntar, avatar...\``)
    .addField('**Comandos úteis: <:emoji:737317098711154742>**', `\`clima, calcular, sugestão...\``)
    .addField('**Comandos social <:pessoas:737094140264841257>**', `\`perfil, editimage, desc...\``)

     message.member.send(embed1).then(msg => {
       msg.react('737317049860358206').then(() => msg.react('737103260459991080')).then(() => msg.react('737102308755767417')).then(() => msg.react('737317098711154742')).then(() => msg.react('737094140264841257')).then(() => msg.react('737321379556491315'))
       
      let mod = (reaction, usuario) => reaction.emoji.id === "737317049860358206" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(mod);

      let moderacao = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE MODERAÇÃO <:admin:737317049860358206>**')
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

      let configuracoes = (reaction, usuario) => reaction.emoji.id=== "737103260459991080" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(configuracoes);

      let config = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE CONFIGURAÇÕES <a:config:737103260459991080>**')
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

      let div = (reaction, usuario) => reaction.emoji.id === "737102308755767417" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(div);

      let diversao = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE DIVERSÃO <:controle:737102308755767417>**')
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

      let util = (reaction, usuario) => reaction.emoji.id === "737317098711154742" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(util);

     let uteis = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS ÚTEIS <:emoji:737317098711154742>**')
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

      let pro = (reaction, usuario) => reaction.emoji.id === "737094140264841257" && usuario.id === message.author.id;
      let coletor6 = msg.createReactionCollector(pro);

    let profile = new Discord.MessageEmbed()
    .setTitle('**COMANDOS SOCIAL <:pessoas:737094140264841257>**')
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

      let ini = (reaction, usuario) => reaction.emoji.id === "737321379556491315" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(ini);

      let inicio = new Discord.MessageEmbed()
      .setTitle('**LISTA DE COMANDOS <:commandreload:737102191160197150>**')
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setColor('RANDOM')
      .addField('**Comandos de moderação: <:admin:737317049860358206>**', `\`kick, ban, mute, warn...\``)
      .addField('**Comandos de configurações: <a:config:737103260459991080>**', `\`setwelcome, setmute, setlogs...\``)
      .addField('**Comandos de diversão: <:controle:737102308755767417>**', `\`jokenpô, perguntar, avatar...\``)
      .addField('**Comandos úteis: <:emoji:737317098711154742>**', `\`clima, calcular, sugestão...\``)
      .addField('**Comandos social <:pessoas:737094140264841257>**', `\`perfil, editimage, desc...\``)
      coletor5.on("collect", cp => {

      msg.edit(inicio)
     
     })

  })
}

exports.help = {
    name: 'ajuda',
    aliases: ['help']
}