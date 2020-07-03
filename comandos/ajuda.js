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
     .setTitle('**LISTA DE COMANDOS :tools:**')
     .setDescription('Enviei a lista de comandos para você na DM! :smile:')
     .addField('OBSERVAÇÃO', 'Se não chegar nada verifique se suas mensagens de membros de servidores estão ativadas!')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .setTimestamp()   

     message.channel.send(embeddm)

    let embed1 = new Discord.MessageEmbed()
    .setTitle('**LISTA DE COMANDOS :tools:**')
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setTimestamp()
    .setColor('RANDOM')
    .addField('**Comandos de moderação: :hammer:**', `\`kick, ban, mute, warn...\``)
    .addField('**Comandos de configurações: :gear:**', `\`setwelcome, setmute, setlogs...\``)
    .addField('**Comandos de diversão: :video_game:**', `\`jokenpô, perguntar, avatar...\``)
    .addField('**Comandos úteis: :pushpin:**', `\`clima, calcular, sugestão...\``)

     message.member.send(embed1).then(msg => {
       msg.react('🔨').then(() => msg.react('⚙️')).then(() => msg.react('🎮')).then(() => msg.react('📌')).then(() => msg.react('🔙'))
       
      let mod = (reaction, usuario) => reaction.emoji.name === "🔨" && usuario.id === message.author.id;
      let coletor = msg.createReactionCollector(mod);

      let moderacao = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE MODERAÇÃO :hammer:**')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .addField(`\`${c.prefix}warn <user> [reason]\``, 'Para dar warn')
     .addField(`\`${c.prefix}ban <user> [reason]\``, 'Para banir')
     .addField(`\`${c.prefix}kick <user> [reason]\``, 'Para expulsar')
     .addField(`\`${c.prefix}mute <user>\``, 'Para mutar')
     .addField(`\`${c.prefix}tempmute <user> <time>\``, 'Para mutar um usuário por um tempo determinado')
     .addField(`\`${c.prefix}unmute <user>\``, 'Para desmutar')
     .addField(`\`${c.prefix}clear <messageNumber>\``, 'Para limpar mensagens')
     .addField(`\`${c.prefix}resetwarn <user>\``, 'Para deletar os warns de algum jogador')
     .addField(`\`${c.prefix}blockinvite <status>\``, 'Para ativar/desativar o bloqueio de convites')
     .addField(`\`${c.prefix}blocklink <status>\``, 'Para ativar/desativar o bloqueio de links')
     .setTimestamp()   
      coletor.on("collect", cp => {

      msg.edit(moderacao)
     
     })

      let configuracoes = (reaction, usuario) => reaction.emoji.name === "⚙️" && usuario.id === message.author.id;
      let coletor2 = msg.createReactionCollector(configuracoes);

      let config = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE CONFIGURAÇÕES :gear:**')
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
     .setTimestamp()   
     coletor2.on("collect", cp => {

      msg.edit(config)
     
     })

      let div = (reaction, usuario) => reaction.emoji.name === "🎮" && usuario.id === message.author.id;
      let coletor3 = msg.createReactionCollector(div);

      let diversao = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS DE DIVERSÃO :video_game:**')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .addField(`\`${c.prefix}roleta\``, 'Para roleta russa')
     .addField(`\`${c.prefix}jokenpô\``, 'Para pedra, papel e tesoura')
     .addField(`\`${c.prefix}pergunta <pergunta>\``, 'Para fazer uma pergunta')
     .addField(`\`${c.prefix}avatar <usuário>\``, 'Para pegar a imagem de um usuário')
     .setTimestamp()   
      coletor3.on("collect", cp => {

      msg.edit(diversao)
     
     })

      let util = (reaction, usuario) => reaction.emoji.name === "📌" && usuario.id === message.author.id;
      let coletor4 = msg.createReactionCollector(util);

     let uteis = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .setTitle('**COMANDOS ÚTEIS :pushpin:**')
     .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
     .addField(`\`${c.prefix}suporte\``, 'Adicione o bot ao seu servidor ou entre no servidor dele')
     .addField(`\`${c.prefix}serverinfo\``, 'Para informações do servidor')
     .addField(`\`${c.prefix}userinfo\``, 'Para informações do usuário')  
     .addField(`\`${c.prefix}botinfo\``, 'Para informações do bot')
     .addField(`\`${c.prefix}lembrar <tempo> [razão]\``, 'Para criar um lembrete')
     .addField(`\`${c.prefix}clima <cidade>\``, 'Para ver o clima')
     .addField(`\`${c.prefix}sugestao <sugestão>\``, 'Para enviar uma sugestão')
     .addField(`\`${c.prefix}sets\``, 'Para ver os canais setados')
     .addField(`\`${c.prefix}role\``, 'Para ganhar o cargo setado')
     .addField(`\`${c.prefix}warns\``, 'Para ver quantos warns você tem neste servidor')
     .addField(`\`${c.prefix}calc <conta>\``, 'Para pegar a resposta da conta matemática')
     .addField(`\`${c.prefix}covid19 <região>\``, 'Para ver informações do COVID-19')
     .setTimestamp()   
      coletor4.on("collect", cp => {

      msg.edit(uteis)
     
     })

      let ini = (reaction, usuario) => reaction.emoji.name === "🔙" && usuario.id === message.author.id;
      let coletor5 = msg.createReactionCollector(ini);

      let inicio = new Discord.MessageEmbed()
      .setTitle('**LISTA DE COMANDOS :tools:**')
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      .setColor('RANDOM')
      .addField('**Comandos de moderação: :hammer:**', `\`kick, ban, mute, warn...\``)
      .addField('**Comandos de configurações: :gear:**', `\`setwelcome, setmute, setlogs...\``)
      .addField('**Comandos de diversão: :video_game:**', `\`jokenpô, perguntar, avatar...\``)
      .addField('**Comandos úteis: :pushpin:**', `\`clima, calcular, sugestão...\``)
      coletor5.on("collect", cp => {
      cp.remove();

      msg.edit(inicio)
     
     })

  })
}

exports.help = {
    name: 'ajuda',
    aliases: ['help']
}