const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

    if (!['389866221295763456'].includes(message.author.id)) {

      let a = new Discord.MessageEmbed()
      .setDescription('<:incorreto:729451886683619438> **|** Apenas meu desenvolvedor pode usar esse comando.')

    return message.channel.send(a)

    }

    let a1 = new Discord.MessageEmbed()
    .setDescription('<:incorreto:729451886683619438> **|** Digite algum comando!')

    const code = args.slice(0).join(" ")
    if (!code) return message.channel.send(a1)
    
        try {
        let ev = require('util').inspect(eval(code));
        if (ev.length > 1950) {
            ev = ev.substr(0, 1950);
        }

          let embed = new Discord.MessageEmbed()
          .setDescription(`:inbox_tray: **ENTRADA**\n\`\`\`js\n${code}\`\`\`\n:outbox_tray: **SAÍDA**\n\`\`\`js\n${ev}\`\`\``)
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()

           message.channel.send(embed)

        } catch(err) {

          let errorrr = new Discord.MessageEmbed()
          .setDescription(`**<:incorreto:729451886683619438> **|** ERRO!**\n\`\`\`\n${err}\`\`\``)
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()

           message.channel.send(errorrr)

        }
  }

 exports.help = {
      name: "eval",
     aliases: []
 }