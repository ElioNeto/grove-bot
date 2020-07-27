const discord = require('discord.js');
const fetch = require("node-fetch");
const db = require('quick.db')

exports.run = async (bot, message, args, texts) => {

  var manutenção = await db.get(`manutenção`)
  
    if(!manutenção === true){

    let embedx = new Discord.MessageEmbed()

            .setTitle('**MANUTENÇÃO ATIVADA**')
            .setFooter(`Grove • Todos direitos reservados`, bot.user.displayAvatarURL({dynamic: true}))
            .setDescription('A manutenção foi ativada pelo meu desenvolvedor! Todos meus comandos estão desativados no momento. Não há uma previsão para voltar.')
            .setTimestamp()   
      
     return message.channel.send(embedx)
      
    } 

    let a2 = new discord.MessageEmbed()
    .setDescription("<:incorreto:737091863558750279> **|** Você precisa me informar um texto para converter para ASCII.")

    let text = encodeURIComponent(args.join(' '));
    if (!text) return message.channel.send(a2);

    let a1 = new discord.MessageEmbed()
    .setDescription('<:incorreto:737091863558750279> **|** O texto inserido é muito longo!')

    const tooLong = a1;

    fetch(`http://artii.herokuapp.com/make?text=${text}`)
        .then(res => res.text())
        .then(body => {
            if (body.length > 2000) return message.channel.send(tooLong);
            return message.channel.send(body, {
                code: "fix"
            });
        })
        .catch(error => {
            this.client.logger.error(error);
            return message.channel.send(texts.general.error.replace(/{{err}}/g, error.message));
        });
}

exports.help = {
    name: 'ascii'
}