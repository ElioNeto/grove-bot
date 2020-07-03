const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

    if (!['389866221295763456'].includes(message.author.id)) {
    return message.channel.send(`❌ **|** Apenas meu desenvolvedor pode usar esse comando.`)

    }
    const code = args.slice(0).join(" ")
    if (!code) return message.reply(`❌ **|** Digite algum comando!`)
    
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
          .setDescription(`**❌ **|** ERRO!**\n\`\`\`\n${err}\`\`\``)
          .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
          .setTimestamp()

           message.channel.send(errorrr)

        }
  }

 exports.help = {
      name: "eval",
     aliases: []
 }