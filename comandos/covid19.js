const fetch = require('node-fetch');
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

        let countries = args.join(" ");

        let a1 = new Discord.MessageEmbed()
       .setDescription('<:incorreto:737091863558750279> **|** Você precisa me dizer um país, ou digite \`mundial\` para saber as informações do mundo todo!')

        if(!args[0]) return message.channel.send(a1);

        if(args[0] === "mundial"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`COVID-19 <:globo:729463751287242793>`)
                .addField('Casos confirmados 🦠', `\`${confirmed}\``)
                .addField('Recuperados 😷', `\`${recovered}\``)
                .addField('Mortes :skull:', `\`${deaths}\``)
                .setTimestamp()
                .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
                .setThumbnail(`https://imagensbrasil.org/images/2020/06/29/Capturar.png`)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`COVID-19 em **${countries}** 🔬`)
                .addField('Casos confirmados 🦠', `\`${confirmed}\``)
                .addField('Recuperados 😷', `\`${recovered}\``)
                .addField('Mortes :skull:', `\`${deaths}\``)
                .setTimestamp()
                .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
                .setThumbnail(`https://imagensbrasil.org/images/2020/06/29/Capturar.png`)

                message.channel.send(embed)
            }).catch(e => {

              let a9 = new Discord.MessageEmbed()
              .setDescription('<:incorreto:737091863558750279> **|** Não encontrei este país!')

                return message.channel.send(a9)
            })
        }
    }

exports.help = {
  name: 'covid',
  aliases: ['covid19', 'corona', 'coronavirus', 'virus', 'coronavírus', 'vírus']
}

  