const Discord = require('discord.js')
const db = require('quick.db')
const translate = require('@vitalets/google-translate-api');
translate.languages['sr-Latn'] = 'Serbian Latin';

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
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar o que traduzir!')

  let a2 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar a sigla do idioma, caso eu não responda é por que a sigla não existe!')

  let type = args[0]
  if(!type) return message.channel.send(a2)

  let texto = args.slice(1).join(' ')
  if(!texto) return message.channel.send(a1)

  translate(texto, {to: type}).then(res => {
    message.channel.createWebhook(`${message.author.username}`, {avatar: message.author.avatarURL({dynamic: true}), reason: 'Criado por Grove'}).then(Webhook => {
      message.delete()
      Webhook.send(res.text).then(() => {
        Webhook.delete()
      })
    })
  })
}

exports.help = {
  name: 'traduzir',
  aliases: ['translate', 'tradutor', 'traduz']
}