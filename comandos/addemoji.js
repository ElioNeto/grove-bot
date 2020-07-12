const Discord = require('discord.js')
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
  .setDescription('<:incorreto:729451886683619438> **|** Eu preciso ter a permissão de de adicionar emojis!')

   let a3 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa ter a permissão de adicionar emojis!')

  if(!message.guild.me.hasPermission('MANAGE_EMOJIS')) return message.channel.send(a1)

  let a2 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me enviar o URL do emoji!')

  let a8 = new Discord.MessageEmbed()
  .setDescription('<:incorreto:729451886683619438> **|** Você precisa me informar o nome do emoji')

  if(!args[0]) return message.channel.send(a8)
  if(!args[1]) return message.channel.send(a2)

  if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send(a3)

  try {
    message.guild.emojis.create(args[1], args[0]).then(emoji => {
      let a4 = new Discord.MessageEmbed()
      .setDescription(`<:correto:729451917004242964> **|** O emoji ${emoji} foi adicionado com sucesso!`)

      message.channel.send(a4)
    })
  } catch (err) {
    let a5 = new Discord.MessageEmbed()
    .setDescription(`<:incorreto:729451886683619438> **|** Ocorreu um erro! \`\`\`js\n${err}\`\`\``)

    message.channel.send(a5)
  }

}

exports.help = {
  name: 'addemoji',
  aliases: []
}