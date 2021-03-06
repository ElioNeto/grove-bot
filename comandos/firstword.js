const Discord = require('discord.js')
var Jimp = require("jimp")
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

    let a1 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** Você precisa me dizer as primeiras palavras!')

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send(a1)

    } else {

      let a2 = new Discord.MessageEmbed()
      .setDescription('<:incorreto:737091863558750279> **|** Você ultrapassou o limite de 50 caracteres!')

        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send(a2)

        } else {

            if (message.member.hasPermission('ATTACH_FILES')) {

              let a3 = new Discord.MessageEmbed()
              .setDescription('<a:discord:737315845633474650> **|** Processando...')

              let erro = new Discord.MessageEmbed()
              .setDescription('<:incorreto:737091863558750279> **|** Ocorreu um erro ao criar a imagem.')
              
                var authorMessage = message
                message.channel.send(a3).then(message => {
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.send(erro)
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')

                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })

            } else {

              let erro1 = new Discord.MessageEmbed()
              .setDescription('<:incorreto:737091863558750279> **|** Eu não tenho a permissão necessária para fazer isso!')

                message.channel.send(erro1)

            }
        }
    }
}

exports.help = {
    name: "primeiraspalavras",
    aliases: ['firstword']
}