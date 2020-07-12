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

let game_coletor = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
  time: 1000 * 60 * 5
})

let bot_coletor = message.channel.createMessageCollector(x => x.author.id == message.author.id, {
  time: 1000 * 60 * 5
})

let gameconfig = {
  maximum: Math.floor(Math.random() * 899) + 100,
  minimum: Math.floor(Math.random() * 100) + 1,
  tries: 10,
  trycount: 0
}

let embederro = new Discord.MessageEmbed()
.setTitle('**JOGO EM ANDAMENTO**')
.setDescription('<:incorreto:729451886683619438> **|** Já tem um jogo em andamento neste servidor, espere o jogo terminar para iniciar outro!')
.setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
.setTimestamp()
.setColor('RANDOM')

let guess = db.get(`guess_${message.guild.id}`)

if(!guess) guess = false

if(guess === true) return message.channel.send(embederro)

let random_number = Math.floor(Math.random() * (gameconfig.maximum - gameconfig.minimum + 1)) + gameconfig.minimum;

let embed1 = new Discord.MessageEmbed()
.setTitle('**GUESS <:discord:729445842888425592>**')
.setDescription(`O número está entre **${gameconfig.minimum}** e **${gameconfig.maximum}**, você tem **${gameconfig.tries}** tentativas para acerta-lo\n\nDigite \`parar\` a qualquer momento para cancelar o jogo!`)
.setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
.setColor('RANDOM')
.setTimestamp()   

message.channel.send(embed1)
console.log(random_number)
db.set(`guess_${message.guild.id}`, true)

game_coletor.on('collect', u_msg => {

  if(u_msg.content.toLowerCase() === 'parar') {

    let forced0 = new Discord.MessageEmbed()
      .setTitle('**JOGO CANCELADO**')
      .setDescription(`<:incorreto:729451886683619438> **|** Você cancelou o jogo!\nO número correto era **${random_number}**!`)
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setColor('FF0000')
      .setTimestamp()

      message.channel.send(forced0)
      game_coletor.stop()
      db.set(`guess_${message.guild.id}`, false)
  }

  if(parseInt(u_msg.content) === random_number) {

    let win0 = new Discord.MessageEmbed()
      .setTitle('**VOCÊ GANHOU**')
      .setDescription(`<:correto:729451917004242964> **|** Parabéns você acertou o número correto!\n\nTentativas restantes: **${gameconfig.tries - 1}**\nTentativas usadas: **${gameconfig.trycount + 1}**`)
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setColor('39FF14')
      .setTimestamp()

      message.channel.send(win0)
      game_coletor.stop()
      db.set(`guess_${message.guild.id}`, false)
  }

  if(gameconfig.tries === 1 && parseInt(u_msg.content) !== random_number) {

    let gameover0 = new Discord.MessageEmbed()
      .setTitle('**VOCÊ PERDEU**')
      .setDescription(`<:incorreto:729451886683619438> **|** Você perdeu todas suas tentativas!\nO número correto era **${random_number}**!`)
      .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
      .setColor('FF0000')
      .setTimestamp()

      message.channel.send(gameover0)
      game_coletor.stop()
      db.set(`guess_${message.guild.id}`, false)
  }

  if(parseInt(u_msg.content) < random_number && gameconfig.tries > 1) {
    gameconfig.trycount++;
    gameconfig.tries--;

    let embed4 = new Discord.MessageEmbed()
    .setTitle('**GUESS <:discord:729445842888425592>**')
    .setDescription(`**${u_msg.content}** é menor que o número correto!\nVocê tem **${gameconfig.tries}** tentativas restantes!`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setColor('RANDOM')
    .setTimestamp()   

    message.channel.send(embed4)
  }

  if(parseInt(u_msg.content) > random_number && gameconfig.tries > 1) {
    gameconfig.trycount++;
    gameconfig.tries--;

    let embed5 = new Discord.MessageEmbed()
    .setTitle('**GUESS <:discord:729445842888425592>**')
    .setDescription(`**${u_msg.content}** é maior que o número correto!\nVocê tem **${gameconfig.tries}** tentativas restantes!`)
    .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
    .setColor('RANDOM')
    .setTimestamp()

    message.channel.send(embed5)
  }
})

game_coletor.on('end', (collected, reason) => {

  if(reason === 'time') {

    game_coletor.stop()
    db.set(`guess_${message.guild.id}`, false)

    let embedT = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** O jogo foi cancelado pois o tempo de 5 minutos excedeu!')

    message.channel.send(embedT)
    
  }
})
}

exports.help = {
  name: 'guess',
  aliases: ['adivinhar']
}